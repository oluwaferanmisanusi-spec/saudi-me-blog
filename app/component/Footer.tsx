import Image from "next/image";
import SubscribeForm from "./Subscribeform";
import LatestNews from "./LatestNews";
import { Suspense } from "react";

export default function Footer() {
  function LatestNewsSkeleton() {
    return (
      <div className="py-16 text-center animate-pulse">
        <div className="h-8 w-40 bg-gray-200 rounded mx-auto mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-[8.125rem] max-xl:px-[5rem]">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="aspect-[4/3] bg-gray-200 rounded-xl" />
              <div className="h-3 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-0 mx-auto">
      <div>
        <Suspense fallback={<LatestNewsSkeleton />}>
          <LatestNews />
        </Suspense>
      </div>
      <div className=" flex justify-center max-lg:justify-start">
        <div className="max-w-[1400px]">
          <div className="flex px-[8.125rem]  justify-center gap-[60px] pt-[1.8125rem] pb-[60px] max-xl:px-[5rem] max-lg:flex-col max-sm:px-[2rem] ">
            <div className="flex flex-col content-center justify-center ">
              <p className="text-brand-secondary font-bold text[1.375rem] pb-2">
                Stay informed!
              </p>
              <p className="text-[#121212] font-bold text-3xl pb-[25px] max-lg:text-2xl max-sm:text-xl">
                Subscribe Now For Breaking News & Important e-Visa Updates.
              </p>
              <SubscribeForm />
            </div>
            <div className="max-lg:hidden ">
            <Image
              src="/Fimg.png"
              width={296}
              height={371}
              alt="mail man image"
            />
            </div>
            
          </div>
        </div>
      </div>

      <div className=" flex justify-center">
        <div className="max-w-[1400px]">
          <div className="flex gap-[2.7rem] px-[8.125rem] justify-center pb-[30px] max-xl:px-[5rem] max-lg:grid max-lg:grid-cols-2 max-sm:px-[2rem]">
            <div className=" flex gap-[2.7rem] max-lg:flex-col  max-lg:gap-42 max-md:gap-45">
<div className="flex flex-col gap-[2rem] ">
              <Image
                src="/foot2.png"
                width={400}
                height={34}
                alt="Saudi visa logo"
              />
              <p className="text-black font-normal text-[11px]">
                Copyright 2024 Saudi Visa Office {new Date().getFullYear()} ©
              </p>
            </div>
            <div className="pl-[40px] border-l-2 border-[#dedede] max-lg:border-[white] max-xl:pl-[20px]">
              <p className="text-brand-secondary font-bold text-sm pb-[20px]">
                Quick Links
              </p>
              <div className="pl-[15px]">
                <p className="font-normal text-[13px] text-[#22304E] pb-[10px]">
                  Apply for Saudi e-Visa
                </p>
                <p className="font-normal text-[13px] text-[#22304E] pb-[10px]">
                  Check Eligibility
                </p>
              </div>
            </div>
            </div>
            
            <div className=" flex gap-[2.7rem] max-lg:flex-col max-lg:border-l-2 max-lg:border-[#dedede] ">
            <div className="pl-[40px] border-l-2 border-[#dedede] max-lg:border-[white] max-xl:pl-[20px] max-lg:justify-center max-lg:flex">
              <div>
              <p className="text-brand-secondary font-bold text-sm pb-[20px]">
                Topics
              </p>
              <div className="pl-[15px]">
                <p className="font-normal text-[13px] text-[#22304E] pb-[10px]">
                  Tourist Visa
                </p>
                <p className="font-normal text-[13px] text-[#22304E] pb-[10px]">
                  Business VIsa
                </p>
                <p className="font-normal text-[13px] text-[#22304E] pb-[10px]">
                  Umrah Visa
                </p>
                <p className="font-normal text-[13px] text-[#22304E] pb-[10px]">
                  Hajj Visa
                </p>
                <p className="font-normal text-[13px] text-[#22304E] pb-[10px]">
                  Friends & Family Visa
                </p>
                <p className="font-normal text-[13px] text-[#22304E] pb-[10px]">
                  Transit Visa
                </p>
              </div>
              </div>

            </div>
            <div className="pl-[40px] border-l-2 border-[#dedede] border-r-2 pr-20 max-lg:border-[white] max-xl:pl-[20px] max-lg:justify-center max-lg:flex">
              <div>
              <p className="text-brand-secondary font-bold text-sm pb-[20px]">
                About
              </p>
              <div className="pl-[15px]">
                <p className="font-normal text-[13px] text-[#22304E] pb-[10px]">
                  About
                </p>
                <p className="font-normal text-[13px] text-[#22304E] pb-[10px]">
                  Contact us
                </p>
              </div>
              </div>

            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
