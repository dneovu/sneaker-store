import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sneaker } from '@/types/sneaker';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/utils';

export interface CartItem {
  id: Sneaker['id'];
  size: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  loading: boolean;
  loaded: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
  loading: false,
  loaded: false,
  error: null,
};

// fetch from firebase
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (userId: string) => {
    const docRef = doc(db, 'carts', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().items as CartItem[];
    }
    return [];
  }
);

// save to firebase
export const saveCartToFirebase = createAsyncThunk(
  'cart/saveCartToFirebase',
  async ({ userId, items }: { userId: string; items: CartItem[] }) => {
    const docRef = doc(db, 'carts', userId);
    await setDoc(docRef, { items: items });
    console.log(items);
    return items;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<CartItem['id']>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ item: CartItem; type: 'inc' | 'dec' }>
    ) => {
      const { item, type } = action.payload;
      const cartItem = state.items.find(
        (i) => i.id === item.id && i.size === item.size
      );

      if (!cartItem) return;

      if (type === 'dec' && cartItem.size > 1) cartItem.quantity -= 1;
      else if (type === 'inc') cartItem.quantity += 1;
    },
    proceedCheckout: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.loaded = true;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.loading = false;
        state.loaded = true;
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  changeQuantity,
  proceedCheckout,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
