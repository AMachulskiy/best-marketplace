import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IMenuState {
  isOpen: boolean
}

const initialState: IMenuState = {
  isOpen: false,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
  },
})

export default menuSlice
