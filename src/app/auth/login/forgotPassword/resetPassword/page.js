"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import FormInput from "@/components/common/FormInput/FormInput";
import Modal from "@/components/layout/Modal/Modal"
import Button from "@/components/common/Button/Button"


export default function ResetPassword() {
  const [password, setPassword] = useState({
    password1: "",
    password2: "",
    error: false,
    message: ""
  })
  const [isDisabled, setIsDisabled] = useState(true)

  const { password1, password2, error, message } = password
  const arePasswordsSame = password1 === password2

  const handleStateChange = (e) => {
    const {name, value} = e.target;
    setPassword({...password, [name]: value})
  }

  useEffect(() => {
    if (!arePasswordsSame) {
      setPassword(prev => {
        return {
          ...prev,
          error: true,
          message: "Passwords must be the same"
        }
      })
    } else {
      setPassword(prev => {
        return {
          ...prev,
          error: false,
          message: ""
        }
      })
    }
  }, [arePasswordsSame])

  useEffect(() => {
    if (password2 === "") {
      setIsDisabled(true)
    } else {
      if (error) {
        setIsDisabled(true)
      } else {
        setIsDisabled(false)
      }
    }
  }, [error, password2])


  return (
    <Modal title="Password reset">
      <div className="flex flex-col gap-8">
        <FormInput
          name="password1"
          value={password1}
          placeholder="Enter new password"
          onChange={handleStateChange}
        />

        <FormInput
          name="password2"
          value={password2}
          placeholder="Confirm new password"
          onChange={handleStateChange}
          error={error}
          message={message}
        />
      </div>

      <Link passHref href="/?auth=login" className="flex mt-[35px]">
        <Button disabled={isDisabled}>Back to login</Button>
      </Link>
    </Modal>
  )
}