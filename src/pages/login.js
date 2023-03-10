import { useRef, useState } from 'react';
import LoginInput from "../components/LoginInput/LoginInput.js";
import '../App.css';

const Login = () => {
    // const [username, setUsername] = useState(""
    // const usernameRef = useRef()
    // const passwordRef = useRef()

    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username"
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password"
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    return (
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {inputs.map((input) => (
                    <LoginInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                {/* <LoginInput refer={usernameRef} placeholder="Littleroot" label="Username" />
                <LoginInput refer={passwordRef} placeholder="Azalea" label="Password" /> */}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login;