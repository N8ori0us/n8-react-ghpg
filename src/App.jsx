import "./App.css";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <nav>
          <a type="button" onClick={() => setIsOpen(true)} href="#contact">
            Contact
          </a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#certs">Certifications</a>
        </nav>
        <h1>Nathaniel Jackson</h1>
        <h3>Software Developer</h3>
        <p>
          JavaScript, Python, React, Node.js, React Native, MongoDB, PostgreSQL,
          AWS, Azure, GCP, SQL, DevOps, HTML, CSS, unit testing, CI/CD, software
          design and software architecture
        </p>
      </header>
      {!isOpen && <button onClick={() => setIsOpen(true)}>Reach Me</button>}
      <div className="card">
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <Dialog.Panel>
            <form
              id="contact"
              className="contact"
              action="https:formsubmit.co/n8diz1e@gmail.com"
              method="POST"
            >
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="name" required />
              <label htmlFor="message">Message</label>
              <input
                id="message"
                type="textarea"
                name="message"
                placeholder="How can I help you?"
                required
              />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
              <button type="submit" onClick={() => setIsOpen(false)}>
                Send
              </button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </form>
          </Dialog.Panel>
        </Dialog>
        {/* <button onClick={() => setModalOpen(true)}>
          contact 
        </button> */}
      </div>
      <footer></footer>
    </>
  );
}

export default App;
