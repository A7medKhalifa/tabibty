import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { ContactUs_initial_values } from 'src/Formik/initialValues';
import { ContactUsSchema } from 'src/Formik/schema';
import CustomInput from 'components/Input';
import { View } from 'react-native';
import styles from '../styles';
import CustomButton from 'components/Button';
import { useSelector } from 'react-redux';
import { selectDone } from 'store/app';
import { useAppDispatch } from 'store/store';
import AppThunks from 'store/app/thunks';
import { useNavigation } from '@react-navigation/native';


function Form() {
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    const Done = useSelector(selectDone)
    useEffect(() => {
        Done && navigation?.replace('App')
    }, [Done])
    return (
        <Formik
            initialValues={ContactUs_initial_values}
            validationSchema={ContactUsSchema}
            onSubmit={values => {
                setLoading(true)
                dispatch(AppThunks.doContactUs({
                    email: values?.Email,
                    name: values?.FullName,
                    message: values?.message
                })).then(() => { setLoading(false) })
            }}>
            {props => (
                <>
                    <View style={styles.InputsContainer}>
                        <CustomInput
                            {...props}
                            name='الاسم'
                            Label="FullName"
                        />
                        <CustomInput
                            {...props}
                            name="البريد الإكتروني"
                            Label={'Email'}
                            keyboardType='email-address'
                        />
                        <CustomInput
                            {...props}
                            multiline
                            name="أكتبِ رسالتك هنا.."
                            Label={'message'}
                        />
                        <CustomButton loading={loading} title="أرسال" onPress={() => props.handleSubmit()} />


                    </View>
                </>
            )
            }
        </Formik >
    );
}

export default Form;
