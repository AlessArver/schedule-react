export default {
  toggleIsLoading: (isLoading: boolean) => ({type: 'LOADER/TOGGLE_IS_LOADING', isLoading} as const),
  toggleItemsIsLoading: (isLoading: boolean, _id: string) => ({
    type: 'LOADER/TOGGLE_ITEMS_IS_LOADING', isLoading, _id
  } as const)
}