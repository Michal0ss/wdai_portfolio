
const Contact = () => {
  return <section className="relative flex items-center c-space section-spacing">
    <div className="flex flex-col items-center justify-center max-w-md mx-auto auto-border border-white/10 rounded 2-xl bg-primary">
      <div className="flex flex-col items-start w-full gap-5 mb-10">
        <h2 className="text-heading">Get in Touch</h2>
        <p className="font-normal text-neutral-400">Feel free to reach out for collaborations or just a friendly hello!</p>
      </div>
      <form className="w-full">
        <div className="mb-5">
          <label htmlFor="name" className="feild-label">
            Full Name
          </label>
          <input id="name" name="name" type="text" className="field-input field-input-focus" 
          placeholder="Michal Bialas" autoComplete="name" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="feild-label">
            Email
          </label>
          <input id="email" name="email" type="text" className="field-input field-input-focus" 
          placeholder="michalBialas@example.com" autoComplete="email" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="feild-label">
            Message
          </label>
          <textarea id="message" name="message" rows="4" className="field-input field-input-focus" 
          placeholder="Your message here..." autoComplete="off" required/>
        </div>
        <button className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">Send</button>
      </form>
    </div>
  </section>
}

export default Contact