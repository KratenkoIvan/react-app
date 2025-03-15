import { useForm } from "react-hook-form"
import { useTitle } from "../../hooks/useTitle"
import "./RegisterPage.css"
import { useUserContext } from "../../context/userContext"

interface IRegisterForm {
    username: string,
    email: string,
    password: string,
}

export function RegisterPage(){
    const {register} = useUserContext()
    useTitle('Registration')

    const {register: registerField, handleSubmit, formState} = useForm <IRegisterForm>({
            mode: 'onSubmit'
        })

    function onSubmit(data: IRegisterForm){
        console.log(data)
        register(data.email, data.username, data.password)
    }
    return (
        <div className="login-page-container">
            
            <form onSubmit={handleSubmit(onSubmit)} className="user-form">
            <h1 className="user-h1">Register</h1>
                <input placeholder = 'Username' className = "user-input" type="text" {...registerField('username', {
                    required: {value: true, message: 'Field is required'}, 
                    minLength: {value: 4, message: 'This field should be more than 3 symbols'}, 
                    maxLength: {value: 100, message: 'This field should be less than 100 symbols'}, })} />
                <p className = "user-error">{formState.errors.username?.message}</p>

                <input placeholder = 'Email' className = "user-input" type="email" {...registerField('email', {
                    required: {value: true, message: 'Field is required'}, 
                    minLength: {value: 7, message: 'This field should be more than 6 symbols'}, 
                    maxLength: {value: 100, message: 'This field should be less than 100 symbols'}, })} />
                <p className = "user-error">{formState.errors.email?.message}</p>

                <input placeholder = 'Password' className = "user-input" type="password" {...registerField('password', {
                    required: {value: true, message: 'Field is required'}, 
                    minLength: {value: 4, message: 'This field should be more than 3 symbols'}, 
                    maxLength: {value: 100, message: 'This field should be less than 100 symbols'}, })} />
                <p className = "user-error">{formState.errors.password?.message}</p>

                <button className = "login-submit" type="submit">Submit</button>

        </form>
        </div>
    )
}