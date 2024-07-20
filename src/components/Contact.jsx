import React, { useState } from "react";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const telegramTokenBot = "6913787807:AAFBNLiHn-ysNkKEh-bCjIiWCwBDIiqdVLY";
  const chatId = "6726160029";

  const messages = {
    loading: "Loading...",
    success: "Thank you for reaching out! Your message has been successfully sent. I appreciate your contact and will get back to you shortly.",
    failure: "Something went wrong"
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage(messages.loading);

    const formData = new FormData(event.target);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    try {
      const response = await fetch(`https://api.telegram.org/bot${telegramTokenBot}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: `
          Full Name: ${object.name},
          Email: ${object.email},
          Message: ${object.message}
          `
        }),
      });

      if (response.ok) {
        setStatusMessage(messages.success);
        event.target.reset();
      } else {
        setStatusMessage(messages.failure);
      }
    } catch (error) {
      setStatusMessage(messages.failure);
    } finally {
      setTimeout(() => {
        setStatusMessage("");
      }, 10000);
    }
  };

  return (
    <section id="contact" className="pt-20 pb-20 box-shadow-small">
      <div className="container-custom">
        <h2 className="text-5xl text-center mb-10 text-white" data-aos="fade-down">Contact</h2>
        <form className="w-[825px] m-auto" onSubmit={handleSubmit}>
          <div className="flex mb-5">
            <div className="relative mb-4 form-group">
              <input className="form-input focus:outline-none" type="text" id="name" name="name" required data-aos="fade-right"/>
              <label className="form-label" htmlFor="name">Full Name</label>
            </div>
            <div className="relative mb-4 form-group">
              <input className="form-input focus:outline-none" type="email" id="email" name="email" required data-aos="fade-left"/>
              <label className="form-label" htmlFor="email">Email</label>
            </div>
          </div>
          <div className="relative mb-4 form-group">
            <textarea className="form-textarea focus:outline-none" id="textarea" rows="4" name="message" placeholder="Your message here — whether it’s about a potential project, a question, or just to say hello!" required data-aos="fade-up"></textarea>
            <label className="form-label" htmlFor="textarea">Message</label>
          </div>
          <button type="submit" className="button button-block text-white" data-aos="fade-up">Send message</button>
        </form>
        {statusMessage && <p className="text-center text-white mt-4">{statusMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
