import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


function useLibraryPermission() {
    const [isGranted, setIsGranted] = useState<any>();
    const [source, setSource] = useState<any>();
    const pick = () => {
        launchImageLibrary({ quality: 0.5, mediaType: 'photo' }).then((res: any) =>
            setSource(res),
        );
    };
    const pickImage = () => {
        launchCamera({
            mediaType: 'photo'
        }).then(
            (res: any) => {
                setSource(res)
            }
        )
    }



    return {
        isGranted,
        source,
        pick,
        setSource,
        pickImage,
    };
}

export default useLibraryPermission;