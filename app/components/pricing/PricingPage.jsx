import Link from "next/link";
import Pricing from "./Pricing";

const PricingPage = () => {
  return (
    <div>
      <div className="md:max-w-[50%] mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold">
          Start for free, then enjoy <br />
          $1/month for 3 months
        </h1>
        <p className="my-4">
          Try Shopify free for 7 days, no credit card required
        </p>
        <div>
          <div className="flex justify-center border-[1px] border-blue-400 py-1 max-w-[450px] mx-auto rounded-full">
            <input
              className="outline-none py-1 md:py-3"
              type="email"
              placeholder="Enter your email address"
            />

            <button className="md:py-2 md:px-2 py-1 bg-black text-white rounded-full">
              <Link href="/login"> Start free trial</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center">
        <div>
          <Pricing
            packageType="Basic"
            usages="FOR INDIVIDUALS & SMALL BUSINESSES"
            details="Everything you need to create your store, ship products, and process payments"
            price="25"
            includeTxtHeading="What's included on Basic"
            txt1="Basic reports"
            txt2="Up to 1,000 inventory locations"
            txt3="2 staff accounts"
          />
        </div>
        <div>
          <Pricing
            packageType="STOREXPERT"
            usages="FOR SMALL BUSINESSES"
            details="Level up your business with professional reporting and more staff accounts"
            price="65"
            includeTxtHeading="What's included on STOREXPERT"
            txt1="Professional reports"
            txt2="Up to 1,000 inventory locations"
            txt3="5 staff accounts"
          />
        </div>
        <div>
          <Pricing
            packageType="Advanced"
            usages="FOR MEDIUM TO LARGE BUSINESSES"
            details="Get the best of Shopify with custom reporting and our lowest transaction fees"
            price="399"
            includeTxtHeading="What's included on Advanced"
            txt1="Custom report builder"
            txt2="Up to 1,000 inventory locations"
            txt3="15 staff accounts"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
