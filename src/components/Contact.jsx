import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>CONTACT US</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Enter Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="Enter Email" />
          </div>
          <div>
            <label>Message</label>
            <input type="text" required placeholder="Message..." />
          </div>
          <button type="submit">SEND</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
