
'use client';

import { useState } from 'react';
import { siteConfig } from '../lib/config';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
    };

    try {
      const response = await fetch('https://caredaraja.com/api/sendemail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccess(true);

        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full px-6 py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE - INFO */}
        <div className="space-y-8">
          <h2 className="text-4xl text-gray-900 font-bold">Get in Touch</h2>

          <p className="text-gray-600">    We'd love to help you find the right care for your loved one.
                 Contact us to learn more about our homes, services, or
                 schedule a personal tour. </p>

          {/* Owner */}
          <div>
            <p className="text-lg font-semibold text-gray-800">{siteConfig.provider.owner}</p>
            <p className="text-sm text-gray-500">{siteConfig.provider.role}</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            {/* <p className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-rose-900" />
              {siteConfig.afh.address}
            </p> */}

            <p className="flex items-center gap-3">
              <Phone className="text-lg text-[#4F6F52] transition hover:text-[#C89B3C]" />
              <a href={`tel:${siteConfig.provider.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                {siteConfig.provider.phone}
              </a>
            </p>

            <p className="flex items-center gap-3 ">
              <Mail className="text-lg text-[#4F6F52] transition hover:text-[#C89B3C]" />
              <a href={`mailto:${siteConfig.provider.email}`} className="hover:underline">
                {siteConfig.provider.email}
              </a>
            </p>
          </div>

          {/* CTA */}
          <section>
  <h2 className="text-2xl font-bold text-gray-900 mb-2">
   Visit Our Homes
  </h2>

  <div className="flex flex-wrap gap-4">
    <a
      href={`https://maps.google.com/?q=${encodeURIComponent(
        siteConfig.afh.address1
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl bg-[#4F6F52] px-7 py-3.5 font-medium text-white transition hover:bg-[#3D5B43]"
    >
     Pendo AFH 1
    </a>

    <a
      href={`https://maps.google.com/?q=${encodeURIComponent(
        siteConfig.afh.address2
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl bg-[#C89B3C] px-7 py-3.5 font-medium text-white transition hover:bg-[#B3872E]"
    >
     Pendo AFH 2
    </a>
  </div>
</section>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white sm:p-3">
            <div className="grid md:grid-cols-2 gap-6">
              <input suppressHydrationWarning type="text" name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} required className="input" />

              <input suppressHydrationWarning type="text" name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} className="input" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input suppressHydrationWarning type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} className="input" />

              <input suppressHydrationWarning type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required className="input" />
            </div>
           
              <select
                name="home"
                suppressHydrationWarning
                value={formData.home}
                onChange={handleChange}
                className="input w-full"
              >
                <option value="">Select a Home</option>
                <option value="Pendo AFH 1">Pendo AFH 1</option>
                <option value="Pendo AFH 2">Pendo AFH 2</option>
                <option value="Not Sure Yet">Not Sure Yet</option>
              </select>
            <textarea suppressHydrationWarning name="message" placeholder="How can we help you or your loved one?" rows="3" value={formData.message} onChange={handleChange} required className="input" />

            {success && <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-md text-sm">Request sent successfully. We will contact you soon.</div>}
            <button type="submit" disabled={loading} suppressHydrationWarning className="w-full rounded-xl bg-[#4F6F52] py-3.5 font-semibold text-white transition hover:bg-[#3D5B43] disabled:cursor-not-allowed disabled:opacity-60"
                  >
              {loading ? 'Sending...' : 'Request Information'}
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 6px;
          padding: 10px 14px;
          border: 1px solid #e5e7eb;
          outline: none;
          transition: all 0.2s ease;
          color: #1f2937; /* text-gray-800 */
        }

        .input::placeholder {
          color: #6b7280; /* gray-500 */
          opacity: 1; /* removes faded look */
        }

        .input:focus {
          border-color: #3D5B43; /* blue-600 */
          box-shadow: 0 0 0 2px rgba(5, 151, 63, 0.2);
        }
      `}</style>
    </section>
  );
}

