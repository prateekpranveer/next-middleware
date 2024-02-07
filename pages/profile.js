import React from 'react'
import authMiddleware from '../middlewares/authMiddleware'

const profile = () => {
  return (
    <div className='max-w-sm mx-auto mt-12 text-3xl bg-blue-400 text-white shadow-3xl rounded-xl border p-10'>
        <h1>
            Hi I am the User, and I am Logged In
        </h1>
    </div>
  )
}

export default authMiddleware(profile)