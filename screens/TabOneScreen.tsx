import { StyleSheet } from 'react-native'
import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'
import { useCallback } from 'react'
import { Button } from 'react-native'

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const { t, i18n } = useTranslation()

  const changeLanguage = useCallback(() => {
    if (i18n.language == 'zh') {
      i18n.changeLanguage('en')
      return
    }
    i18n.changeLanguage('zh')
  }, [])

  return (
    <View style={styles.container}>
      <Button title="change language" onPress={changeLanguage}></Button>
      <Text>{t('a')}</Text>
      <Text style={styles.title}>About This App</Text>
      <Text>{'\n'}</Text>
      <Text style={styles.para}>
        There are <Text style={{ fontWeight: 'bold' }}>three tabs</Text> in this
        app.
      </Text>
      <Text>{'\n'}</Text>
      <View>
        <Text style={styles.para}>
          <Text style={{ fontWeight: 'bold' }}>About</Text>: Introductory Page
          of the App
        </Text>
        <Text style={styles.para}>
          <Text style={{ fontWeight: 'bold' }}>Schools</Text>: Search All Hong
          Kong schools information here. First choose the district, then search
          for specific info you prefer.
        </Text>
        <Text style={styles.para}>
          <Text style={{ fontWeight: 'bold' }}>Take Note</Text>: Jot down school
          information if you find something useful.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  para: {
    textAlign: 'left',
    fontSize: 20,
    margin: 20,
  },
})
