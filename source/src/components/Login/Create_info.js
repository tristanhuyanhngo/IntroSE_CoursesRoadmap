// import logo from './logo.svg';
import '../../css/login_style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Switch_log from './Switch_log';


function Create_info() {
    return (
        <div className="card-body">
                <h5 className="card-title text-center mb-5 font-weight-bold fs-1">Create your information</h5>
                <form>
                  <div className="input-group mb-3 rounded-3">
                    <span class="input-group-text"> 
                        @
                    </span>
                    <div className="form-floating">
                      <input type="text" className="form-control form-control-lg" id="floatingInputUsername" placeholder="username" required autoFocus />
                      <label htmlFor="floatingInputUsername">Username</label>
                    </div>
                  </div>
                 
                  <hr />
                    <label for="birthday">Birthday</label>
                    <div class="input-group">
                        <span class="input-group-text">
                            <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <input data-datepicker="" class="form-control" id="birthday" type="text" placeholder="dd/mm/yyyy" required />
                    </div>
                </form>
              </div>
    );
}

export default Create_info;