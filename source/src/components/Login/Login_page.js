// import logo from './logo.svg';
import '../../css/login_style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {witch_log} from './login_script'
//import Switch_log from './Switch_log';
//import Login from './Login';
import Register from './Register';
import Card_img from './Card_img';
//import Create_info from './Create_info';

function Login_page() {

  return (
    <div>
     <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-12 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              {/* Welome */}
              
              <Card_img 
                // title = {content[0].title}
                // intro = {content[0].intro}
                // question = {content[0].questiony}
              
              />
              <Register />
              {/* <Login /> */}
              {/* <Create_info /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login_page;


