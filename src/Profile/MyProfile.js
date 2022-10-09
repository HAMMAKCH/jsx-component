import React from 'react'

const MyProfile = (props) => {
    console.log(props);
  return (
    <div>
        <h1 className='MyProfile'>{props.myBio}, my name is {props.myName}</h1>
        <br></br> <br></br>
        <button onClick={props.myAlert} className="button">click me </button> <br>
        </br> <br></br>
        <img className="Myimg" src= {props.children} alt="photo" />
    </div>
  )
}

export default MyProfile