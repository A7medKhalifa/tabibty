import React from 'react'
import { View, TextInput } from 'react-native'
import { Search } from 'assets/svgs'
import styles from '../styles'
import { Colors } from 'theme/colors'

const SearchInput = () => {
    return (
        <View style={styles.InputContainer}>
            <Search />
            <TextInput
                placeholder='اكتب هنا'
                placeholderTextColor={Colors().gray}
                style={styles.Input}
            />
        </View>
    )
}

export default SearchInput