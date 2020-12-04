import React from 'react'

const validate= (values) => {
    let errors={}

    if(!values.username.trim()){
        errors.username="Username requiured"
    }

    if(!values.email){
        errors.email='Email required'
    } else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(values.email)){
        errors.email="Email address is invalid"
    }

    if(!values.password){
        errors.password='Password is required'
    }else if (values.password.length<6){
        errors.password='Pasword needs to be 6 character or more'
    }

    if (!values.confirmPassword){
        errors.confirmPassword='Password is required'
    } else if(values.password!==values.confirmPassword){
        errors.confirmPassword='Password do not match'
    }

    return errors
}

export default validate
