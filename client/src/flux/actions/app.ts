export const INITIALIZED_SUCCESS: string = '/schedule-react/app/INITIALIZED-SUCCESS'

export type InitializedSuccessACType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): InitializedSuccessACType => ({type: INITIALIZED_SUCCESS})