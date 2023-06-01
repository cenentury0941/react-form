import React, {Component} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import "../styles/SignUp.css"
import ModalBox from "./ModalBox";

class SignUp extends Component{

    constructor(props)
    {
        super(props);
        this.state = { fname : "" , lname : "" , email : "" , uname : "" , pwd : "" , flag : false };
    }

    signup()
    {
        this.setState( { flag : 0 } );
        console.log( this.state );

        if( localStorage[this.state.email] )
        {
            console.log("Email Already Present");
            this.setState( { flag : 2 } );
        }
        else{
            console.log("Email Added");
            localStorage[this.state.email] = JSON.stringify(this.state);
            this.setState( { flag : 1 } );
        }
        return false;
    }

    render()
    {
        return (
            <form className="FormControl" action="" style={{marginLeft: "5vw"}}>

            <h3>Sign Up</h3>

            <div className="ControlContainer">
            <TextField
            required
            id="fname"
            label="First Name"
            value={this.state.fname}
            onChange={ (evt) => { this.setState( { fname : (evt.target.value)  } ) } }
            />

            <TextField
            required
            id="lname"
            label="Last Name"
            value={this.state.lname}
            onChange={ (evt) => { this.setState( { lname : (evt.target.value)  } ) } }
            />
            </div>

            <div className="ControlContainer">
            <TextField required fullWidth label="email" id="email" type="email"
            value={this.state.email}
            onChange={ (evt) => { this.setState( { email : (evt.target.value)  } ) } }
             />
            </div>

            <div className="ControlContainer">
            <TextField required fullWidth label="usernane" id="uname" 
            value={this.state.uname}
            onChange={ (evt) => { this.setState( { uname : (evt.target.value)  } ) } }

            />
            </div>

            <div className="ControlContainer">
            <TextField required fullWidth label="password" id="pass" type="password" 
            value={this.state.pwd}
            onChange={ (evt) => { this.setState( { pwd : (evt.target.value)  } ) } }
            />
            </div>

            <div className="ControlContainer">
            <Button  variant="contained" onClick={this.signup.bind(this)}>Sign Up</Button>
            </div>

            { this.state.flag && <ModalBox data={JSON.stringify(this.state)}/> }

            </form>
        );
    }

}

export default SignUp;