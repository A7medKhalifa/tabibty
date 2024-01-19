import React from 'react'
import { View, TextInput } from 'react-native'
import { Search } from 'assets/svgs'
import styles from '../styles'
import { Colors } from 'theme/colors'
import { useAppDispatch } from 'store/store'
import AppThunks from 'store/app/thunks'

const SearchInput = ({
    setLoad,
    category,
    inputValue,
    setInputValue
}: any) => {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        const timer = setTimeout(() => {
            inputValue && dispatch(AppThunks?.doSearch(`keyword=${inputValue}&${category}`)).then(() => {
                setLoad(false)
            })
        }, 500)
        return () => clearTimeout(timer)
    }, [inputValue])
    return (
        <View style={styles.InputContainer}>
            <Search />
            <TextInput
                value={inputValue}
                onChangeText={e => setInputValue(e)}
                placeholder='اكتب هنا'
                placeholderTextColor={Colors().gray}
                style={styles.Input}
                onEndEditing={() => console.log('Editing')}
            />
        </View>
    )
}

export default SearchInput