import './login_style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import React, { Component }  from 'react';
import anime from 'animejs/lib/anime.min'
import Card_img from './Card_img.js';
import Login from './Login';
import Register from './Register';
import Forgot_btn from './Forgot_btn';
class Login_page extends Component {
  constructor(props){
      super(props);
      this.content = [
        { title: 'Welcome',
          intro: 'Welcome to visit our website\nYou can discovery very much course you want to learn \nWith modern rate system, you can exactly find out which courses suitable with you',
          status: 'Sign In',
        },
        { title: 'Hello friend',
          intro: 'Welcome back to our website \nHave a nice day',
          status: 'Sign Up',
        }
      ];
      this.state = this.content[1]
    }

  Move = (target, percent, director) => {
    // director = 1 -> move right else move left
    // .card-img-left = 45 percent
    var target_width =  document.querySelector(target).offsetWidth;
    var parent_width = Math.round(target_width * 100 / percent);
    anime({
        targets:target,
        translateX: Math.abs(parent_width - target_width) * director,
        duration: 1000,
        easing: 'easeInOutExpo',
    })
  }

  BtnClick = () => {
    this.Move_component()
    if (this.state.status === 'Sign In')
      this.setState(this.content[1])
    else
      this.setState(this.content[0])
  }

  Move_component =() => {
    //var btn = document.getElementById('btn1');

    if (this.state.status === "Sign Up") {
          this.Move('.card-img-left', 45, 1);
          this.Move('.card-body', 55, -1);
      } else  {
          this.Move('.card-img-left', 45, 0);
          this.Move('.card-body', 55, 0);
      }
  }

  alert_announce = () => {
    alert('Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.')
  }
  Switch_component = () => {
    if (this.state.status === 'Sign Up')
      return <Login />
    else
      return <Register />
  }

  render () {
    return (
      <div className='d-flex flex-column justify-content-center'>
        <div className="container-md mt-5 ">
          <div className="card flex-row border-0 shadow rounded-3">
            <Card_img 
              title =  { this.state.title }
              intro = { this.state.intro }
              status = {this.state.status}
              style = {this.state.style}
              btnClick = {this.BtnClick}
            />

            <div className="card-body">
              {/* show login or register form */}
              { this.Switch_component() } 
            </div>
          </div>
        </div>

        <Forgot_btn />
      </div>
    )
  }
}

export default Login_page;


