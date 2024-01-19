import React from 'react'
import { View, Text } from 'react-native'
import ReactNativeModal from 'react-native-modal'
import CustomButton from 'components/Button'
import styles from '../styles'
import { useAppDispatch } from 'store/store'
import AppThunks from 'store/app/thunks'
import AppSlice from 'store/app'

const DeleteModal = ({
    bigId,
    id,
    visable,
    setVisable
}: any) => {
    const dispatch = useAppDispatch()
    const _Delete = () => {
        dispatch(AppThunks.doDeleteReview(id)).then(() => {
            dispatch(AppThunks.doGetReviews(bigId))
            dispatch(AppSlice.changeComment(''))
            setVisable(false)
        })
    }
    return (
        <ReactNativeModal isVisible={visable}>
            <View style={styles.DeleteModal}>
                <Text style={styles.DeleteModalTitle}>هل انت متأكده من حذف تقيمك</Text>
                <View style={styles.ButtonRow}>
                    <CustomButton onPress={() => _Delete()} style={styles.CustomButton} title='حذف' />
                    <CustomButton onPress={() => setVisable(false)} notFill style={styles.CustomButton} title='الغاء' />
                </View>
            </View>
        </ReactNativeModal>
    )
}

export default DeleteModal