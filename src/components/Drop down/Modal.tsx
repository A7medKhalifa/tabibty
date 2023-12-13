import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './style'
import RNModal from "react-native-modal";
import { Colors } from 'theme/colors';

const Modal = ({
    selectorsShow,
    City,
    Label,
    onShow,
    data,
    setSelectedIndex,
    setChoosen,
    setFieldValue,
    selectedIndex,
    choosen,
    setInd
}: any) => {

    return (
        <RNModal
            isVisible={selectorsShow[Label?.replace("-", ' ')?.replace(/\s/g, '')]}
            style={styles.Modal}
            onBackdropPress={() => onShow(false)}
            onBackButtonPress={() => onShow(false)}
        >
            <View style={styles.Body}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.Separator} />}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => {
                            setSelectedIndex(index);
                            setChoosen({ ...choosen, [Label.replace(/\s/g, '')]: item })
                            onShow(false)
                            setFieldValue(Label.replace(/\s/g, ''), item)
                            City ? null : setInd(item?.id)
                        }}
                            activeOpacity={.8}
                            style={styles.DataContainer}>
                            <View style={styles.Circle}>
                                {index == selectedIndex && <View style={styles.SmallCircle} />}
                            </View>
                            <Text style={{ color: Colors().black }}>{City ? item?.city_name_ar : item?.governorate_name_ar}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </RNModal>
    )
}

export default Modal