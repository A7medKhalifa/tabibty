import React from 'react';
import { Formik } from 'formik';
import { reset_initial_values } from 'src/Formik/initialValues';
import { ResetSchema } from 'src/Formik/schema';
import CustomInput from 'components/Input';
import { View } from 'react-native';
import { styles } from '../styles';
import CustomButton from 'components/Button';
import { Lock } from 'assets/svgs';
import { useAppDispatch } from 'src/redux/store';
import AuthThunks from 'src/redux/auth/thunks';
import { useSelector } from 'react-redux';
import { selectSignedUp } from 'src/redux/auth';
import { useNavigation } from '@react-navigation/native';

function Form({ email, otp }: any) {
  const { navigate } = useNavigation<any>()
  const dispatch = useAppDispatch()
  const Done = useSelector(selectSignedUp)

  React.useEffect(() => {
    Done && navigate('Login')
  }, [Done])

  return (
    <Formik
      initialValues={reset_initial_values}
      validationSchema={ResetSchema}
      onSubmit={values => {
        console.log({
          email: email,
          otp: Number(otp),
          newPassword: values.Password
        })
        dispatch(AuthThunks.doResetPassword({
          email: email,
          otp: Number(otp),
          newPassword: values.Password
        }))
      }}>
      {props => (
        <>
          <View style={styles.InputsContainer}>
            <CustomInput
              {...props}
              name="كلمة المرور الجديدة"
              secureTextEntry
              Label={'Password'}
              Icon={<Lock />}
            />
            <CustomInput
              {...props}
              name="تأكيد كلمة المرور الجديدة "
              secureTextEntry
              Label={'ConfirmPassword'}
              Icon={<Lock />}
            />

            <CustomButton style={{ marginTop: 275 }} title="تأكيد" onPress={() => props.handleSubmit()} />

          </View>
        </>
      )
      }
    </Formik >
  );
}

export default Form;
