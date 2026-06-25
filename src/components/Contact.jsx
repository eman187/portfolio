// import React, { useState } from 'react';

// export default function Contact() {
//   const [status, setStatus] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus('');
//     setTimeout(() => {
//       setLoading(false);
//       setStatus('EmailJS placeholder connected. Add your EmailJS keys in Contact.jsx to enable real email sending.');
//     }, 1200);
//   };

//   return (
//     <section id="contact" className="section-container py-20">
//       <div className="glass rounded-3xl p-8 md:p-10 grid lg:grid-cols-2 gap-10">
//         <div>
//           <p className="text-blue-300 mb-2">Contact</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Let’s build something amazing</h2>
//           <p className="mt-4 text-soft">Use the form to contact Eman Ajmal for internships, freelance work, collaborations, or project discussions.</p>
//           <p className="mt-4">Email: <span className="text-blue-300">emanajmal187@gmail.com</span></p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input className="w-full rounded-2xl bg-white/10 px-4 py-3 outline-none" placeholder="Name" required />
//           <input className="w-full rounded-2xl bg-white/10 px-4 py-3 outline-none" placeholder="Email" type="email" required />
//           <input className="w-full rounded-2xl bg-white/10 px-4 py-3 outline-none" placeholder="Subject" required />
//           <textarea rows="5" className="w-full rounded-2xl bg-white/10 px-4 py-3 outline-none" placeholder="Message" required />
//           <button className="rounded-full bg-blue-600 px-6 py-3 font-semibold min-w-40">
//             {loading ? 'Sending...' : 'Send Message'}
//           </button>
//           {status && <p className="text-sm text-green-300">{status}</p>}
//         </form>
//       </div>
//     </section>
//   );
// }

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm("service_rv57bli", "template_vwqc2n7", form.current, {
        publicKey: "7lTnIpNnMMSw7oBHd",
      })
      .then(
        () => {
          setLoading(false);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("Failed to send message. Please try again.");
          console.log(error);
        },
      );
  };

  return (
    <section id="contact" className="section-container py-20">
      <div className="glass rounded-3xl p-8 md:p-10 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-blue-300 mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s build something amazing
          </h2>
          <p className="mt-4 text-soft">
            Use the form to contact Eman Ajmal for internships, freelance work,
            collaborations, or project discussions.
          </p>
          <p className="mt-4">
            Email: <span className="text-blue-300">emanajmal187@gmail.com</span>
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="w-full rounded-2xl bg-white/10 px-4 py-3 outline-none"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="w-full rounded-2xl bg-white/10 px-4 py-3 outline-none"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full rounded-2xl bg-white/10 px-4 py-3 outline-none"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="w-full rounded-2xl bg-white/10 px-4 py-3 outline-none"
            required
          />

          <button className="rounded-full bg-blue-600 px-6 py-3 font-semibold min-w-40">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="text-sm text-green-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}
