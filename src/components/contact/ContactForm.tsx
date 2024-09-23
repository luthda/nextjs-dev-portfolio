const ContactForm = () => {
  return (
    <div className="p-4 lg:p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
      <form className="flex flex-col space-y-4 text-white">
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded-md bg-slate-800 border border-white/[0.2]"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-md bg-slate-800 border border-white/[0.2]"
        />
        <input
          type="text"
          placeholder="Subject"
          className="p-3 rounded-md bg-slate-800 border border-white/[0.2]"
        />
        <textarea
          placeholder="Message"
          className="p-3 rounded-md bg-slate-800 border border-white/[0.2] h-32"
        />
        <button
          type="submit"
          className="p-3 rounded-md hover:bg-gray-200 hover:text-slate-800 transition border border-white/[0.2] hover:border-transparent"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
