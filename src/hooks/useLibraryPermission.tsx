import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AuthThunks from 'store/auth/thunks';


function useLibraryPermission() {
    const [isGranted, setIsGranted] = useState<any>();
    const [source, setSource] = useState<any>(undefined);
    const pick = (dispatch?: any,setLoading?:any) => {
        setLoading(true)
        launchImageLibrary({ quality: 0.5, mediaType: 'photo' }).then((res: any) => {
            const formdata = new FormData()
            formdata.append('user-image', {
                uri: res?.assets[0]?.uri,
                type: 'image/jpeg',
                name: res?.assets[0]?.fileName,
            })
            dispatch(AuthThunks?.doUploadImage(formdata)).then((res: any) => {
                console.log(res?.payload?.data)
                setSource(res?.payload?.data)
                setLoading(false)
            })
        }
        );
    };
    const pickImage = () => {
        launchCamera({
            mediaType: 'photo'
        }).then(
            (res: any) => {
                // setSource(res)
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