export type mapStateToProps = {
  initialized: boolean
}
export type mapDispatchToProps = {
  initializeApp: () => void
}

export type Props = {
  theme: string
  toggleTheme: () => void
}

export type storeProps = mapStateToProps & mapDispatchToProps