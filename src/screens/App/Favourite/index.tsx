import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from 'components/Header'
import styles from './styles'
import Taps from './components/Taps'
import { Text } from 'react-native'
import { Doctors, Labs } from 'src/utils/Dummy'
import HomeCardsList from 'components/Home Cards List'

const FavouriteScreen = () => {
    const [index, setIndex] = React.useState(0)
    return (
        <SafeAreaView style={styles.Container}>
            <Header Title='المفضلة' />
            <Taps index={index} setIndex={setIndex} />
            {/* <View style={styles.EmptyContainer}>
                <Text style={styles.EmptyText}>لا يوجد مفضلة </Text>
            </View> */}
            <HomeCardsList data={(index == 1 ? Labs : Doctors).length % 3 === 2 ? [...(index == 1 ? Labs : Doctors), { empty: true }] : (index == 1 ? Labs : Doctors)} />

        </SafeAreaView>
    )
}

export default FavouriteScreen