import { RootState } from '../flux'

export const getSchedules = (state: RootState) => state.schedulesPage.schedules

export const getSchedulesIsLoading = (state: RootState) => state.schedulesPage.schedulesIsLoading