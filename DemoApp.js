import { View, Text } from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from './FetchProducts'

const DemoApp = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state);
  console.log(products);
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{padding:20, borderWidth:0.5}} 
      onPress={()=>{dispatch(fetchProducts())}}>Call API</Text>
    </View>
  )
}

export default DemoApp