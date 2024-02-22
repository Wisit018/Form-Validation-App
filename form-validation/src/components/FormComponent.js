import "./FormComponent.css";
import {useState} from "react";

const FormComponent = ()=>{

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="container">
            <form className="form">
                <h2>Form Register</h2>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                    <small>Error message</small>
                </div>

                <div className="form-control">
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <small>Error message</small>
                </div>

                <div className="form-control">
                    <label>Password</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <small>Error message</small>
                </div>

                <div className="form-control">
                    <label>Confirm Password</label>
                    <input type="text" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                    <small>Error message</small>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default FormComponent