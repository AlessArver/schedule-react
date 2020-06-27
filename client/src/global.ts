import { createGlobalStyle } from 'styled-components'

type GlobalStylesType = {
  background: string
  color: string
}

export const GlobalStyles = createGlobalStyle<any>`
  body {
    align-items: center;
    background: ${({theme}) => theme.background};
    color: ${({theme}) => theme.color};
  }`