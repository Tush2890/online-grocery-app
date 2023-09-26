import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AppState {
    location: string;
    currency: string;
}

const initialState: AppState = {
    location: 'Bengaluru',
    currency: '₹'
}

export const AppSlice = createSlice({
    name: 'appLevel',
    initialState,
    reducers: {
        setLocation: (appState, action: PayloadAction<{location: string}>) => {
            appState.location = action.payload.location;
        },
        setCurrency: (appState, action: PayloadAction<{currency: string}>) => {
            appState.currency = action.payload.currency;
        }
    }
});

export default AppSlice.reducer;
export const { setLocation, setCurrency } = AppSlice.actions