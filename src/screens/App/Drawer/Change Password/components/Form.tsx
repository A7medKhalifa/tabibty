import React from 'react';
import { Formik } from 'formik';
import { change_initial_values } from 'src/Formik/initialValues';
import { changeSchema } from 'src/Formik/schema';
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

function Form() {
  const { navigate } = useNavigation<any>()
  const dispatch = useAppDispatch()
  const SignedUp = useSelector(selectSignedUp)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    SignedUp && navigate('Profile')
  }, [SignedUp])


  return (
    <Formik
      initialValues={change_initial_values}
      validationSchema={changeSchema}
      onSubmit={(values) => {
        setLoading(true)
        dispatch(AuthThunks.doChangePassword({
          oldPassword: values.OldPassword,
          newPassword: values.Password
        })).then(() => setLoading(false))
      }}>
      {props => (
        <>
          <View style={styles.InputsContainer}>
            <CustomInput
              {...props}
              name="كلمة المرور القديمه"
              Label={'OldPassword'}
              keyboardType='email-address'
              secureTextEntry
              Icon={<Lock />}
            />
            <CustomInput
              {...props}
              name="كلمة المرور الجديده"
              Label={'Password'}
              keyboardType='email-address'
              secureTextEntry
              Icon={<Lock />}
            />
            <CustomInput
              {...props}
              name="تأكيد كلمة المرور الجديده"
              Label={'ConfirmPassword'}
              keyboardType='email-address'
              secureTextEntry
              Icon={<Lock />}
            />



            <CustomButton loading={loading} style={{ marginTop: 75, marginBottom: 40 }} title="تغيير كلمه المرور" onPress={() => props.handleSubmit()} />

          </View>
        </>
      )
      }
    </Formik >
  );
}

export default Form;
