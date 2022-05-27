import React, { Component } from 'react'

 class ShowPassword extends Component {
     state ={
         inputType : "password"
     }

     updateShowPass = (event) =>{
         (this.state.inputType === "password") ? this.setState({
             inputType : "text"
         }) : this.setState({
             inputType : "password"
         })
     }

  render() {
    return (
      <React.Fragment>
          <div className='container mt-3'>
              <div className='row'>
                  <div className='col'>
                      <div className='card'>
                          <div className='card-header bg-dark text-white'>
                              <p className='h3'>Show Password</p>
                          </div>
                          <div className='card-body'>
                              <form>
                              <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                    <input onChange={this.updateShowPass} type="checkbox" aria-label="Checkbox for following text input"/>
                                    </div>
                                </div>
                                <input type={this.state.inputType} class="form-control" aria-label="Text input with checkbox"/>
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
export default ShowPassword