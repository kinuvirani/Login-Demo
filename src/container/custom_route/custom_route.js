import React ,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from "react-redux";

class CRoute extends Component
{
    getExtractedJson({ component,cprivate,crole,actions,auth, ...rest})
    {
        return rest;
    }
    render()
    {
        const rest=this.getExtractedJson(this.props);
        const isUserLoggedIn=this.props.auth.token && this.props.auth.token !=="";


        const userCurrentRole=this.props.auth.role;
        const {component,cprivate,crole}=this.props;
        const Component=component;

        let redirectTo=undefined;
        if(isUserLoggedIn && rest.path==="/login")
            redirectTo="/";
        else if(!isUserLoggedIn && cprivate )
            redirectTo="/login";
        
        else if(isUserLoggedIn && cprivate && crole && crole.filter((item)=>item===userCurrentRole).length===0)
            // console.log(crole);
            redirectTo="/unauthorized_access";    
       
   
        return(
            
            <Route
                {...rest}
                render={props=>(
                    (redirectTo)?<Redirect to={{pathname:redirectTo,state:{from:props.location}}} />:<Component {...props} />
                )}
            />
        );
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
        //auth:bindActionCreators(authAction,dispatch)
    }
});// access Action methods as this.Props.action.auth.methodname;
export default connect(mapStateToProps,mapDispatchToProps)(CRoute);