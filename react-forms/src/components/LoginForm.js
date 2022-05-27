import React, { Component } from 'react'

 class LoginForm extends Component {
     state ={
         username : "",
         password : ""
     }

     //Update UserName
     updateUsername = (event) =>{
        this.setState({
            username : event.target.value
        })
     }


     //update Password 
     updatePassword = (event) =>{
         this.setState({
             password : event.target.value
         })
     }

     //Submitting the form 
     loginForm = (event) => {
         event.preventDefault();
         console.log(this.state);
     }

     //Another Way of creating functions
     //name should be same as in the state 
     // if we are giving our own names it will add to the state newly

     updateInput = (event) =>{
         this.setState({
             [event.target.name] : event.target.value
         })


     }

  render() {
    return (
      <React.Fragment>
          <pre>{JSON.stringify(this.state)}</pre>
          <div className='container mt-3'>
              <div className='row'>
                  <div className='col'>
                      <div className='card'>
                          <div className='card-header bg-info'>
                            <p className='h3' >Login Form</p>
                          </div>
                          <div className='card-body'>
                              <form onSubmit={this.loginForm}>
                                  <div className='form-group'>
                                      <input type="text"
                                      value={this.state.username}
                                    //   onChange = {this.updateUsername}
                                    //name ="a"
                                    name ="username"
                                    onChange={this.updateInput}
                                      className='form-control' placeholder='Username'  />
                                  </div>
                                  <div className='form-group'>
                                      <input
                                      name ="password"
                                      value={this.state.password}
                                      //name ="b"
                                    //   onChange={this.updatePassword}
                                    onChange={this.updateInput}
                                      type="password" className='form-control' placeholder='Password'  />
                                  </div>
                                  <div>
                                     <button type='submit' className='btn btn-cyan btn-sm'>Login</button>
                                  </div>
                              </form>

                          </div>
                        
                      </div>

                  </div>

              </div>

          </div>

      </React.Fragment>
    )
  }
}

export default LoginForm