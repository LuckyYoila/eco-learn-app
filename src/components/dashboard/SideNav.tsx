"use client"

import { usePathname } from "next/navigation"
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { VscLibrary } from "react-icons/vsc";
import { GoHome, GoQuestion } from "react-icons/go";
import { TbFileDescription, TbHeadset } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { CiMedicalCross } from "react-icons/ci";
import { TbPhotoHexagon } from "react-icons/tb";
import { LiaCoinsSolid, LiaChartBarSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { CgToolbox } from "react-icons/cg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/hooks/redux";

export default function SideNav() {
  const path = usePathname()
  const user = useAppSelector((state) => state?.auth?.user);
  return (
    <div className="fixed h-full w-[18%] bg-white p-2 z-50">
      <div className="h-16 w-[100%] p-2 mb-2 z-50">
        <Image
          src="/dashlogo.svg"
          alt="icon"
          width={100}
          height={100}
          className="w-[100%]"
        />
      </div>
      <div className="space-y-2">
        <NavLink href="/dashboard">
          <div>
            <GoHome className={`size-6 ${path == "/dashboard" ? "fill-black" : "fill-gray-600"}`} />
          </div>
          <h1>Dashboard</h1>
        </NavLink>
        <NavLink href="#">
          <div>
            <VscLibrary className={`size-6 ${path == "/dashboard/courses" ? "fill-black" : "fill-gray-600"}`} />
          </div>
          <h1>Courses</h1>
        </NavLink>

        <NavLink href="/dashboard/quizzes">
          <div>
            <GoQuestion className={`size-5 mr-1 ${path == "/dashboard/quizzes" ? "fill-black" : "fill-gray-600"}`} />
          </div>
          <h1>Quizzes</h1>
        </NavLink>

        <NavLink href="#">
          <div>
            <TbFileDescription className={`size-5 stroke-2 mr-1 ${path == "/dashboard/rewards" ? "stroke-black" : "stroke-gray-600"}`} />
          </div>
          <h1>Rewards</h1>
        </NavLink>

        <NavLink href="#">
          <div>
            <CiMedicalCross className={`size-6 stroke-1 mr-1 ${path == "/dashboard/tokenwallet" ? "stroke-black" : "stroke-gray-600"}`} />
          </div>
          <h1>Token Wallet</h1>
        </NavLink>

        <NavLink href="#">
          <div>
            <TbPhotoHexagon className={`size-5 stroke-2 mr-1 ${path == "/dashboard/mintnfts" ? "stroke-black" : "stroke-gray-600"}`} />
          </div>
          <h1>Mint NFTs</h1>
        </NavLink>

        <NavLink href="#">
          <div>
            <LiaCoinsSolid className={`size-6 ${path == "/dashboard/converttokens" ? "fill-black" : "fill-gray-600"}`} />
          </div>
          <h1>Convert Tokens</h1>
        </NavLink>

        <NavLink href="#">
          <div>
        <LiaChartBarSolid className={`size-5 ml-1 ${path == "/dashboard/leaderboard" ? "fill-black" : "fill-gray-600"}`} />
          </div>
          <h1>Leaderboard</h1>
        </NavLink>

        <NavLink href="#">
          <div>
            <PiUsersThree className={`size-6 ${path == "/dashboard/community" ? "fill-black" : "fill-gray-600"}`} />
          </div>
          <h1>Community</h1>
        </NavLink>
        <div className="pt-1 border-b border-gray-100"></div>
      </div>
      <div className="space-y-1 absolute bottom-0 w-[94%]">
        <NavLink href="#">
          <div>
            <IoSettingsOutline className={`size-6 ${path == "/dashboard/settings" ? "fill-black" : "fill-gray-600"}`} />
          </div>
          <h1>Settings</h1>
        </NavLink>
        <NavLink href="#">
          <div>
            <TbHeadset className={`size-6 stroke-2 ${path == "/dashboard/helpcenter" ? "stroke-black" : "stroke-gray-500"}`} />
          </div>
          <h1>Help Center</h1>
        </NavLink>
        <NavLink href="#">
          <div>
            <CgToolbox className={`size-6 stroke-1 ${path == "/dashboard/refer" ? "stroke-black" : "stroke-gray-600"}`} />
          </div>
          <h1>Refer family & friends</h1>
        </NavLink>
        <div className="pt-2">
          <NavLink href="#">
            <div className="p-1 rounded-full bg-gradient-to-b from-defaultgreen to-lightpurple">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="truncate">
              <h1 className="font-semibold text-sm">{`${user?.firstName} ${user?.lastName}`}</h1>
              <span>{user?.email}</span>
            </div>
            <div>
              <LuLogOut className={`size-5 stroke-1 ${path == "/dashboard/refer" ? "stroke-black" : "stroke-gray-600"}`} />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
