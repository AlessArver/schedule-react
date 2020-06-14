import { RootState } from '../flux'

export const getIsLoading = (state: RootState) => state.loader.isLoading

export const getItemsIsLoading = (state: RootState) => state.loader.itemsIsLoading