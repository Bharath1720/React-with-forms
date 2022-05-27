import React, { Component } from 'react'

 class ChangeSelectBox extends Component {
     state ={
         option : ""
     }

     updateOption = (event) =>{
         this.setState({
             option : event.target.value
         })
     }


  render() {
    return (
      <React.Fragment>
         <div className='container mt-3'>
             <div className='row'>
                 <div className='col'>
                    <div className='card'>
                        <div className='card-header bg-primary text-white'>
                            <p className='h3'>Change Select Box</p>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col'>
                                    <form>
                                        <div className='form-group'>
                                            <select className='form-control' onChange={this.updateOption} >
                                                <option value="">Select an Option</option>
                                                <option value="React Js">React</option>
                                                <option value="Angular Js">Angular</option>
                                                <option value="Vue Js">Vue</option>
                                                <option value="Mern">Mern</option>
                                            </select>

                                        </div>
                                    </form>
                                </div>
                                <div className='col'>
                                   <p>{this.state.option}</p> 
                                </div>

                            </div>

                        </div>
                    </div>
                 </div>

             </div>

         </div>
      </React.Fragment>
    )
  }
}
export default ChangeSelectBox