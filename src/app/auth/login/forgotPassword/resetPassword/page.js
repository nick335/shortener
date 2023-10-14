"use client"
import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/common/Logo/Logo";
import FormInput from "@/components/common/FormInput/FormInput";
import Modal from "@/components/layout/Modal/Modal"
import Button from "@/components/common/Button/Button"


export default function Login(){

   

    const[user, setUser] = useState({
        password1: '',
        password2: ''
    })

    const{password1, password2} = user

    const handleStateChange = (e) =>{
     const value = e.target.value;
      setUser({...user, [e.target.id]: value})
    }


    return(
        <Modal>

       <div className="flex flex-col justify-center items-center gap-6">

        <Logo/>

        <p className="text-[24px] lg:text-[32px]">Password Reset</p>

     <form className="w-full max-w-[300px] lg:max-w-[440px]">
        <div className="flex flex-col gap-4">
            <FormInput variant="email" placeholder="Enter new password" id="password1" type="email" value={password1} onChange={handleStateChange}/>
            <FormInput variant="" placeholder="Confirm new password" id="password2" type="password" value={password2} onChange={handleStateChange}/>
        <Link href="/auth/login" className="w-full max-w-[300px] lg:max-w-[500px] flex transition-all mt-[20p" shallow>
           <Button>Back to login</Button>
        </Link>
        </div>

        </form>
       </div>
       </Modal>
    )
}