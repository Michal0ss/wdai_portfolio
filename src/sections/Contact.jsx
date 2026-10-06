import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { mySocials } from '../constants';

const linkedIn = mySocials.find((social) => social.name === 'Linkedin');

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const pageLoadTimeRef = useRef(Date.now());

  const MIN_FILL_TIME_MS = 4000;
  const SUBMIT_COOLDOWN_MS = 60000;
  const SUBMIT_STORAGE_KEY = 'contact_last_submit_at';

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;

    const form = e.target;
    const formData = new FormData(form);

    // Honeypot field - bots often fill every input.
    if (String(formData.get('company') || '').trim().length > 0) {
      return;
    }

    // Very fast submit is usually automated traffic.
    if (Date.now() - pageLoadTimeRef.current < MIN_FILL_TIME_MS) {
      alert('Poczekaj chwilę i spróbuj ponownie.');
      return;
    }

    const lastSubmitAt = Number(localStorage.getItem(SUBMIT_STORAGE_KEY) || 0);
    if (Date.now() - lastSubmitAt < SUBMIT_COOLDOWN_MS) {
      alert('Odczekaj chwilę przed kolejną wiadomością.');
      return;
    }

    const userName = String(formData.get('user_name') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (userName.length < 2 || message.length < 10) {
      alert('Uzupełnij poprawnie formularz.');
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        'service_ugkmhxr',
        'template_9vo5pce',
        form,
        'h9jYPFft_U1SdHN2p'
      );

      localStorage.setItem(SUBMIT_STORAGE_KEY, String(Date.now()));
      alert('Wiadomość wysłana');
      form.reset();
      pageLoadTimeRef.current = Date.now();
    } catch {
      alert('Błąd podczas wysyłania');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="relative pb-20 mt-8 c-space md:mt-12" id="contact">
      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Get in Touch</h2>
          <p className="font-normal text-neutral-400">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-5">
        <form className="w-full md:col-span-3" onSubmit={sendEmail}>
          <input
            type="text"
            name="company"
            autoComplete="off"
            tabIndex="-1"
            className="hidden"
            aria-hidden="true"
          />

          <div className="mb-5">
            <label className="feild-label">Full Name</label>
            <input name="user_name" type="text"
              className="field-input field-input-focus"
              placeholder="Michal Bialas"
              required />
          </div>

          <div className="mb-5">
            <label className="feild-label">Email</label>
            <input name="user_email" type="email"
              className="field-input field-input-focus"
              placeholder="michal@example.com"
              required />
          </div>

          <div className="mb-5">
            <label className="feild-label">Message</label>
            <textarea name="message" rows="4"
              className="field-input field-input-focus"
              placeholder="Your message here..."
              required />
          </div>

          <button type="submit"
            disabled={isSending}
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
            {isSending ? 'Sending...' : 'Send'}
          </button>

        </form>

        <a
          href={linkedIn.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-5 p-6 border md:col-span-2 rounded-2xl border-white/10 bg-gradient-to-b from-storm to-indigo hover-animation"
        >
          <div className="flex items-center justify-center rounded-xl size-14 bg-[#0A66C2]">
            <img src={linkedIn.icon} alt="LinkedIn" className="size-7" />
          </div>
          <div>
            <p className="text-xl font-medium">Michał Białas</p>
            <p className="mt-1 text-sm text-neutral-400">
              Backend Developer at Incat · CS student at AGH
            </p>
          </div>
          <p className="text-neutral-400">
            Prefer LinkedIn? Connect with me or send me a message there.
          </p>
          <span className="inline-flex items-center gap-1 font-medium text-white">
            View my LinkedIn
            <img src="assets/arrow-up.svg" className="size-4" />
          </span>
        </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;