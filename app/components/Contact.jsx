// "use client";

// import { useState } from "react";
// import { Phone, Mail } from "lucide-react";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     home: "",
//     message: "",
//   });

//   const inputClass =
//     "w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-gray-800 placeholder:text-gray-500 outline-none transition focus:border-[#4F6F52] focus:ring-2 focus:ring-[#4F6F52]/20";

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setSuccess(false);

//     // TODO: Call your API here

//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);

//       setFormData({
//         firstName: "",
//         lastName: "",
//         phone: "",
//         email: "",
//         home: "",
//         message: "",
//       });

//       setTimeout(() => setSuccess(false), 3000);
//     }, 1000);
//   };
//   return (
//     <>
//       <section id="contact" className="bg-white py-12">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="grid items-stretch gap-12 lg:grid-cols-2">
//             {/* LEFT */}
//             <div className="flex h-full flex-col justify-between">
//               <div>
//                 <p className="text-sm font-semibold uppercase tracking-[4px] text-[#4F6F52]">
//                   Contact Us
//                 </p>

//                 <h2 className="mt-4 text-5xl font-bold leading-tight text-[#252525]">
//                   Get in Touch
//                 </h2>

//                 <p className="mt-5 max-w-md text-lg leading-8 text-gray-600">
//                   We'd love to help you find the right care for your loved one.
//                   Contact us to learn more about our homes, services, or
//                   schedule a personal tour.
//                 </p>

//                 {/* Provider */}
//                 <div className="mt-8">
//                   <h3 className="text-2xl font-semibold text-[#252525]">
//                     Pendo AFH
//                   </h3>

//                   <p className="mt-1 text-gray-500">Adult Family Home</p>
//                 </div>

//                 {/* Contact Info */}
//                 <div className="mt-8 space-y-4">
//                   <div className="flex items-center gap-4">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF4EF]">
//                       <Phone className="h-5 w-5 text-[#4F6F52]" />
//                     </div>

//                     <a
//                       href="tel:+12065551234"
//                       className="text-lg text-gray-700 transition hover:text-[#4F6F52]"
//                     >
//                       (206) 555-1234
//                     </a>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF4EF]">
//                       <Mail className="h-5 w-5 text-[#4F6F52]" />
//                     </div>

//                     <a
//                       href="mailto:info@pendoafh.com"
//                       className="text-lg text-gray-700 transition hover:text-[#4F6F52]"
//                     >
//                       info@pendoafh.com
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom */}
//               <div className="mt-12">
//                 <h3 className="mb-5 text-2xl font-bold text-[#252525]">
//                   Visit Our Homes
//                 </h3>

//                 <div className="flex flex-wrap gap-4">
//                   <a
//                     href="#"
//                     className="rounded-xl bg-[#4F6F52] px-7 py-3.5 font-medium text-white transition hover:bg-[#3D5B43]"
//                   >
//                     Pendo AFH 1
//                   </a>

//                   <a
//                     href="#"
//                     className="rounded-xl bg-[#C89B3C] px-7 py-3.5 font-medium text-white transition hover:bg-[#B3872E]"
//                   >
//                     Pendo AFH 2
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="h-full rounded-[32px] border border-gray-100 bg-white p-8 shadow-lg">
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid gap-5 md:grid-cols-2">
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />

//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div className="grid gap-5 md:grid-cols-2">
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>

//                 <select
//                   name="home"
//                   value={formData.home}
//                   onChange={handleChange}
//                   className={inputClass}
//                 >
//                   <option value="">Select a Home</option>
//                   <option value="Pendo AFH 1">Pendo AFH 1</option>
//                   <option value="Pendo AFH 2">Pendo AFH 2</option>
//                   <option value="Not Sure Yet">Not Sure Yet</option>
//                 </select>

//                 <textarea
//                   rows={5}
//                   name="message"
//                   placeholder="How can we help you or your loved one?"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className={`${inputClass} resize-none`}
//                 />

//                 {success && (
//                   <div className="rounded-xl border border-green-300 bg-green-100 px-4 py-3 text-sm text-green-800">
//                     Request sent successfully. We will contact you soon.
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full rounded-xl bg-[#4F6F52] py-3.5 font-semibold text-white transition hover:bg-[#3D5B43] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? "Sending..." : "Request Information"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
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
//                   Contact us to learn more about our homes, services, or
//                   schedule a personal tour. </p>

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
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-3 ">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} required className="input" />

              <input type="text" name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} className="input" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} className="input" />

              <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required className="input" />
            </div>
           
              <select
                name="home"
                value={formData.home}
                onChange={handleChange}
                className="input w-full"
              >
                <option value="">Select a Home</option>
                <option value="Pendo AFH 1">Pendo AFH 1</option>
                <option value="Pendo AFH 2">Pendo AFH 2</option>
                <option value="Not Sure Yet">Not Sure Yet</option>
              </select>
            <textarea name="message" placeholder="How can we help you or your loved one?" rows="3" value={formData.message} onChange={handleChange} required className="input" />

            {success && <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-md text-sm">Request sent successfully. We will contact you soon.</div>}
            <button type="submit" disabled={loading}className="w-full rounded-xl bg-[#4F6F52] py-3.5 font-semibold text-white transition hover:bg-[#3D5B43] disabled:cursor-not-allowed disabled:opacity-60"
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

