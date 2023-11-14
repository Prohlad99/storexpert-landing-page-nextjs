import Link from "next/link";
import { LiaHandPointRightSolid } from "react-icons/lia";
const Pricing = ({
  packageType,
  usages,
  details,
  price,
  includeTxtHeading,
  txt1,
  txt2,
  txt3,
}) => {
  return (
    <div className="border-[1px] shadow-xl bg-slate-50 border-gray-300 h-auto w-[350px] rounded-xl hover:border-2 hover:border-[#68EBD1] transition-all ease-in-out duration-200">
      <div className="m-6">
        <h1 className="text-3xl font-bold">{packageType}</h1>
        <h3 className="font-semibold font-sans text-[15px] my-3">{usages}</h3>
        <p className="font-sans text-[14px] my-3">{details}</p>
        <div className="flex items-center my-6">
          <h1 className="text-6xl font-bold">${price}</h1>
          <p className="font-bold text-sm">
            usd <br /> /mo
          </p>
        </div>
      </div>
      <div className="bg-[#EFFBF7] py-4 border-b-[1px] border-t-[1px] border-[#55F89F] my-6">
        <h3 className="font-bold text-center">
          Get your first 3 months for $1/mo
        </h3>
      </div>
      <div className="m-6">
        <h5 className="font-semibold">{includeTxtHeading}</h5>
        <p className="flex items-center gap-2 my-2">
          <span>
            <LiaHandPointRightSolid />
          </span>{" "}
          {txt1}
        </p>
        <p className="flex items-center gap-2 my-2">
          <span>
            <LiaHandPointRightSolid />
          </span>{" "}
          {txt2}
        </p>
        <p className="flex items-center gap-2 my-2">
          <span>
            <LiaHandPointRightSolid />
          </span>{" "}
          {txt3}
        </p>
      </div>
      <div className="text-center px-4 mb-5 mt-10">
        <button className="bg-black py-3 w-full text-white rounded-full font-semibold hover:bg-stone-800">
          <Link href="/login"> Start free trial</Link>
        </button>
      </div>
    </div>
  );
};

export default Pricing;
