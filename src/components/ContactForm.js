import { useRef } from "react";

const ContactForm = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    alert(JSON.stringify(data) + " Data submitted!");
  };

  return (
    <>
      <h2>Contact Form</h2>
      <form>
        <label htmlFor="name">Name: </label>
        <br></br>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          ref={nameRef}
        />
      </form>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        placeholder="example@corp.com"
        ref={emailRef}
      />
      <label htmlFor="message">Message:</label>
      <textarea placeholder="Message" name="message" ref={messageRef} />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Send
      </button>
    </>
  );
};

export default ContactForm;
