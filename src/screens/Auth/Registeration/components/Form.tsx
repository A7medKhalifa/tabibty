import React from 'react';
import { Formik } from 'formik';
import { regist_initial_values } from 'src/Formik/initialValues';
import { RegistSchema } from 'src/Formik/schema';
import CustomInput from 'components/Input';
import { View } from 'react-native';
import { styles } from '../styles';
import CustomButton from 'components/Button';
import { City, Earth, Lock, Mail, User } from 'assets/svgs';
import { useAppDispatch } from 'src/redux/store';
import AuthThunks from 'src/redux/auth/thunks';
import { useSelector } from 'react-redux';
import AuthSlice, { selectCities, selectGovernorates, selectSignedUp } from 'src/redux/auth';
import { useNavigation } from '@react-navigation/native';
import { DropDown } from 'components/Drop down';
import Gender from 'components/Gender';

function Form() {
  const { navigate } = useNavigation<any>()
  const dispatch = useAppDispatch()
  const SignedUp = useSelector(selectSignedUp)
  const Governorates = useSelector(selectGovernorates)
  const AllCities = useSelector(selectCities)
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [ind, setInd] = React.useState(null)
  const [selectorsShow, updateShowSelectors] = React.useState({ UniversityName: false, CollegeName: false, });
  const [selectedIndex, setSelectedIndex] = React.useState<any>(null)
  const [selectedIndexCity, setSelectedIndexCity] = React.useState<any>(null)
  const [{ Government, Cities }, setData,] = React.useState({
    Government: { Government: { id: 0, name: null } },
    Cities: { Cities: { id: 0, name: null } },
  });
  React.useEffect(() => {
    dispatch(AuthThunks.doGetGovernorates())
    dispatch(AuthSlice.changeIsVerivied(false))
    SignedUp && navigate('OTP', { email, type: 'verivy' })
  }, [SignedUp])

  React.useEffect(() => {
    ind != null && dispatch(AuthThunks.doGetCities(ind))
  }, [ind])
  React.useEffect(() => {
    setSelectedIndexCity(null)
  }, [selectedIndex])
  return (
    <Formik
      initialValues={regist_initial_values}
      validationSchema={RegistSchema}
      onSubmit={(values: any) => {
        setLoading(true)
        setEmail(values.Email)
        dispatch(AuthThunks.doSignUp({
          email: values.Email,
          password: values.Password,
          fullname: values.FullName,
          city: values.City?.city_name_ar,
          governorate: values?.Government?.governorate_name_ar,
          gender:values?.gender
        })).then(() => setLoading(false))
      }}>
      {props => (
        <>
          <View style={styles.InputsContainer}>
            <CustomInput
              {...props}
              name="الاسم"
              Label={'FullName'}
              keyboardType='email-address'
              Icon={<User />}
            />
            <CustomInput
              {...props}
              name="البريد الإكتروني"
              Label={'Email'}
              keyboardType='email-address'
              Icon={<Mail />}
            />
            <DropDown
              {...props}
              Label='Government'
              name='أختر المحافظه'
              selectorsShow={selectorsShow}
              updateShowSelectors={updateShowSelectors}
              data={Governorates}
              setInd={setInd}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              setChoosen={(value: any) => {
                setData((prev) => ({ ...prev, Government: value }));
              }}
              Icon={<Earth />}
            />
            <DropDown
              {...props}
              City
              Label='City'
              name='أختر المدينه'
              selectorsShow={selectorsShow}
              updateShowSelectors={updateShowSelectors}
              data={AllCities}
              selectedIndex={selectedIndexCity}
              setSelectedIndex={setSelectedIndexCity}
              disabled={ind == null}
              setChoosen={(value: any) => {
                setData((prev) => ({ ...prev, Government: value }));
              }}
              Icon={<City />}
            />
            <CustomInput
              {...props}
              name="كلمة السر"
              Label={'Password'}
              keyboardType='email-address'
              secureTextEntry
              Icon={<Lock />}
            />
            <CustomInput
              {...props}
              name="تأكيد كلمة السر"
              Label={'ConfirmPassword'}
              keyboardType='email-address'
              secureTextEntry
              Icon={<Lock />}
            />
            <Gender
              {...props}
            />


            <CustomButton loading={loading} style={{ marginTop: 75, marginBottom: 40 }} title="إنشاء حساب" onPress={() => props.handleSubmit()} />

          </View>
        </>
      )
      }
    </Formik >
  );
}

export default Form;
