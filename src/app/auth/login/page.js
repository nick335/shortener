"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import FormInput from "@/components/common/FormInput/FormInput";
import Button from "@/components/common/Button/Button"
import Modal from "@/components/layout/Modal/Modal";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import login from "@/api/login";


export default function LoginPage(){
  const [user, setUser] = useState({
    username: '',
    password: '',
    error: false,
    errorMessage: '',
    loading: false,
    disabled: true
  })


  const { username, password, error, errorMessage, loading, disabled } = user

  const router = useRouter()

  const handleStateChange = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value})
  }

  async function handleLoginData(response) {
    setUser({...user, loading: true})
    await response
    
    if (response) {
      const { message, status } = response
      
      if (status && status === false) {
        setUser({...user, error:true, errorMessage: 'Invalid username or password'})
      }
      if (message && message === "Login successful.") {
        console.log(message)
        router.push('/home')
      }
      console.log(response)
      console.log(JSON.stringify(response))
    }
  }


  useEffect(() => {
    if (username && password) {
      setUser({...user, disabled: false})
    } else {
      setUser({...user, disabled: true})
    }
  }, [password])
  

  async function handleLogin() {
    login(username, password, handleLoginData)
  }
  

  return (
    <Modal title="Login to your account">
      <div className="flex flex-col gap-8">
        <FormInput
          name="username"
          value={username}
          variant="text"
          placeholder="Username"
          onChange={handleStateChange}
        />

        <FormInput
          name="password"
          value={password}
          variant="password"
          placeholder="Password"
          onChange={handleStateChange}
          error={error}
          message={errorMessage}
        />
      </div>

      {/*
      <Link href="/?auth=forgotpassword" className="flex flex-col items-end link link-dart text-small my-1">
        Forgot Password?
      </Link>
      */}

      <Button disabled={disabled} className="w-full mt-[35px]" onClick={handleLogin}>
        {loading ? (
          <Icon icon="line-md:loading-loop" className="text-xl" />
        ) : 'Login'}
      </Button>
      {/* <Link passHref href="/home" className="flex mt-[35px]">
        <Button disabled={isDisabled}>Log In</Button>
      </Link> */}
    </Modal>
  )
}