import { createContext } from 'react'

export const i18n = {
  th: {
    searchForm: {
      button: 'ค้นหา'
    }
  },
  en: {
    searchForm: {
      button: 'Search'
    }
  }
}

export default createContext(i18n.en)
