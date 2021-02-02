import React, { useState } from 'react'
import { SafeAreaView, View, Image, Text, ImageBackground, StyleSheet, TextInput } from 'react-native'
import { wp, hp, BackgroundImage, Logo } from '../Component/Style'


export default function Signup({ navigation }) {
    const [credentials, setCredentials] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const { name, phoneNumber, email, password, confirmPassword } = credentials
    const onCreatePress = () => {
        if (!name) {
            alert('Name required')
        } else if (!phoneNumber) {
            alert('PhoneNumber required')
        } else if (!email) {
            alert('email required')
        } else if (!password) {
            alert('Password required')
        } else if (!confirmPassword) {
            alert('confirmPassword required')
        } else if (password !== confirmPassword) {
            alert('Your confirmPassword is not matching')
        }
        else if(email === email & password === password){
            navigation.navigate('Need')
        }else {
            return null
        }

    }
    const handleOnChange = (name, value) => {
        setCredentials({
            ...credentials,
            [name]: value,
        })
    }
    return (
        <SafeAreaView>
            <View >
                <ImageBackground source={BackgroundImage} style={styles.background}>
                    <Image source={Logo} style={styles.logo} />
                    <View style={{ height: hp('3%') }} />
                    <Txtinput
                        placeholder='Name'
                        value={name}
                        onChangeText={(text) => handleOnChange('name', text)}
                    />
                    <Txtinput
                        placeholder='Phone'
                        value={phoneNumber}
                        keyboardType='numeric'
                        onChangeText={(text) => handleOnChange('phoneNumber', text)}
                    />
                    <Txtinput
                        placeholder='Email'
                        value={email}
                        onChangeText={(text) => handleOnChange('email', text)}
                    />
                    <Txtinput
                        placeholder='Password'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => handleOnChange('password', text)}
                    />
                    <Txtinput
                        placeholder='ConfirmPassword'
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={(text) => handleOnChange('confirmPassword', text)}
                    />
                    <View style={{ flexDirection: 'column', alignItems: 'center', margin: wp('2%') }}>
                        <Button
                            button='Create'
                            onpress={onCreatePress}
                        />
                        <View style={{ height: hp('1%') }} />
                        <Button button='Login' onpress={() => navigation.navigate('Login')} />
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

const Txtinput = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    numberOfLines,
    onSubmitEditing,
    onBlur,
    onFocus,
    keyboardType
}) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor='white'
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            numberOfLines={numberOfLines}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
            onFocus={onFocus}
            style={styles.input}
            keyboardType={keyboardType}
        />
    )
}

const Button = ({ button, onpress }) => {
    return (
        <View style={styles.button}>
            <Text style={styles.buttontxt} onPress={onpress}>
                {button}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        height: hp('100%'),
        width: wp('100%')
    },
    input: {
        justifyContent: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: 'white',
        fontSize: hp('2.2%'),
        backgroundColor: 'rgba(0, 0, 0,0.3)',
        width: wp('70%'),
        borderRadius: 22,
        alignSelf: 'center',
        paddingLeft: wp('3%'),
        paddingRight: wp('3%'),
        marginTop: hp('0.5%'),
    },
    logo: {
        height: hp('20%'),
        width: wp('40%'),
        alignSelf: 'center',
        marginTop: hp('10%')
    },
    email: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
        alignSelf: 'center',
        color: 'white',
        marginLeft: wp('4%'),
    },
    button: {
        height: hp('6%'),
        width: wp('25%'),
        backgroundColor: 'rgba(0, 0, 0,0.3)',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontxt: {
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('2%'),

    }
})



