import React from 'react'
import Sigform from '../Components/Sigform'
import { useNavigate } from 'react-router-dom'
import { auth, createUserWithEmailAndPassword } from '../Config/Configfire'
export default function Signup() {
    let getuseNavigate = useNavigate()
    let sfun = (data) => {
        console.log(data);
        createUserWithEmailAndPassword(auth, `${data.username}@gmail.com`, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                getuseNavigate('/Login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
            });
    }
    return (
        <div>
            <h1>SIGN UP</h1>
            <Sigform key={sfun} />

        </div>
    )
}
