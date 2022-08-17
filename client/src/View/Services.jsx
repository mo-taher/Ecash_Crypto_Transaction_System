// const Services = () => {
//     return (
//         <h1>Services</h1>
//     );
// }

// export default Services;



import React from "react";
import { BsShieldFillCheck, BsShieldFillPlus } from "react-icons/bs";
import { BiMessageSquareCheck, BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill, RiHeart2Line, RiHeartAddLine } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 ">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white sm:text-4xl py-2 ">
             Features that we're always enhancing
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        The finest option for purchasing and selling your crypto assets, thanks to the many excellent services we provide
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        
        <ServiceCard
          color="bg-[#f7e305]"
          title="Optimum Currency Rates"
          icon={<BiMessageSquareCheck fontSize={21} className="text-black" />}
          subtitle=" You may find much more easily the best Ethereum gas fee prices here. Use low interest rates."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest Transactions"
          icon={<RiHeartAddLine fontSize={21} className="text-black" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#1f9c0e]"
          title="Security Guarantee"
          icon={<BsShieldFillPlus fontSize={21} className="text-black" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  </div>
);

export default Services;