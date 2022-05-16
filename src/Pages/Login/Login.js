import React, { useEffect, useRef, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sendingEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const location = useLocation();
    const emailRef = useRef('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || '/';

    const [token] = useToken(user || gUser)

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])

    if (loading || gLoading || sendingEmail) {
        return <Loading />
    }

    let signInError;

    if (error || gError) {
        signInError = <p className='text-red-500 mb-3'><small>{error?.message || gError?.message}</small></p>
    }

    if (user || gUser) {
        navigate(from, { replace: true })
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)

    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email)

        if (email) {
            await sendPasswordResetEmail(email);
            alert('Email Sent')
        }
        else {
            alert('Enter your email first')
        }
    }
    const handleEmail = e => {
        setEmail(e.target.value)

    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" ref={emailRef} onChange={handleEmail}
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        email: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        email: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be consists of 6 characters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            </label>
                            {signInError}
                            <button onChange={handleResetPassword} className=' ml-2 flex mb-1 text-secondary'>Forgot Password?</button>
                        </div>
                        <input className='btn w-full max-w-xs' type="submit" value='Login' />
                    </form>
                    <Link to='/signup' className='text-center text-sm mt-1 font-bold'> New to Doctors Portal? <span className='text-secondary'>Create new account</span></Link>

                    <div className='divider'>OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue With Google</button>
                </div>
            </div >
        </div >
    );
};

export default Login;