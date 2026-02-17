import React, { useState } from "react";

const Login = ({handleLogin}) => 
 {

  const [email,setEmail]= useState();
  const [password,setPassword] = useState();
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form submitted")
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black
    ">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form 
        onSubmit={(e)=> {
          submitHandler(e)
        }}
        action=""
        className="flex flex-col items-center justify-center">
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
            className="py-3 text-xl text-gray-400  outline-none bg-transparent placeholder:text-gray-400  px-5 border-2 border-emerald-600 rounded-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
            className="py-3 mt-3 text-xl text-gray-400  outline-none bg-transparent placeholder:text-gray-400  px-5 border-2 border-emerald-600 rounded-full"
            type="password"
            placeholder="Enter password"
          />
          <button className="py-2 mt-7  border-none  text-xl text-white outline-none  placeholder:text-white  px-28 border-2 bg-emerald-600 rounded-full">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
