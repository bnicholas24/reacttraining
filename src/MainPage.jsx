import React from 'react';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            confirmPassword:"",
            phone:"",
            errors: {}
        }
    }   

    handleChange = (e) => {
        const targetName = e.target.name;
        let targetValue = e.target.value;

        if(targetName == "phone") {
            if(targetValue.length <=10) {
                targetValue = e.target.value.replace(/\D/g, '');
                this.setState({[targetName]: targetValue });
            }
        }
        else {
            this.setState({[targetName]: targetValue });
        }        
    }

    formValidation = () => {
        const { username, email, password, confirmPassword, phone } = this.state;
        let isValid = true;
        const errors = {};
        // const emailReg = '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/';
         const PasswordReg = RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
        

        if(!username) {
            errors["username"] = "Username cannot be empty";
            isValid = false;
        } else if(username.trim().length < 6 || username.trim().length > 20) {
            errors["username"] = "Username must be min 6 and max 20";
            isValid = false;            
        }

        if(!email) {
            errors["email"] = "Email cannot be empty";
            isValid = false;
        }
        else if(!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)){
            errors["email"] = "Please enter correct email address";
            isValid = false;
        }
        
        if(!password) {
            errors["password"] = "Password cannot be empty";
            isValid = false;
        }
        else if(!PasswordReg.test(password)){
            errors["password"] = "Password must contain 1 uppercase, 1 specialcharacter, 1 number and lowercase";
            isValid = false;
        }

        if(!confirmPassword) {
            errors["confirmPassword"] = "Confirm password cannot be empty";
            isValid = false;
        }
        else if(confirmPassword !== password){
            errors["confirmPassword"] = "Confirm password must be same";
            isValid = false;
        }

        if(!phone) {
            errors["phone"] = "Phone number cannot be empty";
            isValid = false;
        }
        else if(phone.trim().length < 10) {
            errors["phone"] = "Phone number must be 10 digit";
            isValid = false;
        }

        this.setState({errors});
        return isValid;
    }

    handleSubmit = (e) => {
        console.log('hi');
        e.preventDefault();
        const isValid = this.formValidation();

        if(isValid) {
            this.setState({username:"", email:"", password:"", confirmPassword:"", phone:""});
            alert("Form has submitted successfully.");
        }
    }

    render() {
        const {username, email, password, confirmPassword, phone, errors} = this.state;
        return (
            <div>
                <h1>React Training</h1>
                <p>Form</p>
                <form onSubmit={this.handleSubmit} className='input-form'>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={username} 
                        name="username" 
                        onChange={this.handleChange} 
                        />
                    { errors && (
                            <span className="error">{errors["username"]}</span> 
                        )}
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Email" 
                        name="email"
                        value={email}
                        onChange={this.handleChange} 
                    />
                    { errors && (
                            <span className="error">{errors["email"]}</span> 
                        )}
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    
                    { errors && (
                            <span className="error">{errors["password"]}</span> 
                        )}
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        placeholder="Reset Password" 
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange} 
                    />
                    { errors && (
                            <span className="error">{errors["confirmPassword"]}</span> 
                        )}
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Phone number" 
                        name="phone"
                        value={phone}
                        onChange={this.handleChange} 
                    />
                    { errors && (
                            <span className="error">{errors["phone"]}</span> 
                        )}
                </div>
                <p><button value="Submit">Submit</button></p>
                </form>
            </div>
        )
    }

}

export default MainPage;