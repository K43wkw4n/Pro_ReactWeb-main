import * as Yup from 'yup';


export const ValidateFormContact = Yup.object({
    name: Yup.string().required('Plese enter your name.'),
    phone: Yup.string().required('Plese enter your phone.'),
    address: Yup.string().required('Plese enter your address.'),
    province: Yup.string().required('Plese enter your province.'),
    district: Yup.string().required('Plese enter your district.'),
    subdistrict: Yup.string().required('Plese enter your subdistrict.'),
    postcode: Yup.string().required('Plese enter your postcode.'),

    surname: Yup.string().required('กรุณากรอกนามสกุล'),
    password: Yup.string().required('Please enter password.'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Please enter password"),

    Name: Yup.string().required('Please enter name.'),
    Price: Yup.string().required('Please enter price.'),
    Description: Yup.string().required('Please enter Description.'),

    email: Yup.string()
        .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email format"
        )
    .required("Please enter email"),
    subject: Yup.string().required('กรุณากรอกเรื่อง'),
    message: Yup.string().required('กรุณากรอกรายละเอียด'),
    phoneNumber: Yup.string().required('กรุณากรอกรายเบอร์โทรศัพท์'),
    status: Yup.string().required('กรุณากรอกสถานะภาพ'),


    
})