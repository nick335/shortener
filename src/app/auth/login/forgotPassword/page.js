"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import FormInput from "@/components/common/FormInput/FormInput";
import Button from "@/components/common/Button/Button"
import Modal from "@/components/layout/Modal/Modal";


export default function ForgotPassword(){
  const[ email, setEmail ] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (email) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [email])

  const handleStateChange = (e) =>{
    setEmail(e.target.value)
  }


  return (
    <Modal title="Forgot your Password?" subtitle="A link will be sent to your email address">
      <FormInput
        name="email"
        value={email}
        variant="email"
        placeholder="Email Address"
        onChange={handleStateChange}
      />

      <Link passHref href="/?auth=resetpassword" className="flex mt-[35px]">
        <Button disabled={isDisabled}>Reset Password</Button>
      </Link>
    </Modal>
  )
}