import { useState, useEffect, createContext, useContext, useMemo } from 'react'
import { id as dictId } from '../data/locale/id.js'
import { en as dictEn } from '../data/locale/en.js'

const dictionaries = { id: dictId, en: dictEn }

const LocaleContext = createContext()

const getInitialLocale = () => {
  if (typeof window !== 'undefined') {
    const saved = window.localStorage.getItem('locale')
    if (saved === 'id' || saved === 'en') return saved
  }
  return 'id'
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem('locale', locale)
    document.documentElement.lang = locale
    document.title = dictionaries[locale].meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', dictionaries[locale].meta.description)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === 'id' ? 'en' : 'id')),
      t: dictionaries[locale],
    }),
    [locale],
  )

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
