
import { StyleSheet} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const bgImage = { uri: "https://reactjs.org/logo-og.png" };

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <br></br>
      <Text style={styles.para}>There are <b>three tabs</b> in this app.</Text>
      <br></br>
        <View>
          <Text style={styles.para}><b>About</b>: Introductory Page of the App</Text>
          <Text style={styles.para}><b>Schools</b>: Search All Hong Kong schools information here. First choose the district, then search for specific info you prefer.</Text>
          <Text style={styles.para}><b>Take Note</b>: Jot down school information if you find something useful.</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  para:{
    textAlign: 'left',
    fontSize: 20,
    margin: 20
  },
});
