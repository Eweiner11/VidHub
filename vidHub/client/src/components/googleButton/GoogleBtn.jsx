import React, { Component } from "react";
import { useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLogout } from "react-google-login";
import {setFavoritesList, setUser} from "../../actions/index"
import axios from "axios";


const CLIENT_ID =
  process.env.API_KEY;

class GoogleBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
     isLogined: false,
      user: "",
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }
 


  login(response) {
    if (response.accessToken) {
      
      axios
        .post("/users", {
          email: response.profileObj.email,
        })
        .then(({ data }) => {
         
      this.setState({user:data,isLogined:true})
 
      window.localStorage.setItem('userName',data)
      this.props.setUser(data)
        
        })
        .catch((err) => console.log(err));

      this.setState((state) => ({
        isLogined: true,
        accessToken: response.accessToken,
      }));
    }
  }

  logout(response) {
   this.setState({user:"",isLogined:false})
   localStorage.setItem('userName',"")
   this.props.setUser('')
   
  }

  handleLoginFailure(response) {
    alert("Failed to log in");
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }

  render() {
    return (
      <div className = 'googleBtnContainer'>
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
          />
        )}
        <h4>{this.state.user}</h4>
      </div>
    );
  }
}

export default GoogleBtn;