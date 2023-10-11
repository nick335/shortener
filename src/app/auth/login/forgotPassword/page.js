"use client"
import Link from "next/link";
import { useState } from "react";
import Logo2 from "@/components/common/Logo/Logo2";
import FormInput from "@/components/common/FormInput/FormInput";
import Modal from "@/components/layout/Modal/Modal"
import Button from "@/components/common/Button/Button"


export default function Login(){

   

    const[user, setUser] = useState({
        email: '',
        password: ''
    })

    const{email, password} = user

    const handleStateChange = (e) =>{
     const value = e.target.value;
      setUser({...user, [e.target.id]: value})
    }


    return(
        <Modal>

       <div className="flex flex-col justify-center items-center gap-6">

        <Logo2/>

        <p className="text-[24px] lg:text-[32px">Forgot your password?</p>
        <p className="text-[18px]">A link will be sent to your email address</p>

     <form>
        <div className="flex flex-col gap-4">
            <div className="w-250px] lg:w-[400px]">
            <FormInput variant="email" placeholder="Email Address" id="email" type="email" value={email} onChange={handleStateChange}/>
            </div>
        <Link href="/auth/login//forgotPassword/resetPassword" className="w-full max-w-[300px] lg:max-w-[500px] flex transition-all" shallow>
           <Button>Reset Password</Button>
        </Link>
        </div>

        </form>
       </div>
       </Modal>
    )
}