import { useState } from "react";
import treatwell from "../../assets/treatwell.png";
export default function ComplaintLogin() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


  const handleSubmit=(e)=>{
    e.preventDefault(); 
    console.log("Email:", email, "Password:", password);



  }
    return (
      <>
          <header className="bg-white shadow-2xl border-b pb-2 ">
      <div className="flex items-center px-4 pd-3 md:px-16">
        <img src={treatwell} alt="Logo" height={73} width={80} />
      </div>
    </header>

      <div className="flex  justify-center min-h-screen bg-white pt-4">
        <div className="w-full max-w-md p-6 rounded-lg">
          <h2 className="text-3xl text-center text-[#30879f] mb-2">LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                id="email"
                className="w-full text-xl px-8 py-4 rounded bg-gray-200 outline-none focus:ring-2 focus:ring-[#43ABc7]  text-gray-700"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                id="password"
                className="w-full text-xl  py-4  px-8  rounded bg-gray-200 outline-none focus:ring-2 focus:ring-[#43ABc7]  text-gray-700"
                placeholder="Enter Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-xl text-white p-4 rounded bg-[#43ABc7] outline-none hover:bg-[#403866] transition-all duration-300 ease-in-out "            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
      </>
    );
  }
  