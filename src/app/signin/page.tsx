"use client";
import Image from "next/image";
import {Poppins} from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PasswordInput from "../../components/password-input";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };


  return (
    <main className="w-screen bg-white grid grid-cols-7 h-screen overflow-x-hidden">
        <div className="col-span-3 flex flex-col items-center space-y-7 pt-[13vh] px-[100px] bg-primary">
            <div className="flex flex-col space-y-3">
                <h2 className={`${poppins.className} text-[36px] text-white font-medium`}>Welcome to Your Space!</h2>
                <h4 className={`${poppins.className} text-[16px] text-white-tint`}>Experience simple and effective management of corporate documents.</h4>
            </div>
            <Image src="/signin/sign.png" alt="Sign In" width={430} height={400} />
        </div>
        <div className="col-span-4 flex flex-col space-y-8 pt-[15vh] ps-24">
            <div className="h-[26px] flex items-center space-x-2">
                <Image src="/logo/c-logo.png" alt="Logo" width={27} height={26} />
                <Image src="/logo/CmAG.png" alt="Logo" width={45} height={20} />
            </div>
            <div className="flex flex-col space-y-3">
                <h2 className={`${poppins.className} text-[36px] text-black`}>Sign In</h2>
                <h4 className={`${poppins.className} text-[16px] text-gray`}>Provide your email to sign in to your account.</h4>
            </div>
            <form className="flex flex-col space-y-4 w-[500px]" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-3">
                <label className={`${poppins.className} text-[20px] text-black`}>Email</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="border border-gray-300 p-4 rounded-xl h-[56px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-3">
                <PasswordInput
                  label="Password"
                  labelClassName={`${poppins.className} text-[20px] text-black`}
                  placeholder="Password"
                  className="border border-gray-300 p-4 rounded-xl h-[56px] w-screen"
                  containerClassName="flex flex-col space-y-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className={`${poppins.className} text-[16px] text-primary text-right`}><Link href="/forgot-password">Forgot your Password?</Link> <span className="text-black">or</span> <Link href="/signin-new" className="text-primary">Log in as new member</Link></div>
              </div>
                <button type="submit" className={`${poppins.className} bg-primary text-[20px] text-white p-4 h-[56px] rounded-xl`}>Sign In</button>
            </form>
        </div>
        
    </main>
  )
}

export default LogIn;