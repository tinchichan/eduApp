import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList , ActivityIndicator, TextInput } from 'react-native'
import { Text, View } from '../components/Themed'

const URL = 'https://api.data.gov.hk/v1/nearest-schools?lat=22.34105761010081&long=114.19532775878906'

const App = () =>{
  const [searchInput, setSearchInput] = useState("")
  const [data, setData] = useState([])
  const [filterItems, setFilterItem] = useState([]);

  const getApi = async () => {
    let res = await fetch(
      URL,
      { method: 'GET' }
    )
    const json = await res.json()
    setData(json.results)
    setFilterItem(json.results)
    console.log(json.results)
  }

  useEffect(() => {
    getApi();
  }, [])

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

  return (
    <View style={styles.container}>
      <button>
        
      </button>
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
    flex: 2,
    alignItems: 'center'
    
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
  }
})

export default App;