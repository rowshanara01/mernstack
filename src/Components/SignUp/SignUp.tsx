import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../Hooks/SocialLogin/SocialLogin";

interface IFormInput {
  firstName: string;
  email: string;
  password: any;
  confirmPassword: any;
}

const SignUp = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="max-w-xs mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Create an account</h2>
      <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
        <input className="input input-bordered w-full max-w-xs" placeholder="First Name" {...register("firstName", { required: true})} />
        <input className="input input-bordered w-full max-w-xs"  placeholder="Email" {...register("email", { pattern: /^[A-Za-z]+$/i })} />
        <input className="input input-bordered w-full max-w-xs"  placeholder="password" type="text" {...register("password", { min: 6, max: 99 })} />
        <input className="input input-bordered w-full max-w-xs"  placeholder="confirm password" type="text" {...register("confirmPassword", { min: 6, max: 99 })} />
        <input className="btn btn-primary" value="create an account" type="submit" />
      </form>
      <p className="text-lg mt-2">Already have an account? <Link className="text-primary" to='/login'>login</Link> </p>

      <SocialLogin/>
    </div>
  );
};

export default SignUp;
