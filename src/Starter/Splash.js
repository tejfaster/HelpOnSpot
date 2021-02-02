import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Splash, wp, hp } from '../Component/Style'

export default class Myapp extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }
    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });
    }

    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 5000);
    }

    render() {
        let Splash_Screen = (
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>
                    <Image source={Splash}
                        style={{ width: wp('100%'), height: hp('100%')}} />
                </View>
            </View>)
        return (
            <View style={styles.MainContainer}>
                <Text style={{ textAlign: 'center' }}> Splash Screen Example</Text>
                {
                    (this.state.isVisible === true) ? Splash_Screen : null
                }
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
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
    });  
