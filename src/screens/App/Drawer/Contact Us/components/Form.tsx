import React, { useState } from 'react';
import { Formik } from 'formik';
import { ContactUs_initial_values } from 'src/Formik/initialValues';
import { ContactUsSchema } from 'src/Formik/schema';
import CustomInput from 'components/Input';
import { View } from 'react-native';
import styles from '../styles';
import CustomButton from 'components/Button';


function Form() {
    const [loading, setLoading] = useState(false)
    return (
        <Formik
            initialValues={ContactUs_initial_values}
            validationSchema={ContactUsSchema}
            onSubmit={values => {
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
