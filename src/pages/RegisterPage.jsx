import React from "react";
import { Apple, Rainbow } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
const RegisterPage = () => {
  let {register, handleSubmit, formState:{errors}}= useForm()
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black flex justify-center items-center px-4">
      <div className="w-[25%] max-w-md bg-black backdrop-blur-xl  rounded-2xl p-8 shadow-2xl text-white">

        {/* Header */}
        <div className="flex items-center flex-col gap-3 justify-center mb-15">
           <div>
          <img
            className="w-10 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
            alt="spotify"
          />
        </div>
          <h1 className="text-4xl text-center font-bold  tracking-wide">
            Sign up to start listening
          </h1>
        </div>

        {/* Email Form */}
        <div className="mb-3">
          {/* <p className="text-sm mb-1 font-medium"></p> */}

          <form onSubmit={handleSubmit((data)=>{
  localStorage.setItem("userName", data.name)
  localStorage.setItem("userEmail", data.email)
  localStorage.setItem("userPassword", data.password)
  localStorage.setItem("isLoggedIn", false)

  alert("Account created! Please login.")
  navigate("/")
})}>

            <input
            {...register("name", {
      required: "name is required"})}
              type="name"
              placeholder="Enter your name "
              className="w-full mb-1 px-3 py-2 rounded-3xl bg-zinc-800 border border-zinc-600 placeholder-zinc-400 focus:ring-2 focus:ring-green-500 outline-none"
            />

            {errors.name && (
    <p className="text-red-400 text-sm">{errors.name.message}</p>
  )}
            <input
            {...register("email", {
      required: "Email is required"})}
              type="email"
              placeholder="name@domain.com"
              className="w-full mt-2 px-3 py-2 rounded-3xl bg-zinc-800 border border-zinc-600 placeholder-zinc-400 focus:ring-2 focus:ring-green-500 outline-none"
            />

            {errors.email && (
    <p className="text-red-400 text-sm">{errors.email.message}</p>
  )}
            <input
            {...register("password", {
      required: "password is required"})}
              type="password"
              placeholder="********"
              className="w-full mt-3 px-3 py-2 rounded-3xl bg-zinc-800 border border-zinc-600 placeholder-zinc-400 focus:ring-2 focus:ring-green-500 outline-none"
            />

            {errors.password && (
    <p className="text-red-400  text-sm">{errors.password.message}</p>
  )}

            <button className="w-full p-2 mt-3 bg-green-500 hover:bg-green-600 rounded-3xl font-semibold transition-all active:scale-95">
              Next
            </button>

            <p className="text-center  text-green-400">OR</p>
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
          href="#"
          className="w-full flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 p-2 rounded-3xl font-medium transition-all mb-4"
        >
          <Apple size={20} />
          Sign up with Apple
        </a>
        

       

        {/* Footer */}
        <div className="text-center mt-10 text-sm flex flex-col text-zinc-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-green-400 mt-2 underline cursor-pointer hover:underline"
          >
            Log in
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
