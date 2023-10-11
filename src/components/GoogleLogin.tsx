import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyGoogleLogin = () => {

    const [googleUser, setGoogleUser] = useState<any>({});
    const [profile, setProfile] = useState<any>({});

    useEffect(
        () => {
            if (googleUser) {
                axios.get(`${process.env.REACT_APP_GOOGLE_API}/oauth2/v1/userinfo?access_token=${googleUser.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${googleUser.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [googleUser]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <GoogleLogin
            onSuccess={codeResponse => setGoogleUser(codeResponse)}
            onError={() => console.log('Login Failed')}
        />
    )
}

export default MyGoogleLogin;