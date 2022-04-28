import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { useEffect, useMemo } from 'react'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  const resources = useMemo(() => {
    return {
      en: {
        translation: {
          a: 'a',
        },
      },
      zh: {
        translation: {
          a: '甲',
        },
      },
    }
  }, [])

  useEffect(() => {
    i18n.use(initReactI18next).init({
      resources,
      lng: 'zh',
      interpolation: {
        escapeValue: false,
      },
    })
  }, [])

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}
