import { Platform } from "react-native";

const Fonts = {
    Messiri: Platform.OS == 'ios' ? 'El Messiri Medium':'ElMessiri-Medium',
    Amiri: Platform.OS == 'ios' ? 'Amiri Bold' : 'Amiri-Bold',

};
export default Fonts;
