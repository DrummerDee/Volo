import React from 'react'
import MenuBar from '../components/MenuBar'

const Settings = () => {
  return (
    <>
        <MenuBar/>
            <h1> Settings </h1>
            <div> 
                <label htmlFor='avatar-img'> Update Icon </label>
                </div>
            <div> 
                <label htmlFor='update-username'> Update Username </label>
                <input type='text' name='update-username'/>
                <button> Update Username </button>
            </div>
            <div>
                <label htmlFor='update-password'> Update Password </label>
                <input type='text' name="update-password" id="" />
                <button> Change Password </button>
                </div>
                <div>
                    <label htmlFor='change-email'> Update Email </label>
                    <input type='email' name="update-email" id="" />
                    <button> Change Email </button>
                </div>
                <button> Delete Account </button>
    </>
  )
}

export default Settings