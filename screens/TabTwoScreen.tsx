import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList , ActivityIndicator, TextInput, Button } from 'react-native'
import { Text, View } from '../components/Themed'
import fetchClick from '../components/fetchClick'

//18dictricts api link
const URLwongtaisin = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.34105761010081&long=114.19532775878906'
const URLsouthern = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.2375920813679&long=114.1552448272705'
const URLwestern = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.28320326161826&long=114.13880825042723'
const URLwanchai = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.27951820593017&long=114.17861223220824'
const URLeastern = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.285569737161087&long=114.21996116638184'
const URLisland = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.27371834339708&long=113.91895294189453'
const URLtuenmun = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.388045420568076&long=113.95671844482422'
const URLYuenLong = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.443699987801786&long=114.0283441543579'
const URLnorthern = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.498219584753013&long=114.1398811340332'
const URLtaipo = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.447491635933645&long=114.16623115539551'
const URLshatin = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.386140737643018&long=114.18949127197266'
const URLtw = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.366839471993924&long=114.11275863647461'
const URLkwaitsing = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.330005374001328&long=114.11138534545898'
const URLsaikung = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.28553747295002&long=114.27377700805664'
const URLkt = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.316984097908534&long=114.22708511352539'
const URLyautsummong = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.297799818524283&long=114.1749858856201'
const URLssp = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.335055505656236&long=114.15915012359619'
const URLklc = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.328545255191877&long=114.18756008148193'

const App = () =>{
  //hook
  const [searchInput, setSearchInput] = useState("")
  const [data, setData] = useState([])
  const [filterItems, setFilterItem] = useState([]);

  const getApi = async (url) => {
    let res = await fetch(
      url,
      { method: 'GET' }
    )
    const json = await res.json()
    setData(json.results)
    setFilterItem(json.results)
    console.log(json.results)
  }

  //render
  // useEffect(() => {
  //   getApi();
  // }, [])

  //search bar
  const searchFilter = (text : any) => {
    if (text){
      const newData = data.filter(function (item){
        return Object.values(item).some(e => !searchInput || (e as any).toString().toUpperCase().includes(searchInput.toUpperCase()));
      });
      setFilterItem(newData);
      setSearchInput(text);
      console.log(newData)
    }else {
      setFilterItem(data);
      setSearchInput(text);
    }
  }

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#CED0CE',
          marginLeft: '10',
          marginRight: '10'
        }}
      />
    )
  }  

  //display
  return (
    <View style={styles.container}>
        <Button title="Wong Tai Sin" onPress={() => getApi(URLwongtaisin)}></Button>
        <Button title="Southern" style={styles.button} onPress={() => getApi(URLsouthern)}></Button>
        <Button title='Western' style={styles.button} onPress={() => getApi(URLwestern)}>Western</Button>
        <Button title='Eastern' style={styles.button} onPress={() => getApi(URLeastern)}>Eastern</Button>
        <Button title='Wan Chai' style={styles.button} onPress={() => getApi(URLwanchai)}>json</Button>
        <Button title='Island' style={styles.button} onPress={() => getApi(URLisland)}>json</Button>
        <Button title='Tsun Mun' style={styles.button} onPress={() => getApi(URLtuenmun)}>json</Button>
        <Button title='Yuen Long' style={styles.button} onPress={() => getApi(URLYuenLong)}>json</Button>
        <Button title='Northern' style={styles.button} onPress={() => getApi(URLnorthern)}>json</Button>
        <Button title='Tai Po' style={styles.button} onPress={() => getApi(URLtaipo)}>json</Button>
        <Button title='Sha Tin' style={styles.button} onPress={() => getApi(URLshatin)}>json</Button>
        <Button title='Tsuen Wan' style={styles.button} onPress={() => getApi(URLtw)}>json</Button>
        <Button title='Kwai Tsing' style={styles.button} onPress={() => getApi(URLkwaitsing)}>json</Button>
        <Button title='Sai Kung' style={styles.button} onPress={() => getApi(URLsaikung)}>json</Button>
        <Button title='Kwun Tong' style={styles.button} onPress={() => getApi(URLkt)}>json</Button>
        <Button title='Yau Tsim Mong' style={styles.button} onPress={() => getApi(URLyautsummong)}>json</Button>
        <Button title='Sham Shui Po' style={styles.button} onPress={() => getApi(URLssp)}>json</Button>
        <Button title='Kowloon City' style={styles.button} onPress={() => getApi(URLklc)}>json</Button>

      <TextInput
        onChangeText={(item) => searchFilter(item)}
        style={styles.searchInput}
        placeholder="Search Here" />
      <FlatList 
        data={filterItems} 
        style = {styles.flatListStyle}
        renderItem={( {item} ) => (
                <>
                  <Text>學校中文名稱: {item["name-zh"]}</Text>
                  <Text>學校英文名稱: {item["name-en"]}</Text>
                  <Text>地址: {item["address-zh"]} {item["address-en"]}</Text>
                  <Text>資助種類: {item["finance-type-zh"]} {item["finance-type-en"]}</Text>
                  <Text>就讀學生性別: {item["student-gender-zh"]} {item["student-gender-en"]}</Text>
                  <Text>聯絡電話: {item["telephone"]}</Text>
                </>
        )
      }
      ItemSeparatorComponent={renderSeparator}
      />
    </View> 
    ); 
  }

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: 'row',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  flatListStyle: {
    width: '85%',
    fontSize: 20,
    lineHeight: 40,
  },
  button: {
    color: "#841584",
  }
})

export default App;