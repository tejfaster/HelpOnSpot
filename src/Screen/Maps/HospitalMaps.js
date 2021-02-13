import React, { useState } from 'react'
import {
    View, Text, Modal, Image, ImageBackground,
    TouchableOpacity, SafeAreaView, StyleSheet, Button
} from 'react-native'
import {
   hp, wp, GoogleLocation, Google
   , HospitalMap, Manipal_Hospital, Ambulance,
    Fortis, KarnatakaCancer
} from '../../Component/Style'

export default function DoctorMaps() {
    const [juvita, setjuvita] = useState(false);
    const [raghu, setRaghu] = useState(false);
    const [siri, setSiri] = useState(false);


    const JuvitaOnpress = () => {
        setjuvita(true)
        setRaghu(false)
        setSiri(false)
    }

    const RaghuOnpress = () => {
        setjuvita(false)
        setRaghu(true)
        setSiri(false)
    }

    const SiriOnpress = () => {
        setjuvita(false)
        setRaghu(false)
        setSiri(true)
    }
    return (
        <View>
            {
                juvita === true ?
                    <Show
                        visible={juvita}
                        onRequestClose={() => setjuvita(false)}
                        onPressRaghu={RaghuOnpress}
                        onPressSiri={SiriOnpress}
                        imagsource={Fortis}
                        Juvitavisible={juvita}
                        transparent={true}
                    /> : null
            }
            {
                raghu === true ?
                    <Show
                        visible={raghu}
                        onRequestClose={() => setRaghu(false)}
                        onPressJuvita={JuvitaOnpress}
                        onPressSiri={SiriOnpress}
                        imagsource={KarnatakaCancer}
                        Raghuvisible={raghu}
                        transparent={true}
                    /> : null
            }
            {
                siri === true ?
                    <Show
                        visible={siri}
                        onRequestClose={() => setSiri(false)}
                        onPressRaghu={RaghuOnpress}
                        onPressJuvita={JuvitaOnpress}
                        imagsource={Manipal_Hospital}
                        Sirivisible={siri}
                        transparent={true}
                    /> : null
            }

            <ImageBackground source={HospitalMap} style={styles.map}>
                <Buttons
                    source={GoogleLocation}
                    stylebutton={styles.Raghu}
                    onPress={RaghuOnpress}
                />
                <Buttons
                    source={GoogleLocation}
                    stylebutton={styles.juvita}
                    onPress={JuvitaOnpress}
                />
                <Buttons
                    source={GoogleLocation}
                    stylebutton={styles.siri}
                    onPress={SiriOnpress}
                />
                <Image source={Ambulance} style={{width:wp('12%'),height:hp('4%'),marginTop:hp('-60%'),marginLeft:wp('29%')}}/>
                <Image source={Ambulance} style={{width:wp('12%'),height:hp('4%'),marginTop:hp('65%'),marginLeft:wp('69%')}}/>
                <Image source={Ambulance} style={{width:wp('12%'),height:hp('4%'),marginTop:hp('-35%'),marginLeft:wp('39%')}}/>
                <Image source={Google} style={styles.google} />
            </ImageBackground>
        </View>
    )
}

const Buttons = ({ source, stylebutton, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={source} style={[styles.Button, stylebutton]} />
        </TouchableOpacity>
    )
}

const Show = ({ transparent, imagsource, visible, Raghuvisible, Juvitavisible,
    Sirivisible, style, onRequestClose, onPressRaghu, onPressSiri, onPressJuvita }) => {
    return (
        <Modal
            animationType="none"
            transparent={transparent}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <View >
                {Raghuvisible === true ?
                    <Image source={imagsource} style={[styles.image, styles.modalView]} />
                    : <Buttons
                        source={GoogleLocation}
                        stylebutton={[styles.Raghu]}
                        onPress={onPressRaghu}
                    />
                }
                {Juvitavisible === true ?
                    <Image source={imagsource} style={[styles.image, styles.modalView,{height:hp('10%')}]} /> :
                    <Buttons
                        source={GoogleLocation}
                        stylebutton={[styles.juvita]}
                        onPress={onPressJuvita}
                    />
                }
                {Sirivisible === true ?
                    <Image source={imagsource} style={[styles.image, styles.modalView,{height:hp('10%')}]} /> :
                    <Buttons
                        source={GoogleLocation}
                        stylebutton={[styles.siri, { marginTop: hp('25.5%') }]}
                        onPress={onPressSiri}
                    />
                }
            </View>          

        </Modal>

    )
}

const styles = StyleSheet.create({
    map: {
        height: hp('100%'),
        width: wp('100%'),

    },
    Button: {
        height: hp('4.1%'),
        width: wp('5.9%'),
    },
    juvita: {
        marginLeft: wp('86.4%'),
        marginTop: hp('14%')
    },
    Raghu: {
        marginLeft: wp('79.5%'),
        marginTop: hp('20.65%%')
    },
    siri: {
        marginLeft: wp('35.5%'),
        marginTop: hp('25.5%')
    },
    image: {
        height: hp('20%'),
        width: wp('60%'),
    },
    modalView: {
        marginLeft: wp('20%'),
        marginTop: hp('9%'),
        borderRadius: 15,
    },
    google: {
        height: hp('2%'),
        width: wp('12%'),
        marginTop: hp('30%')
    }
})

// <ImageBackground source={DoctorMap} style={styles.map} >
//   </ImageBackground>