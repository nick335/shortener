'use client'
import WithAuth from "@/components/auth/WithAuth";
import CreateUrl from "@/components/common/CreateUrl/CreateUrl";
import Header from "@/components/layout/Header/Header";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function UserLayout({ children }) {
  return (
    <main className="grow flex flex-col">
      <Header />

      <div className="grow flex min-h-52 lg:max-h-[calc(100vh-115px)] relative !overflow-hidden lg:bg-[#F8F8F8]">
        <Sidebar />

        <div className="overflow-scroll grow p-6 lg:py-10 lg:px-[100px] flex flex-col gap-10 relative">
          <CreateUrl />

          {children}
        </div>
      </div>
      <ToastContainer />
    </main>
  )
}

export default WithAuth(UserLayout);