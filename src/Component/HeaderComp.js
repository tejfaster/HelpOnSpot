import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import {Male,wp,hp,Icon} from './Style'


const HeaderComp = ({centerName}) => {
   
    return (
        <View style={{ flexDirection: 'row'}}>
            <Text style={styles.title}>{centerName}</Text>
            <Image source={Male} style={styles.Avatar} />
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