import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from 'components/Header'
import CustomButton from 'components/Button'
import { ScrollView } from 'react-native'
import { Camera, City, Earth, User } from 'assets/svgs'
import { useSelector } from 'react-redux'
import { selectCities, selectCurrentUser, selectGovernorates, selectSignedUp } from 'src/redux/auth'
import useLibraryPermission from 'src/hooks/useLibraryPermission'
import { useAppDispatch } from 'store/store'
import { Formik } from 'formik'
import { EditProfileSchema } from 'src/Formik/schema'
import { DropDown } from 'components/Drop down'
import AuthThunks from 'store/auth/thunks'
import CustomInput from 'components/Input'
import { DropDownCity } from 'components/Drop down city'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

const EditProfileScreen = () => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const USER = useSelector(selectCurrentUser)
    const Governorates = useSelector(selectGovernorates)
    const AllCities = useSelector(selectCities)
    const Done = useSelector(selectSignedUp)
    const [ind, setInd] = React.useState(null)
    const [load, setLoad] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState<any>(null)
    const [selectedIndexCity, setSelectedIndexCity] = React.useState<any>(null)
    const { pick, source } = useLibraryPermission()
    const [selectorsShow, updateShowSelectors] = React.useState({ UniversityName: false, CollegeName: false, });
    const [{ Government, Cities }, setData,] = React.useState({
        Government: { Government: { id: USER?.governorate?.id, name: USER?.governorate?.governorate_name_ar } },
        Cities: { Cities: { id: USER?.city?.governorate_id, name: USER?.city?.city_name_ar } },
    });

    React.useEffect(() => {
        dispatch(AuthThunks.doGetGovernorates())
    }, [])

    React.useEffect(() => {
        ind != null && dispatch(AuthThunks.doGetCities(ind))
    }, [ind])

    console.log(Done)
    React.useEffect(() => {
        setSelectedIndexCity(null)
    }, [selectedIndex])

    React.useEffect(() => {
        Done && navigate('Profile')
    }, [Done])

    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <ScrollView>
                <View style={styles.HeaderContainer}>
                    <Header hasBack Title='الصفحة الشخصية' />
                </View>

                <TouchableOpacity disabled={load} activeOpacity={.8} onPress={() => { pick(dispatch, setLoad) }} >
                    <FastImage style={styles.Avatar} source={{ uri: (source == undefined && USER?.image?.secure_url == 'default') ? 'https://img.freepik.com/vecteurs-premium/femme-bande-dessinee-avatar-blonde_8462-3.jpg' : source != undefined ? source?.secure_url : USER?.image?.secure_url }}  >
                        <View style={styles.CameraContainer}>
                            <Camera fill={'#000'} />
                        </View>
                    </FastImage>
                </TouchableOpacity>

                <Text style={styles.Email}>{USER?.email}</Text>
                <Formik
                    initialValues={{
                        FullName: USER?.fullname,
                        City: USER?.city,
                        Government: USER?.governorate,
                    }}
                    validationSchema={EditProfileSchema}
                    onSubmit={(values) => {
                        source == undefined
                            ?
                            dispatch(AuthThunks.doEditProfile({
                                fullname: values?.FullName,
                                city: values?.City,
                                governorate: values?.Government,
                            })).then(() => {
                                dispatch(AuthThunks?.doGetProfile())
                            })
                            :
                            dispatch(AuthThunks.doEditProfile({
                                fullname: values?.FullName,
                                city: values?.City,
                                governorate: values?.Government,
                                image: {
                                    secure_url: source?.secure_url,
                                    public_id: source?.public_id
                                }
                            })).then(() => {
                                dispatch(AuthThunks?.doGetProfile())
                            })
                    }}
                >
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
                                <DropDown
                                    {...props}
                                    Label='Government'
                                    name='أختر المحافظه'
                                    exixted={USER?.governorate?.governorate_name_ar}
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
                                <DropDownCity
                                    {...props}
                                    ind={ind}
                                    City={true}
                                    Label='City'
                                    name='أختر المدينه'
                                    exixted={USER?.city?.city_name_ar}
                                    selectorsShow={selectorsShow}
                                    updateShowSelectors={updateShowSelectors}
                                    data={AllCities}
                                    setChoosen={(value: any) => {
                                        setData((prev) => ({ ...prev, Cities: value }));
                                    }}
                                    Icon={<City />}
                                />
                            </View>
                            <CustomButton onPress={() => { props.handleSubmit() }} style={styles.Button} title='حفظ' />
                        </>
                    )}
                </Formik>

            </ScrollView>
        </SafeAreaView >
    )
}

export default EditProfileScreen