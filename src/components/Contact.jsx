import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pt-20 pb-20 box-shadow-small">
      <div className="container-custom">
        <h2 className="text-5xl text-center mb-10 text-white">Contact</h2>
        <form className="w-[825px] m-auto">
          <div className="flex mb-5">
            <div className="relative mb-4 form-group">
              <input className="form-input focus:outline-none" type="text" id="name" required />
              <label className="form-label" htmlFor="name">Full Name</label>
            </div>
            <div className="relative mb-4 form-group">
              <input className="form-input focus:outline-none" type="email" id="email" required />
              <label className="form-label" htmlFor="email">Email</label>
            </div>
          </div>
          <div className="relative mb-4 form-group">
            <textarea className="form-textarea focus:outline-none" id="textarea" rows="4" placeholder="Your message here — whether it’s about a potential project, a question, or just to say hello!" required></textarea>
            <label className="form-label" htmlFor="textarea">Message</label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
