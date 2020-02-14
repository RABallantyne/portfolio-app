import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        `gmail`,
        `contact_portfolio`,
        e.target,
        `user_4DgMKGqJscoo7Q4S1HIwG`
      )
      .then(
        result => {
          if (result.text === 'OK') {
            alert('Thank you for your message');
          }
        },
        error => {
          console.log(error.text);
        }
      );
    document.querySelector('.contact-form').reset();
  };
  return (
    <>
      <h1 className='large text-primary'>Contact me</h1>
      <div className='icons'>
        <a
          href='mailto:RABallantyne@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i class='fas fa-envelope-square fa-2x'></i>
        </a>
        <a
          href='https://github.com/RABallantyne/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i class='fab fa-github-square fa-2x'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/rob-ballantyne-73b66b45/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i class='fab fa-linkedin fa-2x'></i>
        </a>
      </div>

      <p className='lead'>Write me a message:</p>

      <form className='contact-form' onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name' />
        <label>Email</label>
        <input type='email' name='user_email' />
        <label>Message</label>
        <textarea name='message' />
        <input className='btn btn-light' type='submit' value='Send' />
      </form>
    </>
  );
}
