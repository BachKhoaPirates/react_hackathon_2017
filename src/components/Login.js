import React, { Component } from 'react';
  import FacebookLogin from 'react-facebook-login';

class Login extends Component{
    responseFacebook(response) {
      console.log(response);
    }
    render(){
        return(
            <FacebookLogin
                appId="125938264676231"
                autoLoad={true}
                fields="name,email,picture,friends"
                scope="public_profile,user_friends,user_actions.books"
                callback={this.responseFacebook}
            />
        )
    }
}

export default Login;