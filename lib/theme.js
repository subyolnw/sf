import { createContext } from 'react'

export const theme = {
  light: {
    fgColor: '#000',
    bgColor: '#fff'
  },
  dark: {
    fgColor: '#fff',
    bgColor: '#000'
  }
}

export default createContext(theme.light)
