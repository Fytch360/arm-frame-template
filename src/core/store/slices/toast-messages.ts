import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TToastMessageAppearance = "success" | "error" | "default";

export type TToastMessage = {
  id: string;
  value: string;
  appearance?: TToastMessageAppearance;
};

interface ToastMessagesState {
  messages: TToastMessage[];
}

interface AddToastMessagePayload {
  message: string;
  appearance: TToastMessageAppearance;
}

interface RemoveToastMessagePayload {
  id: string;
}

const initialState: ToastMessagesState = {
  messages: [],
};

export const toastMessagesSlice = createSlice({
  name: "@toastMessages",
  initialState,
  reducers: {
    addToastMessage: (state, action: PayloadAction<AddToastMessagePayload>) => {
      const toasts = state.messages;
      const newToasts = [...toasts];
      const value = action.payload.message;
      const appearance = action.payload.appearance;
      const id = `toast-message-${toasts.length + Math.random() * 1000}`;

      newToasts.push({ id, value, appearance });
      state.messages = newToasts;
    },
    removeToastMessage: (
      state,
      action: PayloadAction<RemoveToastMessagePayload>
    ) => {
      const toasts = state.messages;
      const newToasts = [...toasts];
      const filteredToasts = newToasts.filter(
        (message) => message.id !== action.payload.id
      );
      state.messages = filteredToasts;
    },
  },
});

export const { addToastMessage, removeToastMessage } =
  toastMessagesSlice.actions;

export default toastMessagesSlice.reducer;
