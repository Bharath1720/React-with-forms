import React, { Component } from 'react'

 class SMSApplication extends Component {
     state = {
         count : 100
     }

     updateCount = (event) =>{
         this.setState({
             count : 100 - event.target.value.length
         })
     }
  render() {
    return (
      <React.Fragment>
          <div className='container mt-3'>
              <div className='row'>
                  <div className='col'>
                      <div className='card'>
                          <div className='card-header bg-danger text-black'>
                              <p className='h3'>SMS Application </p>
                          </div>
                          <div className='card-body'>
                              <form>
                                  <div className='form-group'>
                                      <textarea maxLength="100" onChange={this.updateCount} rows="4" className='form-control' placeholder='Enter the message'  />
                                  </div>
                              </form>
                          </div>
                          <div className='card-footer'>
                              <p className='h4'>Characters Remaining:
                              <span className='font-weight-bold' >{this.state.count}</span>
                              </p>

                          </div>

                      </div>

                  </div>

              </div>

          </div>
      </React.Fragment>
    )
  }
}
export default SMSApplication