import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Image, Text, ImageBackground, StyleSheet, TextInput } from 'react-native'
import { wp, hp, BackgroundImage, Logo, Splash } from '../Component/Style'

export default function Login({ navigation }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    const { email, password } = credentials
    const [isVisible, setVisible] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            Hide_Splash_Screen()
            console.log("hello")
        }, 5000);
    });

    const Hide_Splash_Screen = () => {
        setVisible(false)
    }

    // console.log(isVisible)
    const onLoginPress = () => {
        if (!email) {
            alert('Email required')
        } else if (!password) {
            alert('Password required')
        } else if (email === email & password === password) {
            navigation.navigate('Need')
        } else {
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
            <View>
                <ImageBackground source={BackgroundImage} style={styles.background}>
                    <Image source={Logo} style={styles.logo} />
                    <View style={{ height: hp('3%') }} />
                    <Txtinput
                        placeholder='Email'
                        value={email}
                        onChangeText={(text) => handleOnChange('email', text)}
                    />
                    <View style={{ height: hp('2%') }} />
                    <Txtinput
                        placeholder='Password'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => handleOnChange('password', text)}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', margin: wp('2%') }}>
                        <Button button='Login' onpress={() => navigation.navigate('Need')} />
                        <View style={{ width: wp('2%') }} />
                        <Button button='SignUp' onpress={() => navigation.navigate('Signup')} />
                    </View>
                </ImageBackground>
            </View>

        </SafeAreaView>
    )
}

const Splash_Screen = () => {
    return (
        <View style={styles.SplashScreen_RootView}>
            <View style={styles.SplashScreen_ChildView}>
                <Image source={Splash}
                    style={{ width: wp('100%'), height: hp('100%') }} />
            </View>
        </View>
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
    onFocus
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
    },
    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
})



