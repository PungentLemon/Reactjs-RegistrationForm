import {useState,useEffect} from 'react'
import validate from './validateInfo'

const useForm=(callback, validate)=>{
    const[values,setValues]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const [errors,setErrors]=useState({})
    const [isSubmitting,setisSubmitting]=useState(false)

    const handleChange=(e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(validate(values))
        setisSubmitting(true)
    }

    useEffect(()=>{
        if(Object.keys(errors).length===0 && isSubmitting){
            callback()
        }
    },
    [errors]
    )

    return {values,handleChange,errors,handleSubmit}
}

export default useForm