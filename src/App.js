import React from "react";

const App = () => {
  const prof = [
    {name:"Taro" , age:10},
    {name:"Hanako" , age:5},
    {name:"Noname"}
  ]
  return (
    <div>
      {
        prof.map((p,index) =>{
          return <User name = {p.name} age={p.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi! I am {props.name}! and {props.age} years old!</div>
}

User.defaultProps = {
  age : 1
}

export default App;
