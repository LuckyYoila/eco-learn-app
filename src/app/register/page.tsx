import Image from "next/image";
import Link from "next/link";
import registerPic from "@/assets/register-pic.svg";
const Register = () => {
  return (
    <div className=" p-20 flex justify-center gap-16">
      <div className="w-full max-w-lg">
        <h2 className="text-xl font-bold">Welcome to Eco-learning</h2>
        <form action="" className=" space-y-5 mt-5 text-sm">
          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              type="text"
              className="w-full p-2 border rounded"
              name="fistname"
              placeholder="First Name"
            />
          </div>

          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              type="text"
              className="w-full p-2 border rounded"
              name="lastname"
              placeholder="lastname"
            />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="text"
              className="w-full p-2 border rounded"
              name="email"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              className="w-full p-2 border rounded"
              name="password"
              placeholder="Password must be at least 8 characters"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-custom-lime w-full text-white p-3 rounded"
            >
              Continue
            </button>

            <div className="flex justify-between items-center mt-6">
              <hr className="h-[0.1em] w-[30%] ml-auto bg-slate-300" />
              <p className="text-center mx-5">or</p>
              <hr className="h-[0.1em] w-[30%] mr-auto bg-slate-300" />
            </div>
          </div>

          <button
            type="button"
            className="bg-white w-full text-custom-lime p-3 rounded border border-custom-lime"
          >
            Sign in with Google
          </button>
        </form>

        <p className="text-sm mt-5">
          Already have an account?{" "}
          <Link href="/login" className="text-custom-lime">
            Sign in
          </Link>
        </p>
      </div>
      <div>
        <Image
          src={registerPic.src}
          alt="Hero Frame"
          className="max-w-lg"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};
export default Register;
