import { Button } from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";

export default function Template() {
  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-20 flex flex-col gap-[50px] sm:px-10">
        {/* Head Content */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
          <div className="flex flex-col gap-[18px] md:w-8/12 lg:w-auto">
            <SubHead>Choice Your Template</SubHead>
            <Paragraph>
              We give actionable tips, strategies, and techniques to grow your
              business.
            </Paragraph>
          </div>
          <Button buttonStyle="bg-black text-white">
            <div className="flex gap-2.5 items-center">
              View All
              <img src="/assets/images/anchor-right.svg" alt="anchor" />
            </div>
          </Button>
        </div>

        {/* Blog Items */}
        <div className="grid gap-8 font-body md:grid-cols-2 lg:grid-cols-3">
          <section className="flex flex-col gap-6 shadow-lg items-center border-[1px] border-blue-400 rounded-md">
            <div className="overflow-hidden h-[300px] w-[300px]">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                src="/assets/images/store3.jpg"
                alt="thumbnail"
              />
            </div>
            <h3 className="text-[26px] font-medium text-black-100 md:ml-6 ml-2">
              Improve your business ecommerce management
            </h3>
            <a
              className="underline text-black-100  md:ml-6 ml-2 mb-4 justify-self-end w-full"
              href="#"
            >
              View Live
            </a>
          </section>
          <section className="flex flex-col gap-6 shadow-lg items-center border-[1px] border-blue-400 rounded-md">
            <div className="overflow-hidden w-[300px] h-[300px]">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                src="/assets/images/store2.jpg"
                alt="thumbnail"
              />
            </div>
            <h3 className="text-[26px] font-medium text-black-100 md:ml-6 ml-2">
              Ecommerce Hosting: What to Look for in a Host
            </h3>
            <a
              className="underline text-black-100 md:ml-6 ml-2 mb-4 justify-self-end w-full"
              href="#"
            >
              View Live
            </a>
          </section>
          <section className="hidden lg:flex flex-col gap-6 shadow-lg items-center border-[1px] border-blue-400 rounded-md">
            <div className="overflow-hidden w-[300px] h-[300px]">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                src="/assets/images/store4.jpeg"
                alt="thumbnail"
              />
            </div>
            <h3 className="text-[26px] font-medium text-black-100 md:ml-6 ml-2">
              Improve your business ecommerce management
            </h3>
            <a
              className="underline text-black-100  md:ml-6 ml-2 mb-4 justify-self-end w-full"
              href="#"
            >
              View Live
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
