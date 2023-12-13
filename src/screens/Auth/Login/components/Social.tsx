import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from 'theme/colors'
import { Facebook, Gmail } from 'assets/svgs'
import Fonts from 'theme/fonsFamily'

const Social = ({ name }: { name: string }) => {
    return (
        <View style={{
            height: 37,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 8,
            borderColor: Colors().border,
            borderWidth: 1,
            marginBottom: name == 'gmail' ? 10 : 50
        }}>
            <Text style={{
                fontSize: 12,
                fontFamily: Fonts.Messiri,
                fontWeight: '400',
                color: Colors().lblack,
                marginRight: 15,
            }}>{name == 'gmail' ? `البريد الإكتروني` : `فيسبوك`}</Text>
            {name == 'gmail' ? <Gmail /> : <Facebook />}
        </View>
    )
}

export default Social