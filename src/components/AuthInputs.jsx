import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <div>
          <Input
            label='Email'
            type="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            invalid={emailNotValid}
          />
        </div>
        <div>
          <Input
            label='Password'
            type="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            invalid={passwordNotValid}
          />
        </div>
      </div>
      <div>
        <button type="button">Create a new account</button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
