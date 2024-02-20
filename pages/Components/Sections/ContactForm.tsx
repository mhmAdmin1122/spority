import React from 'react'

const ContactForm = () => {
  return (
    <form className='contact-form-section-spority'>
      <input type="text" placeholder='Full Name' />
      <input type="email" placeholder='Email' />
      <input type="tel" placeholder='Phone Number' />
      <input type="text" placeholder='Subject' />
      <textarea placeholder='Message' cols={30} rows={10} />
      <button className='contact-btn-form-spority' type='submit'>Contact</button>
    </form>
  )
}

export default ContactForm
