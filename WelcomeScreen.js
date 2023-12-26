//@ts-nocheck
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const WelcomeScreen = (props) => {
    const {navigation} =props
    return (
        <View styles={{width: '80%', elevatiion: 1, alignSelf: 'center'}}>
            <Text style={{fontSize:21, width: '100%', textAlign:'center', marginTop:50}}>
                Welcome
            </Text>
            <Button title='Proceed' onPress={() => {
                navigation.navigate('Home Screen')
            }}></Button>
        </View>
    )
}
export default WelcomeScreen;
