import emailjs from '@emailjs/browser';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ugkmhxr',
      'template_9vo5pce',
      e.target,
      'h9jYPFft_U1SdHN2p'
    ).then(
      () => {
        alert("Wiadomość wysłana");
      },
      () => {
        alert("Błąd podczas wysyłania");
      }
    );
  }

  return (
    <section className="relative flex items-center c-space section-spacing" id="contact">
      <div className="flex flex-col items-center justify-center max-w-md mx-auto auto-border border-white/10 rounded 2-xl bg-primary">

        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Get in Touch</h2>
          <p className="font-normal text-neutral-400">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <form className="w-full" onSubmit={sendEmail}>

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
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
            Send
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;