import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };

    const passwordValid = () =>{
        if(password!=confirmPassword){
            return "Passwords must match!";
        } else {
            return "Password matches"
        }
    }

    const fNameValid = () =>{
        if(firstName.length < 2){
            return "First Name Must be More Than 2 Characters"
        } else {
            return ""
        }
    }

    const lNameValid = () =>{
        if(lastName.length < 2){
            return "Last Name Must be More Than 2 Characters"
        }else {
            return ""
        }
    }

    const emailValid = () =>{
        if(email.length < 2){
            return "Email Must be More Than 2 Characters"
        }
        else {
            return ""
        }
    }
    
    return (
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
            <h4>{ fNameValid() }</h4>
	        <div>
                <label>First name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <h4>{ lNameValid() }</h4>
            <div>
                <label>Last name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <h4>{ emailValid() }</h4>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <h4>{ passwordValid() }</h4>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
