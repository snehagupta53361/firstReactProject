import React from 'react'

import "../styles/contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
        <div>
            <h1>Contact Us</h1>
            <form>
            <div>
                <label>Name</label>
                <input type='text' required placeholder='Abc'/>
            </div>


            <div>
                <label>Email</label>
                <input type='email' required placeholder='Abc'/>
            </div>

            <div>
                <label>Message</label>
                <input type='text' required placeholder='Tell Us About You'/>
            </div>

            <button type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact