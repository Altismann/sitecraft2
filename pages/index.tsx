import type { NextPage } from "next";
import Image from "next/image";

const Mobile: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-center justify-start py-[97px] px-0 box-border gap-14 leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-center justify-start py-[30px] px-1 box-border gap-[100px] max-w-full text-center text-[130px] text-gray-200 font-montserrat">
        <h1 className="m-0 w-[347px] h-20 relative text-inherit leading-[80px] font-black font-[inherit] inline-block shrink-0 break-all max-w-full">
          Sitecraft
        </h1>
        <Image
          className="w-[372px] relative max-h-full overflow-hidden object-cover max-w-full mq410:w-[calc(100%_-_40px)]"
          loading="lazy"
          width={372}
          height={331}
          alt=""
          src="/imgcfheromainimage2@2x.png"
        />
        <h2 className="m-0 relative text-5xl px-[150px] md:px-[400px] leading-[20px] font-normal font-[inherit]">
          Hej! Jag heter Anders, en produktdesigner och webbutvecklare plaserad
          i Stockholm. Jag skapar gränssnitt för hobbyister, småföretag och skapare.
        </h2>
        </section>
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[0px] px-[110px] text-center text-[18px] text-gray-300 font-montserrat">
        <a
          className="self-stretch relative [text-decoration:underline] tracking-[-0.32px] leading-[18px] font-bold text-[inherit]"
          href="https://www.dyoid.se/dyoidev"
          target="_blank"
        >
          Besök min nya Portfolio
        </a>
      </section>

     
      <section className="self-stretch rounded-xl bg-white flex flex-col items-center justify-start py-[31px] px-0 gap-[17px] text-center text-sm text-black font-open-sans">
        <div className="self-stretch relative tracking-[10px] leading-[28px]">
          Kontakt
        </div>
        <div className="h-[52px] relative text-smi leading-[20px] font-montserrat text-dimgray-100 inline-block shrink-0">
          Anders Altmann, 48 år, bor på adressen Enlundavägen 46 Stensborg, 179
          75 i Skå. Telefonnummer 070-231 21 73 aaltismann@gmail.com
        </div>
      </section>
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[0px] px-[110px] text-center text-[18px] text-gray-300 font-montserrat">
        <a
          className="self-stretch relative [text-decoration:underline] tracking-[-0.32px] leading-[18px] font-bold text-[inherit]"
          href="mailto:aaltismann@gmail.com"
          target="_blank"
        >
          aaltismann@gmail.com
        </a>
      </section>
    </div>
  );
};

export default Mobile;
