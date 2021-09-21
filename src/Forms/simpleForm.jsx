import React from 'react';

class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            confirmPassword:"",
            phone:"",
            errors: {
                username:'',
                email:'',
                password:'',
                confirmPassword:'',
                phone:'' 
            },
            isValid: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }   
    // const formValid = errors => {
    //     let valid = true;
        
    // }
    handleChange(e) {
        const { name, value } = e.target;
        let errors = this.state.errors;
        let isValid = this.state.isValid;
        const emailReg = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g)
         const PasswordReg = RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
        switch(name) {
            case 'username':
                errors.username = (value.length < 6 && value.length > 0) || value.length > 20
                ? "Username must be min 6 and max 20" : "";

              break;
            case 'email':
                errors.email = !emailReg.test(value)
                ? "Please enter correct email address" : "";
              break;
            case 'password':
                errors.password = !PasswordReg.test(value)
                ? "Password must contain uppercase, lowercase, specialcharacter and number" : "";
              break;
            case 'confirmPassword':
                errors.confirmPassword = value !== this.state.password
                ? "Password and confirm password must be same" : "";
              break;
            case 'phone':
                errors.phone = value.length !== 10 
                ? "Phone number must be 10 digit" : "";
              break;
            default: 
              break;
        }
        // if(name == "phone") {
        //     if(value.length <=10) {
        //         value = e.target.value.replace(/\D/g, '');
        //         this.setState({[name]: value });
        //     }
        // }
        // else {
        //     this.setState({[targetName]: targetValue });
        // }  
        this.setState({errors, [name]: value }, () => console.log(this.state));    
    }

    formValidation = () => {
        const { username, email, password, confirmPassword, phone } = this.state;
        let isValid = true;
        const errors = {};        

        if(!username) {
            errors["username"] = "Please enter your name";
            isValid = false;
        } 

        if(!email) {
            errors["email"] = "Please enter your E-mail!";
            isValid = false;
        }
        
        if(!password) {
            errors["password"] = "Please enter your password";
            isValid = false;
        }

        if(!confirmPassword) {
            errors["confirmPassword"] = "Please confirm your password";
            isValid = false;
        }

        if(!phone) {
            errors["phone"] = "Please enter your phone number";
            isValid = false;
        }

        this.setState({errors});
        return isValid;
    }

    handleSubmit(e) {
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
               
                <div className="page-title">Form</div>
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

export default SimpleForm;