"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import FormInput from "@/components/common/FormInput/FormInput";
import Button from "@/components/common/Button/Button"
import Modal from "@/components/layout/Modal/Modal";


export default function Login({auth}){
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [isDisabled, setIsDisabled] = useState(true)
  const { email, password } = user

  const handleStateChange = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value})
  }

  useEffect(() => {
    if (email && password) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [email, password])
  

  return (
    <Modal title="Login to your account">
      <div className="flex flex-col gap-8">
        <FormInput
          name="email"
          value={email}
          variant="email"
          placeholder="Email Address"
          onChange={handleStateChange}
        />

        <FormInput
          name="password"
          value={password}
          variant="password"
          placeholder="Password"
          onChange={handleStateChange}
        />
      </div>

      <Link href="/?auth=forgotpassword" className="flex flex-col items-end link link-dart text-small my-1">
        Forgot Password?
      </Link>

      <Link passHref href="/home" className="flex mt-[35px]">
        <Button disabled={isDisabled}>Log In</Button>
      </Link>
    </Modal>
  )
}