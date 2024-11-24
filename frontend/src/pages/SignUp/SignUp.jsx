import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput'
import { Link } from 'react-router-dom'
import { validEmail } from '../../utils/Helper'

const SignUp = () => {

  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSignUp = (e) =>{
    e.preventDefault()
    if(name.trim().length===0){
      setError("Please give a name for the user")
      return
    }
    if(!validEmail(email)){
      setError('Please enter a valid email address')
      return
    }
    if(password.trim().length===0){
      setError('Please enter a valid password')
      return
    }
    setError(null)
    // api call for sign up
  }

  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center mt-28'>
      <div className='w-96 border rounded bg-white px-7 py-10'>
        <form onSubmit={(e)=>{handleSignUp(e)}}>
          <h4 className='text-2xl mb-7'>Sign Up</h4>

          <input type='text' placeholder='name' className='input-box mb-3' value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <input type='text' placeholder='email' className='input-box' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <PasswordInput value={password} onChange={(e)=>setPassword(e.target.value)} />

          {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

          <button type='submit' className='btn-primary'>Sign Up</button>
          <p className='text-sm text-center mt-4'>
            Already Registerd? {" "} &nbsp; 
          <Link to="/login" className='font-medium text-primary underline'>Login</Link>
          </p>

        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp