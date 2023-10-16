"use client"
import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/common/Logo/Logo";
import FormInput from "@/components/common/FormInput/FormInput";
import Button from "@/components/common/Button/Button"


export default function ForgotPassword(){
  const[user, setUser] = useState({
    email: '',
  })

  const { email } = user

  const handleStateChange = (e) => {
    const value = e.target.value;
    setUser({...user, [e.target.id]: value})
  }


  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <Logo/>

      <p className="text-[24px] lg:text-[32px] whitespace-nowrap">Forgot your password?</p>
      <p className="text-[14px] lg:text-[18px] whitespace-nowrap">A link will be sent to your email address</p>

     <form className="w-full max-w-[300px] lg:max-w-[440px]">
        <div className="flex flex-col gap-4">
          <FormInput variant="email" placeholder="Email Address" id="email" type="email" value={email} onChange={handleStateChange}/>
        
          <Link href="/?auth=resetpassword" className="w-full max-w-[300px] lg:max-w-[500px] flex transition-all" shallow>
            <Button>Reset Password</Button>
          </Link>
        </div>
      </form>
    </div>
  )
}