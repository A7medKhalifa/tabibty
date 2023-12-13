import React from 'react';
import { Platform, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { Colors } from 'theme/colors';
import { styles } from './style';

const CustomInput = ({
    name,
    Label,
    values,
    placeholder,
    touched,
    errors,
    handleChange,
    style,
    handleBlur,
    small,
    secureTextEntry,
    Icon,
    multiline,
    ...props
}: {
    name?: string
    Label?: any;
    small?: boolean
    values: any;
    handleChange: any;
    handleBlur?: any;
    touched?: any;
    errors?: any;
    secureTextEntry?: boolean;
    Icon?: any;
    multiline?: boolean;
} & TextInputProps) => {
    const [secure, setSecure] = React.useState<boolean>(true)
    return (
        <View style={{ width: small ? '45%' : '100%' }}>
            <View style={styles.Container}>
                <TextInput
                    {...props}
                    multiline={multiline}
                    value={values[Label.replace("-", ' ').replace(/\s/g, '')]}
                    placeholder={name}
                    placeholderTextColor={Colors().border}
                    style={[styles.InputStyle, {
                        width: Icon ? '90%' : '100%',
                        height: multiline ? 280 : 49,
                        paddingTop: (multiline && Platform.OS == 'ios') ? 15 : 0
                    }]}
                    autoCapitalize='none'
                    secureTextEntry={secureTextEntry ? secure : false}
                    onChangeText={handleChange(Label.replace("-", ' ').replace(/\s/g, ''))}
                />
                {Icon && Icon}

                {secureTextEntry && (
                    !secure ?
                        <TouchableOpacity style={{ marginLeft: -20 }} onPress={() => setSecure(!secure)}>
                            {/* <EyeSlash /> */}
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={{ marginLeft: -20 }} onPress={() => setSecure(!secure)}>
                            {/* <EyeSlash /> */}
                        </TouchableOpacity>)
                }
            </View>
            {errors[Label.replace("-", ' ').replace(/\s/g, '')] &&
                touched[Label.replace("-", ' ').replace(/\s/g, '')] && (
                    <Text style={[styles.error]}>{errors[Label.replace("-", ' ').replace(/\s/g, '')]}</Text>
                )}
        </View>
    );
}

export default CustomInput