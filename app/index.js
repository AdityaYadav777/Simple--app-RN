import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import Wellcome from '../components/Wellcome';
import PopularJobs from '../components/PopularJobs';
import NearbyJobs from '../components/NearbyJobs';
import ScreenHeaderBtn from '../components/ScreenHeaderBtn';
import ScreenHeaderRight from '../components/ScreenHeaderRight';



const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'lightwhite' }}>

            <Stack.Screen options={{
                headerStyle: { backgroundColor: 'lightwhite' },
                headerShadowVisible: false,
                headerLeft: () => (
                   <ScreenHeaderBtn  dimension="100%" />
                ),
                headerRight: () => (
                    <ScreenHeaderRight dimension="100%"/>
                ),
                headerTitle: ''

            }} />


            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flex: 1, padding: 4 }}>



                    <Wellcome />
                    <PopularJobs />
                    <NearbyJobs />



                </View>

            </ScrollView>

        </SafeAreaView>
    );
}

export default Home;
