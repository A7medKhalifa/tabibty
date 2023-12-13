import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from 'components/Header'
import { FlatList } from 'react-native'
import Form from './components/Form'

const ContactUsScreen = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <Header hasBack Title='تواصل معنا' />

            <Text style={styles.Text}>لا تترددي في التواصل معنا في أي وقت، وسوف نعود بالرد في أقرب وقت ممكن.</Text>
            <Form />
        </SafeAreaView>
    )
}

export default ContactUsScreen