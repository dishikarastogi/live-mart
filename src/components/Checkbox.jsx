/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{ Component } from "react"

var roleData;
class Checkbox extends Component{
    constructor(props){
        super(props)
        this.state={
            roles: [
                {id: 1, value: "Customer", isChecked: false},
                {id: 2, value: "Retailer", isChecked: false},
                {id: 3, value: "Wholesaler", isChecked: false}
              ]
        }
    }

    render(){

        const handleClick = (event) => {
            let roles = this.state.roles
            roles.forEach(role => {
               if (role.value === event.target.value)
               {
                  role.isChecked =  !role.isChecked;
                  if(role.isChecked===true)
                    roleData=role.value;
                    console.log(roleData);
               }
                    
            })
            this.setState({roles: roles});
            
        }
        return  <form>
        <a className='dropdown-item'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='1'
              value="Customer"
              onClick={handleClick}
            />
            <label
              className='custom-control-label'
              for='1'>
              Customer
            </label>
          </div>
        </a>
        <a className='dropdown-item' href='#'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              onClick={handleClick}
              value="Retailer"
              id='2'
              
            />
            <label
              className='custom-control-label'
              for='2'>
              Retailer
            </label>
          </div>
        </a>
        <a className='dropdown-item' href='#'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              value="Wholesaler"
              id='3'
              onClick={handleClick}
              
            />
            <label
              className='custom-control-label'
              for='3'>
              Wholesaler
            </label>
          </div>
        </a>
      </form>
    }
}

export default Checkbox 
export { roleData }