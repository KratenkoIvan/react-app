import { useForm } from "react-hook-form"
import "./LoginPage.css"

// ILoginForm
interface IForm {
    email: string,
    password: string,
}


export function LoginPage(){
    // useTitle
    const {register: register, handleSubmit, formState} = useForm <IForm>({
        mode: 'onSubmit'
    })

    function onSubmit(data: IForm){
        // fetch("https://http://localhost:8000/api/post/login",{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        console.log(data)
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
                    minLength: {value: 7, message: 'This field should be more than 7 symbols'}, 
                    maxLength: {value: 100, message: 'This field should be less than 100 symbols'}, })} />
                
                <p className = "user-error">{formState.errors.password?.message}</p>
                <button className = "login-submit" type="submit">Submit</button>
            </form>
        </div>
    )
}