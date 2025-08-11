import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CartItem } from './cartSlice';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/utils';

export interface OrderItem {
  id: string;
  items: CartItem[];
  createdAt: Date;
}

interface OrderState {
  items: OrderItem[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  items: [],
  loading: false,
  error: null,
};

export const createOrder = createAsyncThunk(
  'cart/createOrder',
  async ({ userId, items }: { userId: string; items: CartItem[] }) => {
    const ordersRef = collection(db, 'orders', userId, 'userOrders');
    const docRef = await addDoc(ordersRef, {
      items,
      createdAt: new Date().toISOString(),
    });

    console.log(docRef.id);
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
        items: CartItem[];
        createdAt: string;
      };

      return {
        id: doc.id,
        items: data.items,
        createdAt: new Date(data.createdAt),
      };
    });

    console.log(orders);

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
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearOrders } = orderSlice.actions;

export default orderSlice.reducer;
