import React from 'react'
import MyProfile from './Profile/MyProfile'
import  './Profile/style.css';
import Myimage from "./Profile/photo-hamma.jpg"
 function App() {

  let myName = "Mohamed amine"
  let myBio = "hello"
  let myPicture = "picture"
  const myAlert = ()=>{
    alert("je suis hamma kchaou un etudient en develloppement web")
  }
  console.log(Myimage);
  return (
    <div>
    <MyProfile myName={myName} myBio={myBio} myAlert={myAlert}>{Myimage}</MyProfile>
    </div>
    
  
  )
}
export default App