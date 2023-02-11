import React, { FC, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  username: string;
  password: string;
}

const AddUserSchema = yup.object().shape({
  username: yup.string()
  .required('Username is required')
  .min(6, "Username must be 6 characters"),
  password: yup.string()
  .required("Password is mandatory")
  .min(6, "Password must be 6 characters long")
})

export const Login: FC<{}> = (): JSX.Element => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: yupResolver(AddUserSchema)
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data): any => {
    setFormSubmitted(true);
    console.log(data);
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Sign in
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-800"
            >
              Username:
            </label>
            <input
              type="text"
              autoFocus
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("username")}
            />
            <p>{errors.username?.message }</p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("password")}
           />
            <p>{errors.password?.message}</p>
          </div>
          <a
            href="#"
            className="text-xs text-purple-600 hover:underline"
          >
            Forget Password?
          </a>
          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
          {formSubmitted && <p>Form submitted!</p>}
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don{"'"}t have an account?{" "}
          <a
            href="#"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}