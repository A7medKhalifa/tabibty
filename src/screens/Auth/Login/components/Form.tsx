import React, { useState } from 'react';
import { Formik } from 'formik';
import { login_initial_values } from 'src/Formik/initialValues';
import { LoginSchema } from 'src/Formik/schema';
import CustomInput from 'components/Input';
import { Text, View } from 'react-native';
import { styles } from '../styles';
import CustomButton from 'components/Button';
import { Lock, Mail } from 'assets/svgs';
import Social from './Social';
import { useAppDispatch } from 'src/redux/store';
import AuthThunks from 'src/redux/auth/thunks';
import { useNavigation } from '@react-navigation/native';

function Form() {
  const dispatch = useAppDispatch()
  const { navigate } = useNavigation<any>()
  const [loading, setLoading] = useState(false)
  return (
    <Formik
      initialValues={login_initial_values}
      validationSchema={LoginSchema}
      onSubmit={values => {
        setLoading(true)
        dispatch(AuthThunks.doSignIn({
          email: values.Email,
          password: values.Password
        })).then(() => setLoading(false))
      }}>
      {props => (
        <>
          <Text style={styles.Header}>طبيبتي</Text>
          <Text style={styles.Title}>تسجيل الدخول</Text>
          <View style={styles.InputsContainer}>
            <CustomInput
              {...props}
              name="البريد الإكتروني"
              Label={'Email'}
              keyboardType='email-address'
              placeholder="Phone number"
              Icon={<Mail />}
            />
            <CustomInput
              {...props}
              name='كلمة السر'
              Label="Password"
              placeholder="Password"
              secureTextEntry
              Icon={<Lock />}
            />
            <Text onPress={() => navigate('ForgetPassword')} style={styles.ForgetText}>هل نسيتِ كلمة السر؟</Text>
            <Text style={styles.SocialText}>أو يمكنكِ التسجيل من خلال</Text>
            <Social name='gmail' />
            <Social name='facebook' />
            <CustomButton loading={loading} title="تسجيل الدخول" onPress={() => props.handleSubmit()} />

            <Text style={styles.SocialText}>ليس لديكِ حساب ؟<Text onPress={() => navigate('Regist')} style={styles.Regist}> إنشاء حساب</Text></Text>

          </View>
        </>
      )
      }
    </Formik >
  );
}

export default Form;
