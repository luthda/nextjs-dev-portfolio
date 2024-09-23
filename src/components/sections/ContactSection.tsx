import ContactForm from "@/components/contact/ContactForm"
import ContactInformation from "@/components/contact/ContactInformation"

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="py-8 px-0 sm:py-16 xl:px-16 w-full">
        <h2 className="text-4xl font-bold mb-6 font-serif">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full bg-slate-800 rounded-md">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
