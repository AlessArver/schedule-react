export type mapStateToProps = {
  initialized: boolean
}
export type mapDispatchToProps = {
  initializeApp: () => void
}
export type storeProps = mapStateToProps & mapDispatchToProps