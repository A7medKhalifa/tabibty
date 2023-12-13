import React from 'react'
import { View, Text } from 'react-native'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import CustomButton from 'components/Button'
import { styles } from '../styles';
import { useAppDispatch } from 'src/redux/store';
import AuthThunks from 'src/redux/auth/thunks';
import AuthSlice, { selectVerivied } from 'src/redux/auth';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Form = ({ email, type }: { email?: any, type?: any }) => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const CELL_COUNT = 6;
    const [value, setValue] = React.useState('');
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(59);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });
    const [loading, setLoading] = React.useState(false)
    const verify = useSelector(selectVerivied)

    React.useEffect(() => {
        verify && (type == 'forget' ? navigate('ResetPassword', { otp: value, email: email }) : navigate("Login"))
    }, [verify])

    React.useEffect(() => {
        dispatch(AuthSlice.changeIsVerivied2(false))
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds])

    const SubmitOTP = () => {
        setLoading(true)
        type == 'forget'
            ?
            (
                dispatch(AuthThunks.doVerify({
                    email,
                    otp: value
                })).then(() => setLoading(false))
            )
            :
            (
                dispatch(AuthThunks.doVerify({
                    email,
                    otp: value
                })).then(() => setLoading(false))
            )
    }

    const ResendOTP = () => {
        type == 'forget'
            ?
            (
                dispatch(AuthThunks.doForgetPassword({
                    email
                }))
            )
            :
            (
                dispatch(AuthThunks.doResendVerify({
                    email
                }))
                // dispatch(AuthThunks.doVerify({
                //     email,
                //     otp: value
                // })).then(() => setLoading(false))
            )
        setSeconds(59)
    }

    return (
        <>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={{ paddingHorizontal: 0 }}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[styles.cellRoot, isFocused && styles.focusCell,]}>
                        <Text style={styles.cellText}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
                    </View>
                )}
            />
            <Text style={styles.ResentText}>لم تستلم الكود؟<Text disabled={seconds != 0} onPress={() => ResendOTP()} style={styles.Resend}>  أرسل مرة ثانية</Text>{seconds != 0 && <Text style={styles.Resend}> ( {minutes}:{seconds} )</Text>}</Text>
            <CustomButton loading={loading} style={{ marginTop: 200 }} title="تأكيد" onPress={() => { SubmitOTP() }} />
        </>
    )
}

export default Form