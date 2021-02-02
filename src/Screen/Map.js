import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export default function Map() {
    const [region, setRegion] = useState({
        latitude: 26.222818,
        longitude: 84.3586411,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.01
    });
    const [Latitude, setlatitude] = useState(0)
    const [Longitude, setlongitude] = useState(0)

    Geolocation.getCurrentPosition(data => {
        setlatitude(data.coords.latitude)
        setlongitude(data.coords.longitude)
    })

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                showsMyLocationButton={true}
                showsUserLocation
                region={region}
                // onRegionChange={()=>setRegion()}
            >
            </MapView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height:hp('90%'),
        borderWidth: 4
        // width: 400,

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});