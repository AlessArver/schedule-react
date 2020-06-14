import { RootState } from '../flux'

export const getIsToast = (state: RootState) => state.toast.isToast

export const getToastText = (state: RootState) => state.toast.text