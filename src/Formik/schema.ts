import * as Yup from 'yup';

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
    Email: Yup.string().required('من فضلك أدخلي بريدك الإلكتروني').matches(EmailReg, 'من فضلك أدخلي بريد صحيح'),
    Password: Yup.string().required('من فضلك أدخلي كلمه المرور').min(8, 'كلمه المرور لا يجب أن تقل عن ٨ أحرف أو أرقام'),
})


export const ForgetSchema = Yup.object().shape({
    Email: Yup.string().required('من فضلك أدخلي بريدك الإلكتروني').matches(EmailReg, 'من فضلك أدخلي بريد صحيح'),
})

export const RegistSchema = Yup.object().shape({
    Email: Yup.string().required('من فضلك أدخلي بريدك الإلكتروني').matches(EmailReg, 'من فضلك أدخلي بريد صحيح'),
    FullName: Yup.string().required('من فضلك أدخلي الأسم'),
    Password: Yup.string().required('من فضلك أدخلي كلمه المرور').min(8, 'كلمه المرور لا يجب أن تقل عن ٨ أحرف أو أرقام'),
    ConfirmPassword: Yup.string().required('من فضلك أدخلي كلمه المرور').min(8, 'كلمه المرور لا يجب أن تقل عن ٨ أحرف أو أرقام').oneOf([Yup.ref('Password'), null], "كلمتا المرور غير متطابقا"),
    City:  Yup.object().required('من فضلك أختري المدينه'),
    Government:  Yup.object().required('من فضلك أختري المحافظه'),
})

export const ResetSchema = Yup.object().shape({
    Password: Yup.string().required('من فضلك أدخلي كلمه المرور').min(8, 'كلمه المرور لا يجب أن تقل عن ٨ أحرف أو أرقام'),
    ConfirmPassword: Yup.string().required('من فضلك أدخلي كلمه المرور').min(8, 'كلمه المرور لا يجب أن تقل عن ٨ أحرف أو أرقام').oneOf([Yup.ref('Password'), null], "كلمتا المرور غير متطابقا")
})


export const ContactUsSchema = Yup.object().shape({
    FullName: Yup.string().required('من فضلك أدخلي الأسم'),
    Email: Yup.string().required('من فضلك أدخلي بريدك الإلكتروني').matches(EmailReg, 'من فضلك أدخلي بريد صحيح'),
    message: Yup.string().required('من فضلك أدخلي محتوي الرساله'),
})