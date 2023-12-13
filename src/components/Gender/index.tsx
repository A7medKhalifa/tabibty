import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import LinearGradient from 'react-native-linear-gradient'

const Gender = ({
    setFieldValue,
    ...props
}: {
    setFieldValue: any
}) => {
    const [selected, setSelected] = React.useState<number>(1)
    React.useEffect(() => {
        setFieldValue('gender', 'FEMALE')
    }, [])
    return (
        <View style={{
            alignSelf: 'flex-end',
            flexDirection: 'row',
        }}>
            <TouchableOpacity activeOpacity={.8} onPress={() => {
                setSelected(0)
                setFieldValue('gender', 'MALE')
            }} style={[styles.Row, { marginRight: 20 }]}>
                <Text style={styles.Text}>ذكر</Text>
                <View style={styles.circle}>
                    {selected == 0 && <View style={styles.activeCircle} />}
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.8} onPress={() => {
                setSelected(1)
                setFieldValue('gender', 'FEMALE')
            }} style={styles.Row}>
                <Text style={styles.Text}>أنثي</Text>
                <View style={styles.circle}>
                    {selected == 1 && <View style={styles.activeCircle} />}
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Gender