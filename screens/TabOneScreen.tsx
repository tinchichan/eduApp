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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('title')}</Text>
      <Text>{'\n'}</Text>
      <Text style={styles.para}>
        {t('desc')}
      </Text>
      <Text>{'\n'}</Text>
      <View>
        <Text style={styles.para}>
          <Text style={{ fontWeight: 'bold' }}>About</Text>: {t('para1')}
        </Text>
        <Text style={styles.para}>
          <Text style={{ fontWeight: 'bold' }}>Schools</Text>: {t('para2')}
        </Text>
        <Text style={styles.para}>
          <Text style={{ fontWeight: 'bold' }}>Take Note</Text>: {t('para3')}
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
