import React from 'react'
import { View, Text } from 'react-native'
import {IconAnt} from './Style'

export default function FooterComp({name}) {
    return (
        <View>
            <IconAnt name={name} size={25}/>
        </View>
    )
}
