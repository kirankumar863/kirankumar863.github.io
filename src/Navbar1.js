import React from 'react' 
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate=useNavigate();
  return (
    <div className="image">
    <div className="container1">
      <label>user</label>
      <input></input>
      <label>password</label>
      <input></input>
      <label>address</label>
      <input></input>
      <label>ph.no</label>
      <input></input>
      <label>address</label>
      <input></input>
      <button className='registrationbutton' onClick={()=>navigate("/login")}>Register</button>
      
</div>
<div className='paragraphDiv'>
    <p className='paragraph'>
    Paragraphs are the group of sentences combined together, about a certain topic.
     It is a very important form of writing as we write almost everything in paragraphs, be it an answer, 
     essay, story, emails, etc. We can say that a well-structured paragraph is the essence of good writing. 
     The purposes of the paragraph are to give information, to explain something, to tell a story, and to convince
      someone that our idea is right.

    </p>
    <img src='./logo192.png'></img>

</div>
    </div >
  )
}

export default Register;
