import { View, Text ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import React from 'react'



export default function ScreenHeaderBtn({iconUrl,dimension,handlePress}) {

  return (
    <TouchableOpacity  onPress={handlePress}>
        <Image 
       
         source={require('../assets/images/menu.png')}
         style={style.container}
       
        
        />
    </TouchableOpacity>
  )
}


const style=StyleSheet.create({

container:{
    width:40,
    height:40
}

})
