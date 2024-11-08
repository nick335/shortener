"use client"
import { useDispatch, useSelector } from "react-redux";

import AdminsCardRow from "@/components/common/cards/HomeCard/card-rows/AdminsCardRow";
import Button from "@/components/common/Button/Button";
import DashboardChart from "@/components/common/DashboardChart/DashboardChart";
import HomeCard from "@/components/common/cards/HomeCard/HomeCard";
import UrlRow from "@/components/common/cards/HomeCard/card-rows/UrlRow";
import { showCreateUrlPopUp } from "@/redux/features/createUrl/createUrlSlice";
import { showInviteAdminPopUp } from "@/redux/features/inviteAdmin/inviteAdminSlice";
import UrlsHomeCard from "@/components/home/UrlsHomeCard";


export default function HomePage() {
  const admins = useSelector(state => state.admins)
  const urls = useSelector(state => state.urlsDemo.urlsCreated)
  const role = useSelector(state => state.user.userDetails.role)

  const dispatch = useDispatch()

  const handleDisplayCreatePopUp = () => {
    dispatch(showCreateUrlPopUp('CREATE'))
  }

  const handleDisplayInviteAdminPopUp = () => {
    dispatch(showInviteAdminPopUp())
  }
  
  return (
    <div className="homepage flex flex-col items-center xl:grid grid-cols-2 gap-y-10 gap-x-[72px] lg:items-stretch relative">

      <HomeCard clipArtVariant="dart" goTo="Dashboard" className="flex">
        <DashboardChart
          variant="bar"
          title="Link Performance"
          labels={["URLs", "Admins", "Clicks", "Shares"]}
        />
      </HomeCard>

      <HomeCard clipArtVariant="swift" goTo="URLs" className="lg:order-1">
        <UrlsHomeCard />      

        <Button icon="link" onClick={handleDisplayCreatePopUp}>
          Create new URL
        </Button>
      </HomeCard>


      { role === 'SUPER_ADMIN' && <HomeCard goTo="Admins" clipArtVariant="ruby">
        <div className="flex flex-col justify-between text-center gap-[15px]">
          {
            [...admins]
            .sort((a, b) => {
              return b.dateJoined - a.dateJoined;
            })
            .slice(0, 3)
            .map(({ ...props }, i) => (
              <AdminsCardRow key={i} {...props} />
            ))
          }
        </div>

        <Button onClick={handleDisplayInviteAdminPopUp} variant="ruby" icon="people" className="w-full my-[25px] lg:!mt-[35px] lg:!mb-[25px]">
          Invite Admin
        </Button>
      </HomeCard>}
    </div>
  )
}