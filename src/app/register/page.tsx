import Image from "next/image";
import Link from "next/link";
const Register = () => {
  return (
    <div className="h-screen flex bg-custom-green">
      <div className="h-screen w-full max-w-lg p-10 text-white">
        <div className="flex justify-between">
          <Image
            src="/logo.png"
            alt="logo"
            className="w-32"
            width={100}
            height={100}
          />

          <Link href="/">Back to home</Link>
        </div>
        <h1 className="mt-10 text-3xl font-bold">Sign Up</h1>
        <p>Create your account</p>

        <form action="" className="flex flex-col gap-5 text-black mt-10">
          <input
            type="text"
            className="w-full p-3 bg-gray-300/35"
            name="name"
            placeholder="Name"
          />

          <input
            type="email"
            className="w-full p-3 bg-gray-300/35"
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            className="w-full p-3 bg-gray-300/35"
            name="password"
            placeholder="Password"
          />

          <input
            type="text"
            className="w-full p-3 bg-gray-300/35"
            name="confirm-password"
            placeholder="Confirm Password"
          />

          <button className="bg-custom-purple p-3 rounded">
            Sign up your account
          </button>
        </form>

        <p className="mt-10">
          Already a member?{" "}
          <Link href="/login" className="font-bold">
            Sign in Now
          </Link>
          .
        </p>
      </div>
      <div className="w-full h-screen bg-[url('/main-background.png')] bg-no-repeat bg-center bg-cover">
        <div className="w-full h-full bg-custom-green/60"></div>
      </div>
    </div>
  );
};
export default Register;
