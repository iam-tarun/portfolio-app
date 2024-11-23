import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>If you have any questions or just want to say hello, feel free to reach out!</p>
      
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" action="https://formsubmit.co/your-email" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> tarunteja2810@gmail.com</p>
          <p><strong>Phone:</strong> +1 945-274-8346</p>
          <p><strong>Location:</strong> Richardson, TX, US</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
