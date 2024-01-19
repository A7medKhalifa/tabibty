import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import { Colors } from 'theme/colors'
import { Send } from 'assets/svgs'
import { useAppDispatch } from 'store/store'
import AppThunks from 'store/app/thunks'
import { useSelector } from 'react-redux'
import AppSlice, { selectComment, selectEdit } from 'store/app'

const Input = ({ id, index }: any) => {
    const dispatch = useAppDispatch()
    const comment = useSelector(selectComment)
    const Edit = useSelector(selectEdit)
    const AddReview = () => {
        Edit != undefined ?
            dispatch(AppThunks.doUpdateReview({
                reviewId: Edit,
                rating: 3,
                comment: comment
            })).then(() => {
                dispatch(AppThunks.doGetReviews(id))
                dispatch(AppSlice.changeComment(''))
                dispatch(AppSlice.changeEdit(undefined))
            })
            :
            dispatch(AppThunks.doAddReview({
                clinicId: id,
                rating: index,
                comment: comment
            })).then(() => {
                dispatch(AppThunks.doGetReviews(id))
                dispatch(AppSlice.changeComment(''))
                dispatch(AppSlice.changeEdit(undefined))
            })
    }
    return (
        <View style={styles.bottom}>
            <View style={styles.InputContainer}>
                <TouchableOpacity onPress={() => { AddReview() }} activeOpacity={.8}>
                    <Send />
                </TouchableOpacity>
                <TextInput
                    value={comment}
                    onChangeText={(e) => dispatch(AppSlice.changeComment(e))}
                    placeholder='أضافة تعليق'
                    placeholderTextColor={Colors().gray}
                    style={styles.TextInput}
                />
            </View>
        </View>
    )
}

export default Input