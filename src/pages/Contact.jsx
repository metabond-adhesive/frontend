import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Name can only contain letters and spaces';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'phone':
        if (value && !/^[+]?[\d\s-()]+$/.test(value)) {
          error = 'Please enter a valid phone number';
        } else if (value && value.replace(/\D/g, '').length < 10) {
          error = 'Phone number must be at least 10 digits';
        }
        break;

      case 'pincode':
        if (value && !/^\d{5,6}$/.test(value)) {
          error = 'PIN code must be 5-6 digits';
        }
        break;

      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('');
      return;
    }

    console.log('Contact form submitted:', form);
    setStatus('Thank you for reaching out! We will get back to you within 24-48 hours.');
    setForm({ name: '', email: '', phone: '', street: '', city: '', state: '', country: '', pincode: '', message: '' });
    setErrors({});
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Whether you have questions about our products, need technical support, or want to explore partnership opportunities.</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="contact-info-grid">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Visit Us</h3>
            <p>Metabond Industries Ltd.<br />
            Plot No. 42, Industrial Estate<br />
            MIDC Area, Thane - 400710<br />
            Maharashtra, India</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Call Us</h3>
            <p><strong>Customer Care:</strong><br />1800-123-4567 (Toll Free)</p>
            <p><strong>Sales Inquiry:</strong><br />+91 22 4567 8900</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email Us</h3>
            <p><strong>General:</strong><br />info@metabond.com</p>
            <p><strong>Support:</strong><br />support@metabond.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon">💬</div>
            <h3>WhatsApp</h3>
            <p>+91 98765 43210</p>
            <p className="info-note">Chat only. Business hours: Mon-Sat, 9 AM - 6 PM IST</p>
          </div>
        </div>

        <div className="business-hours">
          <h3>Business Hours</h3>
          <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
          <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
          <p><strong>Sunday & Public Holidays:</strong> Closed</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <p className="form-subtitle">Fill out the form below and we'll respond as soon as possible</p>
          
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name ? 'error' : ''}
                  placeholder="John Doe"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email ? 'error' : ''}
                  placeholder="john@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={form.phone} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.phone ? 'error' : ''}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="street">Street Address</label>
                <input 
                  type="text" 
                  id="street" 
                  name="street" 
                  value={form.street} 
                  onChange={handleChange}
                  placeholder="123 Main Street"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  value={form.city} 
                  onChange={handleChange}
                  placeholder="Mumbai"
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State / Province</label>
                <input 
                  type="text" 
                  id="state" 
                  name="state" 
                  value={form.state} 
                  onChange={handleChange}
                  placeholder="Maharashtra"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input 
                  type="text" 
                  id="country" 
                  name="country" 
                  value={form.country} 
                  onChange={handleChange}
                  placeholder="India"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pincode">PIN / ZIP Code</label>
                <input 
                  type="text" 
                  id="pincode" 
                  name="pincode" 
                  value={form.pincode} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.pincode ? 'error' : ''}
                  placeholder="400001"
                />
                {errors.pincode && <span className="error-message">{errors.pincode}</span>}
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Your Message *</label>
              <textarea 
                id="message" 
                name="message" 
                value={form.message} 
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.message ? 'error' : ''}
                rows={6}
                placeholder="Tell us how we can help you..."
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Send Message</button>
              {status && <p className="form-status">{status}</p>}
            </div>
          </form>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="social-container">
          <h2>Connect With Us</h2>
          <p>Follow us on social media for product updates, industry insights, and customer success stories</p>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/company/metabond" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon linkedin">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="social-info">
                <h4>LinkedIn</h4>
                <p>Professional Network</p>
              </div>
            </a>

            <a href="https://www.facebook.com/metabond" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon facebook">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </div>
              <div className="social-info">
                <h4>Facebook</h4>
                <p>Community Updates</p>
              </div>
            </a>

            <a href="https://twitter.com/metabond" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon twitter">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </div>
              <div className="social-info">
                <h4>Twitter</h4>
                <p>Latest News</p>
              </div>
            </a>

            <a href="https://www.instagram.com/metabond" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon instagram">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="social-info">
                <h4>Instagram</h4>
                <p>Behind the Scenes</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0' }}>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </main>
  );
}
