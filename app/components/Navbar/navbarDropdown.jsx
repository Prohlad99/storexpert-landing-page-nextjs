import Link from "next/link";
import styles from "./navbar.module.css";
export default function NavbarDropdown({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } md:hidden bg-tertiary-300 absolute top-0 left-0 w-full h-screen text-center transition-all duration-500 ease-in-out px-5 z-10`}
    >
      <div className="flex flex-col gap-16 mt-16 bg-black p-4">
        <div className="flex flex-col gap-8 items-center text-white text-lg">
          <Link className="w-fit" href="#">
            <p className={styles.navlink}>Pricing</p>
          </Link>
          <Link className="w-fit" href="#">
            <p className={styles.navlink}>Test</p>
          </Link>
          <Link className="w-fit" href="#">
            <p className={styles.navlink}>Test</p>
          </Link>
          <Link className="w-fit" href="#">
            <p className={styles.navlink}>Test</p>
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          <Link href="#">
            <p className="underline text-white py-3.5">Login</p>
          </Link>
          <Link href="#">
            <button className="py-3.5 border  w-full text-white bg-black font-medium">
              Start Free Trial
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
