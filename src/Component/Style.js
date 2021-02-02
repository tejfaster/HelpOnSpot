import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IconAnt from 'react-native-vector-icons/AntDesign'

const smallDeviceHeight = 650;
const uuid = '';
const setuuid = (u) =>{
    uuid = u
}

const Logo = require('../../assets/Logo.png')
const BackgroundImage = require('../../assets/backgrond.png')
const Splash = require('../../assets/splashimage.png')


export {
    wp,
    hp,
    IconAnt,
    uuid,
    setuuid,
    smallDeviceHeight,
    Logo,
    BackgroundImage,
    Splash,
}