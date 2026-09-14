import Image from "next/image";
import FAQAccordion from "./component/Faq";

export default function Home() {
  return (
    <div>
      <div className="my-0 mx-auto flex justify-center">
        <div className="flex   max-w-[1400px] pb-[40px] px-[8.125rem] max-xl:px-[5rem] max-lg:flex-col-reverse">
          <div className="content-center ">
            <p className="text-brand-secondary text-lg font-bold pb-[0.625rem] max-lg:text-center">
              Saudi Arabia e-Visa
            </p>
            <h1 className="text-5xl/[3.75rem] font-bold text-[#121212] pb-[2.5rem] max-xl:text-4xl max-lg:text-center">
              The Easiest Way To Get Your Saudi Arabia e-Visa
            </h1>
            <p className="text-[0.9375rem]/[1.556rem] font-normal text-[#121212] pb-[3.125rem] max-lg:text-center">
              Apply hassle-free for your e-Visa online. Whether for leisure,
              business, family visits, or Umrah. Fast, secure processing
              guaranteed. Your e-Visa issued same day.
            </p>
            <div className="flex gap-[0.8743rem] max-lg:justify-between">
              <a
                href="https://saudi.etavisaservices.ae/en/check-eligibility"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-brand-secondary py-[0.75rem] px-[1.56rem] rounded-full text-[0.8125] font-bold text-brand-primary"
              >
                Apply Now
              </a>
              <a
                href="https://saudi.etavisaservices.ae/en/check-eligibility"
                target="_blank"
                rel="noopener noreferrer"
                className="px-[1.25rem] content-center text-brand-secondary font-semibold text-[0.9375rem]"
              >
                Check Eligibility
              </a>
            </div>
          </div>
          <div className="max-lg:flex justify-center">
             <Image
            src="/hero.png"
            width={596}
            height={490.94}
            alt="passport image"
            className="max-w-[37.25rem]"
          />
          </div>
         
        </div>
      </div>
      <div className="my-0 mx-auto">
        <div className="bg-[#66996636] flex justify-center ">
          <div className="flex justify-center gap-[50px] py-[4.125rem]  mt-[2.6rem] px-[8.125rem] max-w-[1400px] max-xl:px-[5rem] max-lg:grid max-lg:grid-cols-3">
            <div className="flex flex-col gap-[0.625rem] justify-end ">
              <div className="flex justify-center">
                <Image src="/98.svg" width={83} height={56} alt="98%" />
              </div>

              <p className="text-[#669966] font-medium text-base text-center">
                Visa Approval rate
              </p>
            </div>
            <div className="flex flex-col gap-[0.625rem] justify-end">
              <div className="flex justify-center">
                <Image
                  src="/f7_ship.svg"
                  width={50}
                  height={56}
                  alt="Document icon"
                />
              </div>

              <p className="text-[#669966] font-medium text-base text-center">
                Same Day Processing
              </p>
            </div>
            <div className="flex flex-col gap-[0.625rem] justify-end">
              <div className="flex justify-center">
                <Image
                  src="/cash-back.svg"
                  width={56}
                  height={56}
                  alt="Cash back icon"
                />
              </div>
              <p className="text-[#669966] font-medium text-base text-center">
                Money-Back Guarantee
              </p>
            </div>
            <div className="flex flex-col gap-[0.625rem] justify-end">
              <div className="flex justify-center">
                <Image src="/7.svg" width={85} height={56} alt="24/7 icon" />
              </div>
              <p className="text-[#669966] font-medium text-base text-center">
                Customer Support
              </p>
            </div>
            <div className="flex flex-col gap-[0.625rem] justify-end">
              <div className="flex justify-center">
                <Image
                  src="/Secure.svg"
                  width={56}
                  height={56}
                  alt="Secure icon"
                />
              </div>

              <p className="text-[#669966] font-medium text-base text-center">
                Payment Security
              </p>
            </div>
            <div className="flex flex-col gap-[0.625rem] justify-end">
              <div className="flex justify-center">
                <Image
                  src="/Padlock.svg"
                  width={56}
                  height={56}
                  alt="Padlock icon"
                />
              </div>
              <p className="text-[#669966] font-medium text-base text-center">
                {" "}
                Privacy Protected
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-auto">
        <div className="flex justify-center">
          <div className="pt-[5rem] flex gap-[100px] justify-center px-[8.125rem] pb-[3rem] max-w-[1400px] max-xl:gap-[70px] max-xl:px-[5rem] max-lg:flex-col">
            <div className="max-lg:flex max-lg:justify-center max-lg:flex-col max-md:hidden">
              <div className="max-lg:flex max-lg:justify-center">
              <Image
                src="/5.png"
                width={517}
                height={309}
                alt="Why choose us?"
              />
              </div>

              <h2 className="text-5xl font-bold text-black pb-6 pt-8 max-xl:text-4xl max-lg:text-center">
                Why choose us?
              </h2>
              <p className="font-normal pb-7 text-base text-black max-lg:text-center">
                Here’s why thousands of travelers trust us to handle their visa{" "}
                applications smoothly and securely.
              </p>
              <div className="max-lg:flex max-lg:justify-center">
                              <a
                href="https://saudi.etavisaservices.ae/en/check-eligibility"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-brand-secondary py-[0.75rem] px-[1.56rem] rounded-full text-[0.8125] font-bold text-brand-primary"
              >
                Apply Now
              </a>
              </div>

            </div>
            <div className="grid grid-cols-2 gap-[1.5rem] max-md:flex max-md:flex-col">
              <div className="flex flex-col  items-center bg-[#66996636] px-[20px] py-[3rem] rounded-4xl max-xl:px-[10px] max-xl:py[20px] max-md:grid max-md:grid-cols-[150px_2fr] max-md:pr-[20px]">
                <div className="max-md:row-span-2 max-md:flex max-md:content-center max-md:justify-self-center">
<Image src="/m1.svg" width={64} height={64} alt="clock icon" className=" max-xl:w-[50px] max-xl:h-[50px]" />
                </div>
                
                <p className="text-brand-secondary font-bold text-[1.25rem] pt-4 text-center max-md:text-left">
                  Fast Processing
                </p>
                <p className="text-[#121212] font-normal text-base pt-4 text-center max-md:text-left">
                  {" "}
                  Get your visa in as little as 24 hours.
                </p>
              </div>
              <div className="flex flex-col  items-center bg-[#66996636] px-[20px] py-[3rem] rounded-4xl max-xl:px-[10px] max-xl:py[20px] max-md:grid max-md:grid-cols-[150px_2fr] max-md:pr-[20px]">
                <div  className="max-md:row-span-2 max-md:flex max-md:content-center max-md:justify-self-center">
                 <Image
                  src="/m2.svg"
                  width={64}
                  height={64}
                  alt="document icon"
                  className=" max-xl:w-[50px] max-xl:h-[50px]"
                />
                </div>

                <p className="text-brand-secondary font-bold text-[1.25rem] pt-4 text-center max-md:text-left">
                  Get approved
                </p>
                <p className="text-[#121212] font-normal text-base pt-4 text-center max-md:text-left">
                  {" "}
                  Get your money back in case of a rejection.
                </p>
              </div>
              <div className="flex flex-col  items-center bg-[#66996636] px-[20px] py-[3rem] rounded-4xl max-xl:px-[10px] max-xl:py[20px] max-md:grid max-md:grid-cols-[150px_2fr] max-md:pr-[20px]">
                <div  className="max-md:row-span-2 max-md:flex max-md:content-center max-md:justify-self-center">
                                  <Image src="/m3.svg" width={64} height={64} alt="secure icon" className=" max-xl:w-[50px] max-xl:h-[50px]" />
                </div>

                <p className="text-brand-secondary font-bold text-[1.25rem] pt-4 text-center max-md:text-left">
                  Secure & Confidential
                </p>
                <p className="text-[#121212] font-normal text-base pt-4 text-center max-md:text-left">
                  {" "}
                  We protect your data with top-tier encryption.
                </p>
              </div>
              <div className="flex flex-col  items-center bg-[#66996636] px-[20px] py-[3rem] rounded-4xl max-xl:px-[10px] max-xl:py[20px] max-md:grid max-md:grid-cols-[150px_2fr] max-md:pr-[20px]">
                <div  className="max-md:row-span-2 max-md:flex max-md:content-center max-md:justify-self-center">
                                  <Image
                  src="/m4.svg"
                  width={64}
                  height={64}
                  alt="support icon"
                  className=" max-xl:w-[50px] max-xl:h-[50px]"
                /></div>                

                <p className="text-brand-secondary font-bold text-[1.25rem] pt-4 text-center  max-md:text-left">
                  Awesome support
                </p>
                <p className="text-[#121212] font-normal text-base pt-4 text-center  max-md:text-left">
                  {" "}
                  Our team is here to assist you anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-auto">
        <div className=" flex justify-center">
          <div className=" max-w-[1400px]">
            <h2 className="text-[2.375rem] font-bold text-center text-black pt-[3rem] max-xl:text-4xl">
              How it works
            </h2>
            <p className="text-base text-center text-black font-normal pt-2">
              Applying for your Saudi visa is quick and simple with our easy
              3-step process
            </p>
            <div className="flex justify-center gap-[6rem] py-12 px-[8.125rem] max-xl:px-[5rem]">
              <div className="flex flex-col gap-8 ">
                <div className="flex gap-6">
                  <p className="font-bold text-brand-secondary bg-[#66996636] rounded-3xl w-[4.56rem] h-[4.56rem] flex items-center justify-center text-[2rem] max-xl:text-[28px]">
                    01
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="text-black font-medium text-[2rem] max-xl:text-3xl">
                      Fill out online application
                    </p>
                    <p className="text-black font-normal text-base">
                      Provide your details in our user-friendly application
                      form.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <p className="font-bold text-brand-secondary bg-[#66996636] rounded-3xl w-[4.56rem] h-[4.56rem] flex items-center justify-center text-[2rem] max-xl:text-[28px]">
                    02
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="text-black font-medium text-[2rem] max-xl:text-3xl">
                      Upload your documents
                    </p>
                    <p className="text-black font-normal text-base">
                      Securely submit the required documents through our
                      platform.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <p className="font-bold text-brand-secondary bg-[#66996636] rounded-3xl w-[4.56rem] h-[4.56rem] flex items-center justify-center text-[2rem] max-xl:text-[28px]">
                    03
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="text-black font-medium text-[2rem] max-xl:text-3xl">
                      Get your visa delivered.
                    </p>
                    <p className="text-black font-normal text-base">
                      Receive your visa via email, ready for your trip.
                    </p>
                  </div>
                </div>
                <div className="pt-2 max-lg:flex max-lg:justify-center">
                  <a
                    href="https://saudi.etavisaservices.ae/en/check-eligibility"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-brand-secondary py-[0.75rem] px-[1.56rem] rounded-full text-[0.8125] font-bold text-brand-primary"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
              <div className="max-lg:hidden">
                <Image
                  src="/6.png"
                  width={579}
                  height={463}
                  alt="A man smilling"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-auto">
        <div className=" flex justify-center">
          <div className=" max-w-[1400px]">
            <h2 className="text-[2.375rem] font-bold text-center text-black pt-12 max-xl:text-4xl">
              Customer Reviews
            </h2>
            <p className="text-base text-center text-black font-normal pt-2">
              See why travelers trust us for their Saudi visa needs
            </p>
            <div className="flex gap-[50px] justify-center py-12 px-[12rem] max-xl:px-[9rem] max-lg:flex-col">
              <div className="flex flex-col gap-2 ">
                <p className="font-medium text-[#003300] text-lg pb-2">
                  Esther Howard
                </p>
                <Image
                  src="/Group2.svg"
                  width={120}
                  height={24}
                  alt="5 star rating icon"
                />
                <Image
                  src="/bi_quote.svg"
                  width={26}
                  height={32}
                  alt="quote icon"
                />
                <p className="font-medium text-black text-lg">
                  I never would have been able to navigate the application
                  without the help of iVisa. The speed at which they processed
                  the documents was amazing.
                </p>
              </div>
              <div className="flex flex-col gap-2 ">
                <p className="font-medium text-[#003300] text-lg pb-2">
                  Bessie Cooper
                </p>
                <Image
                  src="/Group2.svg"
                  width={120}
                  height={24}
                  alt="5 star rating icon"
                />
                <Image
                  src="/bi_quote.svg"
                  width={26}
                  height={32}
                  alt="quote icon"
                />
                <p className="font-medium text-black text-lg">
                  I never would have been able to navigate the application
                  without the help of iVisa. The speed at which they processed
                  the documents was amazing.
                </p>
              </div>
              <div className="flex flex-col gap-2 ">
                <p className="font-medium text-[#003300] text-lg pb-2">
                  Kristin Watson
                </p>
                <Image
                  src="/Group2.svg"
                  width={120}
                  height={24}
                  alt="5 star rating icon"
                />
                <Image
                  src="/bi_quote.svg"
                  width={26}
                  height={32}
                  alt="quote icon"
                />
                <p className="font-medium text-black text-lg">
                  I never would have been able to navigate the application
                  without the help of iVisa. The speed at which they processed
                  the documents was amazing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-0 mx-auto">
        <div className=" flex justify-center">
          <div className=" max-w-[1400px] ">
            <h2 className="text-[2.375rem] font-bold text-center text-black pt-12 pb-6 max-xl:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <div className="pb-9  ">
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
}
