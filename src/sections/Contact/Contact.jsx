import SectionHeading from "../../components/ui/SectionHeading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Title */}

        <SectionHeading
          number="04"
          label="Contact"
          title="Let's Work Together"
        >
          Have a project, internship opportunity, or just want to
          say hello? I'd love to hear from you.
        </SectionHeading>

        {/* Content */}

        <div className="grid gap-10 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>
    </section>
  );
};

export default Contact;