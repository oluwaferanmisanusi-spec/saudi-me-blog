import ContactForm from "../component/ContactForm";

export default function ContactPage() {
  return (
    <div className="my-0 mx-auto ">
      <div className="border-b-2 border-[#dedede]">
        <div className=" px-[8.125rem] mx-w-[1400px] max-xl:px-[5rem]">
          <div className="py-15  text-center">
            <h2 className="font-bold text-5xl text-[#121212] max-xl:text-4xl">Contact Us</h2>
            <p className="font-normal text-lg text-[#121212] pt-5 ">
              Lorem ipsum dolor sit amet, conseactetur adipiscing elit. Morbi
              pretium varius nulla ac rhoncus. Nulla mattis pretium leo a
              posuere.
            </p>
          </div>
        </div>
      </div>

      <div className="py-[45px] px-[8.125rem] mx-w-[1400px] max-xl:px-[5rem]">
        <ContactForm />
      </div>
    </div>
  );
}
