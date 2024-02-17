import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./HomePage.css"

function HomePage() {
    // const navigate=useNavigate()
    

  return (
    <div className='homepage'>
        <div className='homepage2'>
            <Link className='link ' to= {"/home"}> home</Link>
            <Link className='link ' to= {"/login"}> about</Link>
            <Link className='link ' to= {"/login"}> contact</Link>
            <Link className='link ' to= {"/login"}> skills</Link>
            <Link className='link ' to= {"/login"}> login</Link>

        </div>
        <div className='blogs'>
            <h1>Blogs</h1>
        </div>
      
    </div>
  )
}

export default HomePage
