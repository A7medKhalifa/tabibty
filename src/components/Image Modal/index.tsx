import React from 'react'
import {  TouchableOpacity ,Modal} from 'react-native'
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";
import DeviceInfo from 'react-native-device-info';
import { Back } from 'assets/svgs';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';

const ViewImageModal = ({ image, visible, setVisable }: any) => {
    const hasNotch = DeviceInfo.hasNotch()
    return (
        <Modal visible={visible}>
            <TouchableOpacity onPress={() => setVisable(false)} activeOpacity={.9} style={[styles.back, { top: hasNotch ? 70 : 20, }]}>
                <Back />
            </TouchableOpacity>
            <ReactNativeZoomableView zoomStep={0.5} disablePanOnInitialZoom={true} initialZoom={1} maxZoom={10} minZoom={1}>
                <FastImage
                    resizeMode='contain'
                    source={{ uri: image }}
                    style={styles.Image}
                />
            </ReactNativeZoomableView>
        </Modal>
    )
}

export default ViewImageModal