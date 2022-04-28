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
          title: 'About This App',
          desc: 'There are three tabs in this app.',
          para1: 'Introductory Page of the App.',
          para2: 'Search All Hong Kong schools information here. First choose the district, then search for specific info you prefer.',
          para3: 'Take Note: Jot down school information if you find something useful.',
        },
      },
      zh: {
        translation: {
          title: '關於此應用程式',
          desc: '此應用程式有三個頁面',
          para1: '此應用程式的簡介頁',
          para2: '可搜尋全港的院校(包括幼稚園,小學,中學)。首先, 揀選地區。之後，搜尋你有興趣的院校資料。',
          para3: '筆記功能，記下有用的資料。',
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
