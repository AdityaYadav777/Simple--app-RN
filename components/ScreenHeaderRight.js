import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

export default function ScreenHeaderRight() {
  return (
   <TouchableOpacity>
<Image

source={require("../assets/images/man.png")}
style={{width:40,height:40}}
 
/>
        

   </TouchableOpacity>
  )
}