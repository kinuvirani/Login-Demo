import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authAction from '../../action/auth.js';
class Login extends Component
{
    state={
        email:"",
        password:""
    };
    btnlogin_click(e)
    {
        e.preventDefault();
        this.props.action.auth.loginuser(this.state);
    }
    handleChange(e)
    {
        this.setState({[e.target.name]:e.target.value})
    }
    render()
    {
        return (
            <Form>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" placeholder="Enter valid Email Id" onChange={this.handleChange.bind(this)} value={this.state.email}/>
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" placeholder="Enter password" onChange={this.handleChange.bind(this)} value={this.state.password} />
            </FormGroup>
            <Button onClick={this.btnlogin_click.bind(this)}>Login</Button>
            </Form>
        )
    }
}
 //For Reducer
const mapStateToProps=(state) =>{
    const {auth}=state;
    return{
        auth:auth
    }
}// access reducer property as this.Props.auth.propname;
//For Action
const mapDispatchToProps=dispatch=>({
    action:{
        auth:bindActionCreators(authAction,dispatch)
    }
});// access Action methods as this.Props.action.auth.methodname;
export default connect(mapStateToProps,mapDispatchToProps)(Login);
