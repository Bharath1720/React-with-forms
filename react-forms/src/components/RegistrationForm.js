import React, { Component } from 'react'

 class RegistrationForm extends Component {
     state ={
         user :{
             username : "",
             email : "",
             password : ""
         }
     }

     updateInput = (event) =>{
         this.setState({
           user :{
               ...this.state.user,
            [event.target.name] : event.target.value
           }
         })

     }
     registerForm  = (event) =>{
         event.preventDefault();
         console.log(this.state.user)


     }

  render() {
    return (
      <React.Fragment>
          <pre>{JSON.stringify(this.state)}</pre>
          <div className='container mt-3'>
              <div className='row'>
                  <div className='col'>
                      <div className='card'>
                          <div className='card-header btn-orange'>
                              <p className='h3'>Registration Form</p>
                          </div>
                          <div className='card-body'>
                              <form onSubmit={this.registerForm}>
                                  <div className='form-group'>
                                      <input type="text"
                                      name ="username"
                                      onChange={this.updateInput}
                                      value={this.state.user.username}
                                      className='form-control' placeholder='Username'  />
                                  </div>
                                  <div className='form-group'>
                                      <input type="email" 
                                      name ="email"
                                      onChange={this.updateInput}
                                      value={this.state.user.email}
                                      className='form-control' placeholder='Email'  />
                                  </div>
                                  <div className='form-group'>
                                      <input type="password"
                                       name ="password"
                                       onChange={this.updateInput}
                                       value={this.state.user.password}
                                       className='form-control' placeholder='Password'  />
                                  </div>
                                  <div>
                                      <button type='submit' className='btn btn-deep-orange btn-sm' >Register</button>
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

export default RegistrationForm