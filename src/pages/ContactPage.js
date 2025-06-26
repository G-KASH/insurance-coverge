import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/global.css';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [chatInput, setChatInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    const userMessage = { from: 'user', text: chatInput };
    const botReply = {
      from: 'bot',
      text: "Thank you for reaching out. We'll get back to you shortly!"
    };
    setChatLog([...chatLog, userMessage, botReply]);
    setChatInput('');
  };

  return (
    <div className="contact-page" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('/images/pexels-mart-production-7709130.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '100px 20px',
          color: 'white',
          textAlign: 'center',
          position: 'relative'
        }}
        data-aos="fade-up"
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 1
          }}
        ></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1>Contact Us</h1>
          <p>We're here to help you with any inquiries or assistance you need.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="contact-form-section"
        data-aos="fade-up"
        style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Send Us a Message</h2>
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          style={{ maxWidth: '600px', margin: '0 auto', display: 'grid', gap: '15px' }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.name && <span style={errorStyle}>{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.email && <span style={errorStyle}>{errors.email}</span>}

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.subject && <span style={errorStyle}>{errors.subject}</span>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            style={inputStyle}
          ></textarea>
          {errors.message && <span style={errorStyle}>{errors.message}</span>}

          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </section>

      {/* Chat Section */}
      <section
        style={{
          padding: '60px 20px',
          backgroundColor: '#fff',
          maxWidth: '600px',
          margin: '0 auto',
        }}
        data-aos="fade-up"
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Live Chat</h2>
        <div style={chatBoxStyle}>
          {chatLog.map((msg, i) => (
            <div key={i} style={msg.from === 'user' ? userMsg : botMsg}>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <input
            type="text"
            placeholder="Type your message..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            style={{ flex: 1, ...inputStyle }}
          />
          <button onClick={sendChatMessage} style={buttonStyle}>Send</button>
        </div>
      </section>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const errorStyle = {
  color: 'red',
  fontSize: '0.9rem',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#0d6efd',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const chatBoxStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  borderRadius: '5px',
  maxHeight: '300px',
  overflowY: 'auto',
  backgroundColor: '#f1f1f1',
};

const userMsg = {
  textAlign: 'right',
  backgroundColor: '#cce5ff',
  padding: '8px',
  borderRadius: '10px',
  margin: '5px 0',
  maxWidth: '70%',
  alignSelf: 'flex-end',
};

const botMsg = {
  textAlign: 'left',
  backgroundColor: '#e2e3e5',
  padding: '8px',
  borderRadius: '10px',
  margin: '5px 0',
  maxWidth: '70%',
  alignSelf: 'flex-start',
};

export default ContactPage;
