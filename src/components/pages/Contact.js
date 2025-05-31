import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

//  import EmailJS
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import AnimatedLetters from '../AnimatedLetters';
import './Contact.css';
// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';


export default function Contact() {
  // const [letter, setLetter] = useState();

  // Implimenting EmailJS in React
  const form = useRef();
  const sendEmail = e => {
    // e.preventDefault();

    emailjs
      .sendForm(
        'service_pyc4693',
        'template_6xidmwh',
        form.current,
        // {
        //   from_name: name,
        //   from_email: email,
        //   message: message,
        //   subject: subject,
        // },
        'MV5a-rndSv5x-CHHQ',
      )
      .then(
        result => {
          console.log('SUCCESS!', result.status, result.text);
          setSuccessMessage('Email was sent!');
          // window.location.reload(false);
          // alert(`Hello ${name}`);

          // If everything goes according to plan, we want to clear out the input after a successful registration.
          setName('');
          setSubject('');
          setEmail('');
          setMessage('');
        },
        error => {
          console.log(
            'FAILED to send the message, please try again',
            error.text,
          );
          setErrorMessage('FAILED to send the message.');
        },
      );
  };
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = e => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'subject') {
      setSubject(inputValue);
    } else setMessage(inputValue);
  };

  const handleFormSubmit = e => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    // if (!checkPassword(password)) {
    //   setErrorMessage(`Choose a more secure password for the account: ${name}`);
    //   return;
    // }
    sendEmail();
  };

  return (
    <>
      {/* <div>
        <h1>Contact Page</h1>
      </div> */}
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="contact-title">Contact Page</h1>

          {/* <section id="contact-me" class="contact-me"> */}
            {/* <h2>Contact </h2> */}

            <ul class="contact-items">
              <li class="phone"> <strong><FontAwesomeIcon
              icon={faPhone}
              color="#6d6d6e"
              className="anchor-icon"
            />
            {/* <span>&#x2706;</span> */}
            </strong>
                <a href='tel:646-416-3914'> 1 646 416 3914 </a> </li>

              <li class="email">
                <strong><FontAwesomeIcon
              icon={faEnvelope}
              color="#6d6d6e"
              className="anchor-icon"
            /> </strong> <i class="fa-solid fa-envelope"></i>
                <a href="mailto:IrakliEradzeG@Gmail.com"> 
                
              IrakliEradzeG@Gmail.com 
             </a>
              </li>
              <li class="linkedin">
                <strong><FontAwesomeIcon
              icon={faLinkedin}
              color="#6d6d6e"
              className="anchor-icon"
            /> </strong>
                <a href="https://www.linkedin.com/in/irakli-eradze/" target="_blank">LinkedIn</a>
              </li>
              <li class="github">
                <strong><FontAwesomeIcon
              icon={faGithub}
              color="#6d6d6e"
              className="anchor-icon"
            /> </strong>
                <a href="https://github.com/ikaera?tab=repositories" target="_blank">GitHub</a>
              </li>
            </ul>
          {/* </section> */}

          {/* <p>I am interested in an opportunity in Web Development.</p> */}
          {successMessage && (
            <div>
              <p className="success-text">{successMessage}</p>
            </div>
          )}
          <div className="contact-form-el">
            <form
              id="my-form"
              className="form"
              ref={form}
              onSubmit={handleFormSubmit}
            >
              <input
                className="contact-half"
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="contact-half"
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                required
              />

              <input
                className="contact-li"
                placeholder="Subject"
                value={subject}
                onChange={handleInputChange}
                type="text"
                name="subject"
                required
              />
              <textarea
                className="contact-textarea"
                value={message}
                placeholder="Message"
                onChange={handleInputChange}
                name="message"
                required
              ></textarea>

              {/* <input
                value={password}
                name="password"
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
              /> */}
              {/* <button type="button" onClick={handleFormSubmit}>
                Submit
              </button> */}
              <input
                type="submit"
                className="contact-flat-button"
                value="SEND"
              // onClick={handleFormSubmit}
              />
            </form>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
