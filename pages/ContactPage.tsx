import React, { useState } from 'react';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      tempErrors.name = 'Name is required.';
    }
    if (!formData.email) {
      isValid = false;
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      tempErrors.email = 'Email is not valid.';
    }
    if (!formData.message) {
      isValid = false;
      tempErrors.message = 'Message is required.';
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h1 className="text-5xl font-extrabold text-secondary">Get In Touch</h1>
            <p className="mt-4 text-lg text-gray-600">We'd love to hear from you. Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.</p>
          </AnimatedSection>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <AnimatedSection>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-secondary mb-6">Send us a message</h2>
              {isSubmitted && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
                  <p className="font-bold">Success!</p>
                  <p>Your message has been sent. We'll get back to you shortly.</p>
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`}></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <div>
                    <Button type="submit" fullWidth>Send Message</Button>
                  </div>
                </div>
              </form>
            </div>
          </AnimatedSection>
          {/* Contact Info */}
          <AnimatedSection delay={150}>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Contact Information</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="mt-1 flex-shrink-0 h-6 w-6 text-primary">&#x1F4CD;</span>
                    <span className="ml-3">
                      <strong className="block text-gray-800">Address:</strong> 123 Market St, New York, NY 10001
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 flex-shrink-0 h-6 w-6 text-primary">&#x2709;</span>
                    <span className="ml-3">
                      <strong className="block text-gray-800">Email:</strong> contact@skylinerealty.com
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 flex-shrink-0 h-6 w-6 text-primary">&#x1F4DE;</span>
                    <span className="ml-3">
                      <strong className="block text-gray-800">Phone:</strong> +1 (234) 567-890
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4">Business Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                      <li className="flex justify-between"><span>Monday - Friday:</span> <strong>9:00 AM - 6:00 PM</strong></li>
                      <li className="flex justify-between"><span>Saturday:</span> <strong>10:00 AM - 4:00 PM</strong></li>
                      <li className="flex justify-between"><span>Sunday:</span> <strong>Closed</strong></li>
                  </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
