import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import styles from "./Auth.module.css";
const SignUp = () => {
  return (
    <div>
      {/* container  */}
      <div
        className={`rid md:grid-cols-2 grid-cols-1 justify-center items-center md:w-[80%] w-full h-[100vh] bg-white mx-auto rounded-md mb-28`}
      >
        {/* form  */}
        <div
          className={`flex md:w-[70%] w-[95%] mx-auto justify-end flex-col items-center form rounded-md ${styles.form}`}
        >
          <h1 className="text-xl font-semibold mt-4">Sign Up</h1>
          <div className="w-[30%] h-[5px] rounded-lg bg-slate-600"></div>
          <form action="" className="w-full px-10 py-10">
            <div className="my-3">
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="py-2 mt-2 px-3 w-full border-[1px] border-blue-300 rounded-sm outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                className="py-2 mt-2 px-3 w-full border-[1px] border-blue-300 rounded-sm outline-none"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-lg py-2 px-3 hover:bg-green-600 bg-slate-600 ease-in-out duration-300 text-white"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div>
            <p className="text-center text-[#D1A054]">
              Already registered?{" "}
              <span className="text-green-700">
                <Link href="/login">Go to log in</Link>
              </span>
            </p>
            <p className="text-center my-3">Or sign up with</p>
            <div className="flex justify-center gap-4 mb-10 mt-4 text-[#444444] text-xl">
              <span className="border-[1px] border-blue-600 rounded-full p-1 hover:bg-blue-400 hover:text-white ease-in-out duration-300">
                <GrFacebookOption />
              </span>
              <span className="border-[1px] border-blue-600 rounded-full p-1 hover:bg-blue-400 hover:text-white ease-in-out duration-300">
                <FaGoogle />
              </span>
              <span className="border-[1px] border-blue-600 rounded-full p-1 hover:bg-blue-400 hover:text-white ease-in-out duration-300">
                <FaGithub />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
