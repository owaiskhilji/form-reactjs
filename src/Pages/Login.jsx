import React from 'react'
import Logform from '../Components/Logform'
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../Config/Configfire';
export default function Login() {
    let getuseNavigate = useNavigate()
    let lfun = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(auth, `${data.username}@gmail.com`, data.password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                getuseNavigate('/Profile')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }
    return (
        <div>
            <h1>LOGIN </h1>
            <Logform key={lfun} />
        </div>
    )
}
