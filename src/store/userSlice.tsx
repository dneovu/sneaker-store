import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  email: string | null;
  isAuthLoading: boolean;
}

const initialState: UserState = {
  id: null,
  email: null,
  isAuthLoading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(
      state,
      action: PayloadAction<{ id: string; email: string | null }>
    ) {
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
    },
    setIsAuthLoading(state, action: PayloadAction<boolean>) {
      state.isAuthLoading = action.payload;
    },
  },
});

export const { setUser, removeUser, setIsAuthLoading } = userSlice.actions;
export default userSlice.reducer;
