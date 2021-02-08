import React, { useState } from 'react'
import {
    View, Text, Modal, Image, ImageBackground,
    TouchableOpacity, SafeAreaView, StyleSheet, Button
} from 'react-native'
import {
    DoctorMap, hp, Location, wp, GoogleLocation, Google
    , Dr_Juvita, Dr_Raghu, Dr_Siri_Kamath
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
                        source={Dr_Juvita}
                        onPressRaghu={RaghuOnpress}
                        onPressSiri={SiriOnpress}
                        imagsource={Dr_Juvita}
                        Juvitavisible={juvita}
                    /> : null
            }
            {
                raghu === true ?
                    <Show
                        visible={raghu}
                        onRequestClose={() => setRaghu(false)}
                        source={Dr_Juvita}
                        onPressJuvita={JuvitaOnpress}
                        onPressSiri={SiriOnpress}
                        imagsource={Dr_Raghu}
                        Raghuvisible={raghu}
                    /> : null
            }
            {
                siri === true ?
                    <Show
                        visible={siri}
                        onRequestClose={() => setSiri(false)}
                        source={Dr_Juvita}
                        onPressRaghu={RaghuOnpress}
                        onPressJuvita={JuvitaOnpress}
                        imagsource={Dr_Siri_Kamath}
                        Sirivisible={siri}
                    /> : null
            }

            <ImageBackground source={DoctorMap} style={styles.map}>
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
            <ImageBackground source={DoctorMap} style={styles.map} >
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
                        <Image source={imagsource} style={[styles.image, styles.modalView]} /> :
                        <Buttons
                            source={GoogleLocation}
                            stylebutton={[styles.juvita]}
                            onPress={onPressJuvita}
                        />
                    }
                    {Sirivisible === true ?
                        <Image source={imagsource} style={[styles.image, styles.modalView]} /> :
                        <Buttons
                            source={GoogleLocation}
                            stylebutton={[styles.siri, { marginTop: hp('25.5%') }]}
                            onPress={onPressSiri}
                        />
                    }
                </View>
            </ImageBackground>
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

    }
})