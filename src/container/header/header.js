import React, {Component} from 'react'
import {Navbar,NavbarBrand,Nav,NavItem,Button,NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authAction from '../../action/auth.js';
 
class Header extends Component{
  btnLogout_click(e)
  {
    e.preventDefault();
    this.props.action.auth.logoutuser();

  }
    render()
    {
      return(
        (this.props.auth.token && this.props.auth.token!=="")?
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/landing">Landing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/p1">P1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/p2">P2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/p3">P3</NavLink>
              </NavItem>
              <NavItem> 
                <Button onClick={this.btnLogout_click.bind(this)}>LOGOUT</Button>
                {/* <NavLink tag={Link} to="/landing">Landing</NavLink> */}
              </NavItem>
            </Nav>
        </Navbar>
      </div>:null)
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
export default connect(mapStateToProps,mapDispatchToProps)(Header);