import React, { useState } from "react";
import styles from './login.module.css';
import { Input } from "../../components/Input";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MyGoogleLogin from "../../components/GoogleLogin";
import { useNavigate } from "react-router-dom";

interface User {
    email: string;
    password: string;
    rememberMe: boolean;
}

const Login = () => {
    const navigate = useNavigate();
    const [appUser, setAppUser] = useState<User>({ email: '', password: '', rememberMe: false });
    const authenticateUser = () => {
        axios.post<User>(`${process.env.REACT_APP_API_URL}/user/authenticate`, appUser)
            .then(response => {
                console.log(response.data);
                navigate(-1);
            }).catch((err) => console.error(err));
    }

    return (

        <div className={`${styles.authWrapper} text-start`}>
            <div className={`${styles.authInner} mt-5`}>
                <form>
                    <div className="d-flex">
                        <img src={`${process.env.PUBLIC_URL}/app-logo.png`} alt="app-logo"
                            width={150} height={150} className="m-auto" />
                    </div>
                    <p className={`${styles.forgotPassword} text-end`}>
                        <a href="#">New User?</a>
                    </p>
                    <p className={`${styles.forgotPassword} text-end`}>
                        Forgot <a href="#">password?</a>
                    </p>
                    <div className="mb-3">
                        <label>Email address</label>
                        <Input
                            id='emailInput'
                            classNames="form-control"
                            type="email"
                            placeholder="Enter email"
                            onchange={(evt: React.ChangeEvent<HTMLInputElement>) => setAppUser({
                                ...appUser,
                                email: evt.target.value
                            })} />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <Input
                            id='passwordInput'
                            classNames="form-control"
                            type="password"
                            placeholder="Enter password"
                            onchange={(evt: React.ChangeEvent<HTMLInputElement>) => setAppUser({
                                ...appUser,
                                password: evt.target.value
                            })} />
                    </div>
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <Input
                                classNames="custom-control-input cursor-pointer"
                                type="checkbox"
                                id='rememberMeCheck'
                                onchange={(evt: React.ChangeEvent<HTMLInputElement>) => setAppUser({
                                    ...appUser,
                                    rememberMe: evt.target.checked
                                })} />
                            <label className={`${styles.customControlLabel} ms-2`} htmlFor="rememberMeCheck">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="d-grid">
                        <button type="button" className="btn btn-success" onClick={authenticateUser}>
                            Submit
                        </button>
                    </div>
                </form>
                <div className="text-center my-4 d-flex">
                    <div className={`${styles.separator}`}></div>
                    <span>OR</span>
                    <div className={`${styles.separator}`}></div>
                </div>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_GG_APP_ID || ''}>
                    <MyGoogleLogin />
                </GoogleOAuthProvider>
            </div>
        </div>
    )
}

export default Login;