import { MoveRight } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    const submitHandle = () => {
        navigate('/')
    }
  return (
    <div className="lg:container mx-auto p-[80px]">
      <div className="max-w-[648px] w-full min-h-[382px] p-[31px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa]">
        <h2 className="text-3xl text-[#272343] font-semibold font-inter mb-5 capitalize">Register</h2>
        <form action="#" onSubmit={submitHandle} className="flex flex-col items-center w-full space-y-4">
          <input type="text" placeholder="Your name.." className="w-full h-[50px] bg-[#c1d8e4] rounded-lg pl-3.5" />
          <input type="email" placeholder="Email.." className="w-full h-[50px] bg-[#c1d8e4] rounded-lg pl-3.5"/>
          <input type="password" placeholder="your password.." className="w-full h-[50px] bg-[#c1d8e4] rounded-lg pl-3.5" />
          <button className="w-full h-[50px] bg-[#c1d8e4] rounded-lg pl-3.5 text-base text-white font-semibold font-inter capitalize flex items-center justify-center cursor-pointer gap-2.5">Register<MoveRight/></button>
        </form>
        <p className="text-base text-[#272343] font-normal font-inter flex items-center justify-center gap-2.5">
          Already have an account?<Link to={"/auth/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
