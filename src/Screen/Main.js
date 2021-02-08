import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import { wp, hp } from '../Component/Style'
import { useNavigation } from '@react-navigation/native'

const image = [
    require('../../assets/Hospital.png'),
    require('../../assets/Police.png'),
    require('../../assets/Docctor.png'),
    require('../../assets/frnd&Famliy.png'),
    require('../../assets/Nearby.png')
]

export default function Main() {
    const navigation = useNavigation()
    return (
        <View >
            <RowImg
                rowpic1={image[0]}
                rowpic2={image[1]}
                rowtxt1={"Hospital"}
                rowtxt2={"Police"}
                onPress1={() => navigation.navigate('Map')}
                onPress2={() => navigation.navigate('Map')} />

            <RowImg
                rowpic1={image[2]}
                rowpic2={image[3]}
                rowtxt1={"Doctor"}
                rowtxt2={"Near & Dear"}
                onPress1={() => navigation.navigate('DoctorMaps')}
                onPress2={() => navigation.navigate('Map')}
                 />

            <Img
                pic={image[4]}
                txt={"NearBy"}
                click={() => navigation.navigate('Map')} />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <CircleButton
                    txt='SOS'
                />
                <CircleButton
                    txt='Alert'
                    style={{height:hp('14%'),width:wp('30%')}}
                    onpress={() => navigation.navigate('AlertCrete')}
                />
            </View>

        </View>
    )
}
const CircleButton = ({ onpress, txt, style }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onpress}>
            <Text style={styles.buttontxt}>{txt}</Text>
        </TouchableOpacity>
    )
}

const Img = ({ pic, txt, click }) => {
    return (
        <View >
            <TouchableOpacity onPress={click}>
                <ImageBackground source={pic} style={styles.background} borderRadius={20}>
                    <View style={styles.orangecolor}>
                        <Text style={styles.txtOrange}>
                            {txt}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const RowImg = ({ rowpic1, rowpic2, rowtxt1, rowtxt2, onPress1, onPress2 }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Img pic={rowpic1} txt={rowtxt1} click={onPress1} />
            <Img pic={rowpic2} txt={rowtxt2} click={onPress2} />
        </View>
    )
}


const styles = StyleSheet.create({
    background: {
        width: wp('40%'),
        height: hp('18%'),
        justifyContent: 'center',
        marginTop: 15,
        alignSelf: 'center',

    },
    orangecolor: {
        backgroundColor: 'rgba(255, 146, 43,0.8)',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtOrange: {
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: "bold",
        fontSize: 20
    },
    button: {
        height: 100,
        width: 100,
        marginTop: 100,
        borderRadius: 100,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignSelf:'center'
    },
    buttontxt: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: 'white',
        alignSelf: 'center',
        fontSize: 30
    },
})
