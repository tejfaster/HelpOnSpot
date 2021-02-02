import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Geolocation from '@react-native-community/geolocation'

export default function AlertCretae() {
    const [problem, setproblem] = useState('')
    const [Detail,setDetail] = useState('')
    const [Latitude, setlatitude] = useState(0)
    const [Longitude, setlongitude] = useState(0)

    Geolocation.getCurrentPosition(data => {
        setlatitude(data.coords.latitude)
        setlongitude(data.coords.longitude)
    })
    return (
        <View>
            <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                <Text style={styles.alerttxt}>Create an Alert to Nearby Users</Text>
                <TouchableOpacity style={styles.camera}>
                    <Text style={styles.cameratxt}>
                        Upload Image
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={styles.problemtxt}>
                        Problem:
                </Text>
                    <View style={styles.protxtinp}>
                        <TextInput
                            placeholder='Write your Problem'
                            onChange={(text) => setproblem(text)}
                        />
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <Text style={styles.problemtxt}>
                        Details:
                    </Text>
                 <TextInput
                 multiline
                 placeholder='Description in Detail'
                 onChange={(text)=>setDetail(text)}
                 style={styles.detail}
                 />
                </View>
                <TouchableOpacity style={styles.create}>
                    <Text style={styles.createtxt}>
                        Create
                    </Text>
                </TouchableOpacity>             
                    
                <Text style={styles.locationtxt}>{`Location:${Latitude},${Longitude}`}</Text>
                
            </View>
            <View style={{ alignSelf: 'center' }}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontxt}>SOS</Text>
                </TouchableOpacity>
            </View>
        </View>
)
}

const styles = StyleSheet.create({
    container: {
        height: hp('60%'),
        width: wp('95%'),
        borderWidth: 3,
        borderRadius: 25,
        backgroundColor: '#D3D3D3',
        // alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10
    },
    alerttxt: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 20
    },
    camera: {
        height: hp('10%'),
        width: wp('80%'),
        backgroundColor: 'black',
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'center',
    },
    cameratxt: {
        fontFamily: 'Arial',
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
    },
    problemtxt: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 3,
    },
    protxtinp: {
        // height:hp('5%'),
        width: wp('50'),
        // borderWidth:2,
        marginLeft: 5,
    },
    detailtxt:{
        height:hp('15%'),
        width: wp('72'),
        // borderWidth:2,
        alignSelf:'center',
        flexDirection:'row',
    },
    detail:{
        height:hp('5%'),
        width: wp('56'),
        // borderWidth:2,
    },
    create:{
        height:hp('5%'),
        width:wp('25%'),
        backgroundColor:'orange',
        borderRadius:15,
        alignItems:'center',
        marginLeft:wp('60%'),
        marginTop:hp('10%'),
        justifyContent:'center'
    },
    createtxt:{
        fontFamily:'Arial',
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    },
    locationtxt:{
        // fontFamily:'Arial',
        // fontWeight:'bold',
        alignSelf:'center',
        fontSize:20
    },
    button: {
        height: 100,
        width: 100,
        marginTop: 100,
        borderRadius: 50,
        backgroundColor: 'orange',
        justifyContent: 'center',
    },
    buttontxt: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: 'white',
        alignSelf: 'center',
        fontSize: 30
    },
})