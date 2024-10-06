import { View, Text ,Image,TextInput,TouchableOpacity,FlatList,StyleSheet} from 'react-native'
import React, { useState } from 'react';
import { useRouter } from 'expo-router';


const jobTypes=["Full-time","Part-Time","Contractor"];



export default function Wellcome() {

    const [activeJobType,setActiveJobType]=useState("Full-Time");

    const router=useRouter();
  return (
    <View>
      
      <View style={{}}>
        
        <Text style={style.userName}  >Hello Aditya</Text>
        <Text style={style.wellcomeMessage}  >Find Your Perfect Job</Text>
        
         </View >

         <View style={style.searchBar} >      
         <View  > 

         <TextInput placeholder='what are You Looking For' 
         value=''
         onChange={()=> {}} 
         style={style.searchContainer}
         />
         </View>

         <TouchableOpacity onPress={()=>{}}   style={{width:47,height:47, borderRadius:10,borderColor:'black',backgroundColor:'darkorange',marginTop:15}}>
            <Image source={require("../assets/images/search.png")}  
            style={{width:23,height:23,margin:10.,tintColor:'white'}}
            />
         </TouchableOpacity>
         </View>

     <View >
    <FlatList 
     
    data={jobTypes}
    renderItem={({item})=>(
        <TouchableOpacity  
        onPress={()=>{
            setActiveJobType(item);
            router.push(`/search/${item}`)
        }
     
        }
        >
            <Text  style={{width:'auto',height:40,borderRadius:20,borderWidth:1,padding:12}}
            >{item}</Text>
        </TouchableOpacity>
    )}

    keyExtractor={item=>item}
    contentContainerStyle={{columnGap:4}}
    horizontal

    />
     </View>

    </View>
  )
}


const style=StyleSheet.create({


    userName:{
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'axios'
    },

    wellcomeMessage:{
           fontSize:23,
           fontWeight:'bold',
           fontFamily:'axios'
    },
    searchContainer:{
        width:280,
        height:50,
        margin:15,
        backgroundColor:'lightgray',
        borderRadius:10,
        padding:10
    },

    searchBar:{
         flexDirection:'row'
    }


})