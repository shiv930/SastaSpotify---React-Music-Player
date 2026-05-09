import React from "react";
import { Apple, Rainbow } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black flex justify-center items-center px-4">
      <div className="w-[25%] max-w-md bg-black backdrop-blur-xl  rounded-2xl p-8 shadow-2xl text-white">
        {/* Header */}
        <div className="flex items-center flex-col gap-3 justify-center mb-10">
          <div>
            <img
              className="w-10 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
              alt="spotify"
            />
          </div>
          <h1 className="text-4xl text-center font-bold   tracking-wide">
            Welcome back
          </h1>
        </div>

        {/* Email Form */}
        <div className="mb-2">
          <p className="text-sm mb-2 font-medium">Email </p>

          <form onSubmit={handleSubmit((data) => {
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");

  if (data.email === email && data.password === password) {
    localStorage.setItem("isLoggedIn", true);
    navigate("/home");
  } else {
    alert("Invalid email or password");
  }
})}>

            <input
              {...register("email", { required: "email is required" })}
              type="email"
              placeholder="name@domain.com"
              className="w-full p-2 mt-2 rounded-xl bg-zinc-800 border border-zinc-600 placeholder-zinc-400 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-sm"> {errors.email.message}</p>
            )}
            <p className="text-sm mt-2  font-medium">password </p>
            <input
              {...register("password", { required: "password is required" })}
              type="password"
              placeholder="********"
              className="w-full p-2   rounded-xl bg-zinc-800 border border-zinc-600 placeholder-zinc-400 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.password && (
              <p className="text-red-400 text-sm"> {errors.password.message}</p>
            )}

            <button className="w-full p-2 mt-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold transition-all active:scale-95">
              Continue
            </button>

            <p className="text-center text-green-400">OR</p>
          </form>
        </div>

        {/* Google Button */}
        <a
          href="https://accounts.spotify.com/pl/login?method=google"
          className="w-full flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 p-2 rounded-3xl font-medium transition-all mb-4"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5"
          />
          Sign up with Google
        </a>
        <a
          href="https://accounts.spotify.com/en/login?method=facebook"
          className="w-full flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 p-2 rounded-3xl font-medium transition-all mb-4"
        >
          <img
            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
            alt="facebook"
            className="w-5"
          />
          Sign up with Facebook
        </a>

        <a
          href="#"
          className="w-full flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 p-2 rounded-3xl font-medium transition-all mb-4"
        >
          <Apple size={20} />
          Sign up with Apple
        </a>

        {/* Footer */}
        <div className="text-center mt-8 text-sm flex flex-col text-zinc-400">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-green-400 mt-2 underline cursor-pointer hover:underline"
          >
            register here
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
