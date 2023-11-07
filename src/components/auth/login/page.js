"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import FormInput from "@/components/common/FormInput/FormInput";
import Button from "@/components/common/Button/Button"
import Modal from "@/components/layout/Modal/Modal";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { userLogin } from "@/api/login";
import { setCookie } from "cookies-next";

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

  // async function handleLoginData(response) {
  //   setUser({...user, loading: true})
  //   await response
    
  //   if (response) {
  //     const { message, status } = response
      
  //     if (status && status === false) {
  //       setUser({...user, error:true, errorMessage: 'Invalid username or password'})
  //     }
  //     if (message && message === "Login successful.") {
  //       console.log(message)
  //       router.push('/home')
  //     }
  //     console.log(response)
  //     console.log(JSON.stringify(response))
  //   }
  // }
  const handleLogin = async () => {
    setUser({...user, loading: true})
    const response = await userLogin(username, password)
    if(response && response.success){
      console.log(response.role)
      const token = {
        name: response.name,
        accessToken: response.accessToken,
        accessTokenExpiration: response.accessTokenExpiration,
        refreshToken: response.refreshToken,
        refreshTokenExpiration: response.refreshTokenExpiration,
        role:response.role,
      }
      setCookie('userToken', token, {
        maxAge: response.accessTokenExpiration,
        path: '/',
        secure: true
      })
      router.push("/home")
      setUser({...user, loading: false})
    }else{
      setUser({...user, loading:false, error: true, errorMessage: response.error })
      console.log(response)
    }
  }

  useEffect(() => {
    if (username && password) {
      setUser({...user, disabled: false})
    } else {
      setUser({...user, disabled: true})
    }
  }, [password])
  
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