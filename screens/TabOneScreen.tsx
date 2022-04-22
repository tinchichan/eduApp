import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <br></br>
      <Text>There are three tabs in this app.</Text>
      <Text>About: Introductory Page of the App</Text>
      <Text>Show All School: You can search school information here.</Text>
      <Text>Take Note: You can jot down school information if you find something useful.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
