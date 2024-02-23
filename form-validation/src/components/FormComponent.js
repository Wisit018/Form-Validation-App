import "./FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState(""); // Please enter a username of more than 8 characters
  const [errorEmail, setErrorEmail] = useState(""); // The email format is incorrect.
  const [errorPassword, setErrorPassword] = useState(""); // Password must have more than 8 characters
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(""); // Passwords do not match

  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validataForm = (e) => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("Please enter a username of more than 8 characters");
      setUserNameColor("red");
    }

    if (email.includes("@") && email.includes(".")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("The email format is incorrect.");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    }else{
      setErrorPassword("Password must have more than 8 characters");
      setPasswordColor("red");
    }

    if (confirmPassword !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    }else{
      setErrorConfirmPassword("Passwords do not match");
      setConfirmPasswordColor("red");
    }


  };

  return (
    <div className="container">
      <form className="form" onSubmit={validataForm}>
        <h2>Form Register</h2>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{ color: userNameColor }}>{errorUserName}</small>
        </div>

        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>

        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>

        <div className="form-control">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ borderColor: confirmPasswordColor }}
          />
          <small style={{ color: confirmPasswordColor }}>{errorConfirmPassword}</small>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FormComponent;
