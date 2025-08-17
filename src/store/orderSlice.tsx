import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CartItem } from './cartSlice';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/utils';

export interface OrderSneaker extends CartItem {
  price: number;
  brand: string;
  model: string;
}
export interface OrderItem {
  id: string;
  items: OrderSneaker[];
  total: number;
  createdAt: string;
}

interface OrderState {
  items: OrderItem[];
  loading: boolean;
  loaded: boolean;
  error: string | null;
}

const initialState: OrderState = {
  items: [],
  loading: false,
  loaded: false,
  error: null,
};

export const createOrder = createAsyncThunk(
  'cart/createOrder',
  async ({
    userId,
    items,
    total,
  }: {
    userId: string;
    items: OrderSneaker[];
    total: number;
  }) => {
    const ordersRef = collection(db, 'orders', userId, 'userOrders');
    const docRef = await addDoc(ordersRef, {
      items,
      total,
      createdAt: new Date().toISOString(),
    });

    return { id: docRef.id, items };
  }
);

export const fetchOrders = createAsyncThunk(
  'cart/fetchOrders',
  async (userId: string) => {
    const ordersRef = collection(db, 'orders', userId, 'userOrders');
    const snapshot = await getDocs(ordersRef);

    const orders: OrderItem[] = snapshot.docs.map((doc) => {
      const data = doc.data() as {
        items: OrderSneaker[];
        total: number;
        createdAt: string;
      };

      return {
        id: doc.id,
        items: data.items,
        total: data.total,
        createdAt: data.createdAt,
      };
    });

    return orders;
  }
);

export const orderSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearOrders: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.loading = false;
        state.loaded = true;
      });
  },
});

export const { clearOrders } = orderSlice.actions;

export default orderSlice.reducer;
