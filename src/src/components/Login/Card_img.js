// import logo from './logo.svg';
import '../../css/login_style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';


class Card_img extends Component {
  content = [
    { title: 'Welcome',
      intro: 'Welcome to visit our website \nOn this website, you can discovery very much course you want to learn \nWith modern rate system, you can exactly find out which courses suitable with you',
      question:'Already have accound ?',
      btn: 'Sign In',
      status: 'Sign In'
    },
    { title: 'Hello friend',
      intro: 'Welcome back to our Web site \n have a nice day',
      question:'Do not have account ?',
      btn:'Sign Up',
      status: 'Sign Up'
    }

  ]

  constructor(props){
    super(props);
    this.state = {
    status: 'Sign In',
    title: this.content[0].title,
    intro: this.content[0].intro,
    question: this.content[0].question,
    btn: this.content[0].btn
    }
  }
  

  BtnClick = () =>{
    console.log(this.state.status)
    if (this.state.status === 'Sign In')
      this.setState(this.content[1])
    else
      this.setState(this.content[0])
    
  }

  render() {
      return (
          <div className="card-img-left d-none d-md-flex">
            {/* Background image for card set in CSS! */}
            <h1 id="title" className="mt-5 fs-1 text-center">
              { this.state.title }
            </h1>
            <p id="intro">
              { this.state.intro }
            </p>
            <p id="question">
              { this.state.question }
              click button below            
            </p>
            <input type="button" className="btn btn-lg btn-secondary mx-5 mb-5" id="btn1" onClick={()=>this.BtnClick()} value={this.state.btn} />
          </div>
      );
  }
}
export default Card_img;