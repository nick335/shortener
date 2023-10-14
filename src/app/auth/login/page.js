"use client"
import Link from "next/link";
import { useState } from "react";
import {useSearchParams} from "next/navigation"
import Logo from "@/components/common/Logo/Logo";
import FormInput from "@/components/common/FormInput/FormInput";
import Modal from "@/components/layout/Modal/Modal"
// import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt";
import Button from "@/components/common/Button/Button"
import ForgotPassword from "@/app/auth/login/forgotPassword/page"


export default function Login({auth}){
   

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

        <Logo/>

        <p className="text-[24px] lg:text-[32px]  whitespace-nowrap">Log into your account</p>

     <form className="w-full max-w-[300px] lg:max-w-[440px]">
        <div className="flex flex-col">
            <div className="flex flex-col gap-[16px]">
            <FormInput variant="email" placeholder="Email Address" id="email" type="email" value={email} onChange={handleStateChange}/>
            <FormInput variant="" placeholder="Password" id="email" type="password" value={password} onChange={handleStateChange} />
            </div>
           <span><Link href="/?auth=forgotpassword" className="flex flex-col justify-end items-end text-dart hover:underline hover:brightness-105 transition-all text-[14px]">Forgot Password?</Link>
           </span>
        <Link href="" className=" flex transition-all mt-[35px]" shallow>
           <Button>Log In</Button>
        </Link>
        </div>

        </form>

       </div>
       </Modal>
    )
}