import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from '../Hooks/SocialLogin/SocialLogin';

interface IFormInput {
    email: string;
    password: any;
  }
  

const Login = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    return (
        <div className="max-w-xs mx-auto mt-12 h-screen">
        <h2 className="text-2xl font-bold mb-4">Login With</h2>
      <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
       
        <input className="input input-bordered w-full max-w-xs"  placeholder="Email" {...register("email", { pattern: /^[A-Za-z]+$/i })} />
        <input className="input input-bordered w-full max-w-xs"  placeholder="password" type="text" {...register("password", { min: 6, max: 99 })} />
        <input className="btn btn-primary" value="Login" type="submit" />
      </form>
      <p className="text-sm mt-2">Don't have an account? <Link className="text-primary" to='/signUp'>create an account</Link> </p>


      <SocialLogin/>
    </div>
    );
};

export default Login;