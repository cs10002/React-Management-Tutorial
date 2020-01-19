import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';


const customers = [
    {
      'id':0
      ,'image':'https://placeimg.com/64/64/1'
      ,'name' : '연개소문1'
      ,'birthday' :'19180726'
      ,'gender':'막리지'
      ,'job' : '대학생'  
  }
  ,{
    'id':1
    ,'image':'https://placeimg.com/64/64/2'
    ,'name' : '을지문덕2'
    ,'birthday' :'19180726'
    ,'gender':'대장군'
    ,'job' : '대학생'  
  }
  ,{
    'id':2
    ,'image':'https://placeimg.com/64/64/3'
    ,'name' : '이순신'
    ,'birthday' :'19180726'
    ,'gender':'남자'
    ,'job' : '삼군통제사3'  
  }
]


class App extends Component {
  render(){
    return(
      <div>
          {
            customers.map(c=>{
              return(
                <Customer
                    key      = {c.id}
                    id       = {c.id}
                    image    = {c.image}
                    name     = {c.name}
                    birthday = {c.birthday}
                    gender   = {c.gender}
                    job      = {c.job}
                />
              )
            })
          }
      </div>          
    );
  }
}


export default App;
