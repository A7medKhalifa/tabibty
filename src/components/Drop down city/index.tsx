import { Arrow } from "assets/svgs";
import { InputProps } from "@rneui/base";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";
import Modal from "./Modal";
import { styles } from "./style";

type TInput = {
    label?: string
    choosen?: any;
    setChoosen?: any;
    selectorsShow: any;
    updateShowSelectors: any;
    data?: any;
    name?: any;
    touched?: any;
    errors?: any;
    setFieldValue?: any;
    small?: boolean;
    disabled?: any
    City?: boolean
    Icon?: any
    Label?: any
    setInd?: any;
    exixted?: any
    ind?: any
};
export const DropDownCity = ({
    Label,
    choosen,
    data,
    selectorsShow,
    updateShowSelectors,
    name,
    errors,
    touched,
    City,
    disabled,
    Icon,
    setChoosen,
    setFieldValue,
    exixted,
    ind
}: InputProps & TInput) => {
    const [selectedIndex, setSelectedIndex] = React.useState<any>(null)
    React.useEffect(() => {
        const index = data?.findIndex((city: any) => city?.city_name_ar === exixted);
        exixted && setSelectedIndex(index)
        console.log("Index of فيصل:", index);
    }, [])

    React.useEffect(() => {
        ind != null && setSelectedIndex(null)
    }, [ind])

    const onShow = (value: boolean) => {
        return (
            updateShowSelectors({
                ...selectorsShow,
                [Label?.replace("-", ' ')?.replace(/\s/g, '')]: value,
            }))
    }

    return (
        <>
            <TouchableOpacity
                disabled={disabled}
                activeOpacity={.8}
                onPress={() => {
                    onShow(true)
                    !City && setFieldValue('City', '')
                    !City && setChoosen({ ...choosen, ['City']: '' })
                }}
                style={styles.Container}
            >
                <Arrow style={{ transform: [{ rotate: '-90deg' }], }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{
                        color: selectedIndex == null ? Colors().border : Colors().black,
                        fontFamily: Fonts.Messiri,
                        marginRight: 10
                    }}>{(data && selectedIndex != null) ? data[selectedIndex]?.city_name_ar : name}</Text>
                    {Icon && Icon}
                </View>
            </TouchableOpacity>
            {errors[Label.replace("-", ' ').replace(/\s/g, '')] &&
                touched[Label.replace("-", ' ').replace(/\s/g, '')] && (
                    <Text style={[styles.error]}>{errors[Label.replace("-", ' ').replace(/\s/g, '')]}</Text>
                )}

            <Modal
                selectorsShow={selectorsShow}
                Label={Label}
                onShow={onShow}
                data={data}
                setSelectedIndex={setSelectedIndex}
                setChoosen={setChoosen}
                setFieldValue={setFieldValue}
                selectedIndex={selectedIndex}
                choosen={choosen}
            />
        </>

    )
}

