export default {
  toggleShowToast: (isToast: boolean) => ({type: 'TOAST/TOGGLE_SHOW_TOAST', isToast} as const)
}