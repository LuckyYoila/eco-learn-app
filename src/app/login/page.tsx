import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="h-screen flex bg-custom-purple">
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
        <h1 className="mt-24 text-3xl font-bold">Login</h1>
        <p>Sign in to your account</p>

        <form action="" className="flex flex-col gap-5 text-black mt-20">
          <input
            type="text"
            className="w-full p-3 bg-gray-300/35"
            name="userid"
            placeholder="User ID"
          />
          <input
            type="text"
            className="w-full p-3 bg-gray-300/35"
            name="password"
            placeholder="Password"
          />

          <button className="bg-yellow-400 p-3 rounded text-black">
            Login to your account
          </button>
        </form>

        <p className="mt-10">
          Not a member yet?{" "}
          <Link href="/register" className="font-bold">
            Register Now
          </Link>
          .
        </p>
      </div>
      <div className="w-full h-screen bg-[url('/main-background.png')] bg-no-repeat bg-center bg-cover">
        <div className="w-full h-full bg-custom-purple/60"></div>
      </div>
    </div>
  );
};
export default Login;
