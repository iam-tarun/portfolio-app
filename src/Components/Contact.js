import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="grid">
      <h2>Contact Me</h2>
      <p className='leading' >If you have any questions or just want to say hello, feel free to reach out!</p>
      
          <form className="contact-form" action="https://formsubmit.co/6ce71eade72bf5ecb28212c9732e9e99" method="POST">
          <div className="form-group">
            <div>
            <label htmlFor="name">Name</label>
            </div>
            
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <div>
            <label htmlFor="email">Email</label>
            </div>

            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
          <div>
            <label htmlFor="message">Message</label>
          </div>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
        <button className='button' type="submit">Send</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> tarunteja2810@gmail.com</p>
          <p><strong>Phone:</strong> +1 945-274-8346</p>
          <p><strong>Location:</strong> Richardson, TX, US</p>
        </div>
    </section>
  );
};

export default Contact;
