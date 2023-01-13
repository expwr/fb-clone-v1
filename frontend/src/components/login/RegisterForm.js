import { Form, Formik } from "formik";
import { useState } from "react";
import RegisterInput from "../inputs/registerinput";
import * as Yup from 'yup'
import DateOfBirthSelect from "./DateOfBirthSelect";
import GenderSelect from "./GenderSelect";
import DotLoader from 'react-spinners/DotLoader'
import axios from 'axios'
import { useDispatch } from 'react-redux' 
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'


export default function RegisterForm({ setVisible }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userInfos = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        bYear: new Date().getFullYear(),
        bMonth: new Date().getMonth() + 1,
        bDay: new Date().getDate(),
        gender: '',
    }
    const [ user, setUser ] = useState(userInfos)
    const { first_name, last_name, email, password, bYear, bMonth, bDay, gender } = user
    const yearTemp = new Date().getFullYear()
    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    
    const years = Array.from(new Array(109), (val, index) => yearTemp - index)
    const months = Array.from(new Array(12), (val, index) => 1 + index)
    const getDays = () => {
        return new Date(bYear, bMonth, 0).getDate()
    }
    const days = Array.from(new Array(getDays()), (val, index) => 1 + index)
    const  registerValidation = Yup.object({
        first_name: Yup.string()
        .required('What us your first name?')
        .min(2, 'First name must be between 2 and 16 characters.')
        .max(16, 'First name must be between 2 and 16 characters.')
        .matches(/^[aA-zZ]+$/, 'Numbers and special characters are not allowed.'),
        last_name: Yup.string()
        .required('What us your last name?')
        .min(2, 'Last name must be between 2 and 16 characters.')
        .max(16, 'Last name must be between 2 and 16 characters.')
        .matches(/^[aA-zZ]+$/, 'Numbers and special characters are not allowed.'),
        email: Yup.string()
        .required("You'll need this when you log in and if you ever need to reset your password.")
        .email('Enter a valid email address.'),
        password: Yup.string()
        .required('Enter a combination of at least six numbers, letters, and punctuation marks such as ! and &')
        .min(6, 'Password must be between 6 and 36 characters long.')
        .max(36, 'Password cannot be more than 36 characters long.'),
    })
    
    const [dateError, setDateError] = useState('')
    const [genderError, setGenderError] = useState('')
    
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const registerSubmit = async () => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
                first_name,
                last_name,
                email,
                password,
                bYear,
                bMonth,
                bDay,
                gender,
            })
            setError('')
            setSuccess(data.message)
            const { message, ...rest } = data
            setTimeout(() => {
                dispatch({ type: "LOGIN", payload: rest })
                Cookies.set('user', JSON.stringify(rest))
                navigate('/')
            }, 2000)
        } catch (error) {
            setLoading(false)
            setSuccess('')
            setError(error.response.data.message)
        }
    }
  return <div className="blur">
    <div className="register">
        <div className="register_header">
            <i className='exit_icon' onClick={()=> setVisible(false)}></i>
            <span>Sign Up</span>
            <span>It's quick and easy</span>
        </div>
        <Formik
        enableReinitialize
        initialValues={{
            first_name, last_name, email, password, bYear, bMonth, bDay, gender
        }}
        jan_0
        validationSchema = {registerValidation}
        onSubmit={() => {
            let current_date = new Date()
            let picked_date = new Date(bYear, bMonth - 1, bDay);
            let atleast14 = new Date(1970 + 14, 0, 1)
            let noMoreThan70 = new Date(1970 + 70, 0, 1)
            if(current_date - picked_date < atleast14) {
                setDateError('It looks like you have entered the wrong date. Make sure you enter a valid date of birth.') 
            } else if (current_date - picked_date > noMoreThan70) {
                setDateError('')
                setDateError('It looks like you have entered the wrong date. Make sure you enter a valid date of birth.')
            } else if(gender === ''){
                setDateError('')
                setGenderError('Please do choose a gender. You can change who can see this later.')
            } else {
                setDateError('')
                setGenderError('')
                registerSubmit()
            }
        }}
        >
        {(formik) => (
            <Form className="register_form">
            <div className="reg_line">
                <RegisterInput type='text' placeholder='First name' name='first_name' onChange={handleRegisterChange} />
                <RegisterInput type='text' placeholder='Last name' name='last_name' onChange={handleRegisterChange} />
            </div>
            <div className="reg_line">
                <RegisterInput type='text' placeholder='Email' name='email' onChange={handleRegisterChange} />
            </div>
            <div className="reg_line">
                <RegisterInput type='password' placeholder='New password' name='password' onChange={handleRegisterChange} />
            </div>
            <div className="reg_col">
                <div className="reg_line_header">
                    Date of Birth <i className="info_icon"></i>
                </div>
                <DateOfBirthSelect bDay={bDay} bMonth={bMonth} bYear={bYear} days={days} months={months} years={years} handleRegisterChange={handleRegisterChange}
                dateError={dateError} />
            </div>
            <div className="reg_col">
                <div className="reg_line_header">
                    Gender <i className="info_icon"></i>
                </div>
                <GenderSelect handleRegisterChange={handleRegisterChange} genderError={genderError} />
            </div>
            <div className="reg_infos">
                By clicking Sign Up, you agree to our {' '} <span>Terms, Data Policy &nbsp</span> and <span>Cookie Policy</span> You may receive SMS notifications from us and can opt out at any time. 
            </div>
            <div className="reg_btn_wrapper">
                <button type="submit" className="blue_btn open_signup">Sign Up</button>
            </div>
                <DotLoader color='#1876f2' loading={loading} size={30}/>
            
            {error && <div className="error_text">{error}</div>}
            {success && <div className="success_text">{success}</div>}
            </Form>
        )}
        </Formik>
        
    </div>
  </div>
}
