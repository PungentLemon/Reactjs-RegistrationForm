import React,{useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'


const Form = () => {
    const[isSubmitted,setSubmitted]=useState(false)

    const  submitForm=()=>{
        setSubmitted(true)
    }

    return (
        <>
        <div className='form-container'>
            <span className='close-btn'>x</span>
            <div className='form-content-left'>
                <img src='img/img (2).jpg' alt='spaceship' className='form-img'/>
            </div>
        {!isSubmitted ? <FormSignup submitForm={submitForm}/>:<FormSuccess/>}

        </div>
        
        
        </>
    )
}

export default Form
