export default {
  setToast: (isToast: boolean, toastType: string, text: string) =>
    ({type: 'TOAST/SET_TOAST', isToast, toastType, text} as const)
}