import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'



const HeaderComp = ({centerName}) => {
   
    return (
        <View style={{ flexDirection: 'row'}}>
            <Text style={styles.title}>{centerName}</Text>
            <Image source={require('D:/Digiteck Digital Technologies/HelpOnSpot/assets/Hospital.png')} style={styles.Avatar} />
            <TouchableOpacity >
                <Icon
                    name='bars'
                    size={25}
                    style={styles.bar}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Avatar: {
        width: 40,
        height: 40,
        marginRight: 5,
        borderRadius: 25
    },
    bar: {
        margin: 10
    },
    title:{
        fontFamily:'Arial',
        fontSize: 25,
        fontWeight: 'bold',
        marginRight:wp('10%'),
        marginTop:hp('0.42%'),
    }
})

export default HeaderComp  