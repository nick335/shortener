"use client"
import Link from "next/link";
import { useState } from "react";
import Logo2 from "@/components/common/Logo/Logo2";
import FormInput from "@/components/common/FormInput/FormInput";
import Modal from "@/components/layout/Modal/Modal"
import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt";
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

        <p className="text-[24px] lg:text-[32px]">Log into your account</p>

     <form>
        <div className="flex flex-col">
            <FormInput variant="email" placeholder="Email Address" id="email" type="email" value={email} onChange={handleStateChange}/>
            <div className="w-[250px] lg:w-[400px] mt-[20px] mb-[2px]">
            <FormInput variant="" placeholder="Password" id="email" type="password" value={password} onChange={handleStateChange} />
            </div>
           <span><Link href="/auth/login/forgotPassword" className="flex flex-col justify-end items-end text-dart hover:underline hover:brightness-105 transition-all text-[14px]">Forgot Password?</Link></span>
        <Link href="" className="w-full max-w-[300px] lg:max-w-[500px] flex transition-all mt-[35px]" shallow>
           <Button>Log In</Button>
        </Link>
        </div>

        </form>

       </div>
       </Modal>
    )
}