import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Location, wp, hp, Male, Female } from '../Component/Style'


export default function Homes({navigation}) {
    return (
        <View style={{backgroundColor:'white'}}>
            <Text style={[styles.txtstyle, { marginTop: hp('2%') }]}>Welcome: Sankar</Text>
            <Text style={styles.txtstyle}>Your Location: Kaveri nager</Text>
            <View style={{ marginTop: hp('2%'), flexDirection: 'row', justifyContent: 'space-around' }}>
                <Bg txt='Hospital' dist='23' />
                <Bg txt='Police' dist='23' />
            </View>
            < User txt='2' />
            <View style={{ marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-around' }}>
                <CirecleButton
                    txt="Help Others"
                    press = {() => navigation.navigate('Home')}
                />
                <CirecleButton
                    txt="Need Help"
                    style={{ height: hp('20%'), width: wp('42%') }}
                    press = {() => navigation.navigate('Map')}
                />
            </View>
        </View>
    )
}


const Bg = ({ txt, dist }) => {
    return (
        <View>
            <ImageBackground source={Location} style={styles.bg}>
                <View style={styles.circle}>
                    <Text style={[styles.txtcircle, { color: 'white' }]}>{txt}</Text>
                </View>
            </ImageBackground>
            <Text style={styles.txtcircle}>{`${dist} mtrs`}</Text>
        </View>
    )
}

const User = ({ txt }) => {
    return (
        <View>
            <ImageBackground source={Male} style={styles.male}>
                <Image source={Female} style={styles.female} />
            </ImageBackground>
            <Text style={styles.txtcircle} >{`${txt} online`}</Text>
        </View>
    )
}

const CirecleButton = ({ txt, style,press }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={press}>
            <Text style={[styles.txtcircle, { color: 'white' }]} >
                {txt}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bg: {
        height: hp('20%'),
        width: wp('25.5%'),
        alignSelf: 'center',
    },
    txtstyle: {
        alignSelf: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    },
    circle: {
        width: wp('20%'),
        height: hp('8.4%'),
        borderRadius: 50,
        backgroundColor: '#eb2b09',
        alignSelf: 'center',
        marginTop: hp('2%'),
        justifyContent: 'center'
    },
    txtcircle: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        // color: 'white',
        fontSize: hp('2%'),
        alignSelf: 'center'
    },
    male: {
        height: hp('30%'),
        width: wp('50%'),
        alignSelf: 'center'
    },
    female: {
        height: hp('25%'),
        width: wp('40%'),
        marginTop: hp('8.5%'),
        alignSelf: 'center'
    },
    button: {
        height: hp('15%'),
        width: wp('32%'),
        borderRadius: 100,
        backgroundColor: '#eb2b09',
        alignSelf: 'center',
        justifyContent: 'center'
    }
})