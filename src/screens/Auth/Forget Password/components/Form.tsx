import React from 'react';
import { Formik } from 'formik';
import { forget_initial_values } from 'src/Formik/initialValues';
import { ForgetSchema } from 'src/Formik/schema';
import CustomInput from 'components/Input';
import { View } from 'react-native';
import { styles } from '../styles';
import CustomButton from 'components/Button';
import { Mail } from 'assets/svgs';
import { useAppDispatch } from 'src/redux/store';
import AuthThunks from 'src/redux/auth/thunks';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthSlice, { selectVerivied2 } from 'src/redux/auth';

function Form() {
  const { navigate } = useNavigation<any>()
  const dispatch = useAppDispatch()
  const Verivied = useSelector(selectVerivied2)
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    dispatch(AuthSlice.changeIsVerivied(false))
    Verivied && navigate('OTP', { email, type: 'forget' })
  }, [Verivied])
  return (
    <Formik
      initialValues={forget_initial_values}
      validationSchema={ForgetSchema}
      onSubmit={values => {
        setLoading(true)
        setEmail(values.Email)
        dispatch(AuthThunks.doForgetPassword({
          email: values.Email,
        })).then(() => setLoading(false))
      }}>
      {props => (
        <>
          <View style={styles.InputsContainer}>
            <CustomInput
              {...props}
              name="البريد الإكتروني"
              Label={'Email'}
              keyboardType='email-address'
              placeholder="Phone number"
              Icon={<Mail />}
            />

            <CustomButton loading={loading} style={{ marginTop: 275 }} title="أرسل كلمة السر" onPress={() => props.handleSubmit()} />

          </View>
        </>
      )
      }
    </Formik >
  );
}

export default Form;
