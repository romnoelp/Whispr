import { LoginForm } from "@/components/client-components/login-form";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    // Container
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Left side */}
      <div className="flex-1 md:flex-[2] w-full h-1/2 md:h-full flex justify-center items-center">
        <Image
          src="login.svg"
          alt="Login image"
          width={1100} 
          height={600}
          className="hidden md:block object-contain"
        />
        <Image
          src="login.svg"
          alt="Login image"
          layout="intrinsic"
          width={400} 
          height={300}
          className="block md:hidden object-contain max-w-full h-auto"
        />
      </div>
      {/* Right side */}
      <div className="flex-1 flex justify-center items-center px-6 md:px-12">
        <div className="w-full max-w-sm md:max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
