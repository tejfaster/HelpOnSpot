import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Modal, ImageBackground } from 'react-native'
import { wp, hp } from './Style'
import Icon from 'react-native-vector-icons/AntDesign'

export default function Profile() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >   <View>
                <TouchableOpacity>
                    <Text>
                       camera 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>
                       Library 
                    </Text>
                </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.imageprofile}>
                {/* <ImageBackground/> */}
                <View style={styles.profileimg}>
                    {/* <Image/> */}
                </View>
                <Text style={styles.profileName}>
                    Name
                    </Text>
                <TouchableOpacity 
                style={styles.setting}
                onPress={() => {
                    setModalVisible(true);
                  }}
                >
                    <Icon name='setting' size={hp('3.2%')} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Details txt='Name :' placeholder='Your name' />
                <Details txt='Phone :' placeholder='Your phone number' />
                <Details txt='Address :' placeholder='Your Address' />
            </View>
        </View>
    )
}

const Details = ({ txt, placeholder }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.detailtxt}>
                {txt}
            </Text>
            <TextInput
                placeholder={placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: wp('6%'),
        paddingTop: hp('2%'),
        margin: wp('2%'),
        // borderWidth:2,
        height: hp('50%'),
        borderRadius: 25
    },
    profileimg: {
        height: hp('19%'),
        width: wp('40%'),
        borderRadius: 120,
        borderWidth: 2,
        margin: wp('1.4%'),
    },
    imageprofile: {
        margin: wp('2%'),
        flexDirection: 'row',
        height: hp('21%'),
        width: wp('95%'),
        // padding: wp('1.4%'),
        // borderWidth: 2,
        borderRadius: 25,
        marginTop: hp('5%')
    },
    profileName: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginLeft: wp('2%')
    },
    setting: {
        marginTop: hp('16%'),
        marginLeft: wp('25%')
    },
    detailtxt: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 25
    }
})