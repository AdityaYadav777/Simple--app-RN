import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { useRouter} from 'expo-router';
import PopularJobsCard from '../components/PopularJobCard'
import useFetch from './useFetch';



export default function PopularJobs() {
    const router=useRouter();

        const{data, isLoading,error} =useFetch
        ('search',{
          query:'React-developer',
          num_pages:1
        })

        console.log(data);

  return (
    <View style={{flex:1}} >

        <View style={{flexDirection:'row'}} >
        <Text style={{fontSize:20,fontWeight:"900",width:'85%'}}>PopularJobs</Text>
        <TouchableOpacity>
            <Text>show all</Text>

        </TouchableOpacity>
        </View>

        <View>
      
      { isLoading ?(
            <ActivityIndicator size="large" />
        ):error? (
            <Text>Not Found</Text>
        ):(
            <FlatList 

            data={[1,2,3,4,5,6,7,8,9]}
            renderItem={(item)=>(
                <PopularJobsCard  items={item}  />
            )}
          
            contentContainerStyle={{columnGap:4}}
            horizontal
            
            />
        )
      }

        </View>
     
    </View>
  )
}