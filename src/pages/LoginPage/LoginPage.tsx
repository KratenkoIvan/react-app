import { useForm } from "react-hook-form"
import { useTitle } from "../../hooks/useTitle"
import "./LoginPage.css"
import { useUserContext } from "../../context/userContext"

interface ILoginForm {
    email: string,
    password: string,
}


export function LoginPage(){
    const {login} = useUserContext()
    useTitle('Login')
    const {register: register, handleSubmit, formState} = useForm <ILoginForm>({
        mode: 'onSubmit'
    })

    function onSubmit(data: ILoginForm){
        console.log(data)
        login(data.email, data.password)
    }

    return (
        <div className="login-page-container">
            
             <form onSubmit={handleSubmit(onSubmit)} className="user-form">
             <h1 className="user-h1">Login</h1>
                <input placeholder = 'Email' className = "user-input" type="email" {...register('email', {
                    required: {value: true, message: 'Field is required'}, 
                    minLength: {value: 7, message: 'This field should be more than 7 symbols'}, 
                    maxLength: {value: 100, message: 'This field should be less than 100 symbols'}, })} />

                <p className = "user-error">{formState.errors.email?.message}</p>

                <input placeholder = 'Password' className = "user-input" type="password" {...register('password', {
                    required: {value: true, message: 'Field is required'}, 
                    minLength: {value: 4, message: 'This field should be more than 3 symbols'}, 
                    maxLength: {value: 100, message: 'This field should be less than 100 symbols'}, })} />
                
                <p className = "user-error">{formState.errors.password?.message}</p>
                <button className = "login-submit" type="submit">Submit</button>
            </form>
        </div>
    )
}