import styles from "../styles/contact.module.css";
import {useState, useRef} from 'react'

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    function nameHandler(e: any){
        e.preventDefault();
        setName(e.target.value)
    }

    function emailHandler(e: any){
        e.preventDefault();
        setEmail(e.target.value)
    }

    function messageHandler(e: any){
        e.preventDefault();
        setMessage(e.target.value)
    }

    function handleWhatsapp(){
        let whatsappMessage = `Hello, Dolapo! This is a message from a viewer of your Portfolio website, with Name: ${name}, and Email Address: ${email}. This is their message: ${message}.`

        nameRef.current.value = null
        emailRef.current.value = null
        messageRef.current.value = null

        alert(whatsappMessage.replace(/''/g, '%20'))

    }
    

  return (
    <div className={styles.contact} id="contact">
      <h1>Contact Me, Amigo!</h1>
      <div className={styles.contactDiv}>
        <div className={styles.nameDiv}>
          <p>Name</p>
          <input type="text" onChange={nameHandler} ref= {nameRef}/>
        </div>
        <div className={styles.emailDiv}>
          <p>Email</p>
          <input type="email" onChange={emailHandler} ref = {emailRef}/>
        </div>
        <div className={styles.messageDiv}>
          <p>Message</p>
          <textarea onChange={messageHandler} ref= {messageRef}/>
        </div>
        <button className={styles.mailButton}>Send As Email</button>
        <p className={styles.or}>or</p>
        <button className={styles.whatsappButton} onClick = {handleWhatsapp}>Send Via Whatsapp</button>
      </div>
    </div>
  );
}

export default Contact;
