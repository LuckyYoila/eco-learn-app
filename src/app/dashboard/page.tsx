"use client";

import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import CourseProgress from "@/components/dashboard/CourseProgress";
import ProgressChart from "@/components/dashboard/ProgressChart";

import { useAppSelector } from "@/hooks/redux";
import usePeraWallet from "@/hooks/wallet";

import { MdOutlineChevronRight } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";

export default function Dashboard() {
  const user = useAppSelector((state) => state?.auth?.user);
  const { accountAddress, isConnectedToPeraWallet, handleConnectWalletClick } =
    usePeraWallet();
  return (
    <div className="space-y-4">
      <div className="md:flex items-center justify-between space-y-3">
        <div>
          <h1 className="font-semibold text-xl">Welcome {user?.firstName}</h1>
          <p>Did you know? Recycling one ton of paper saves 17 trees</p>
        </div>
        <div className="">
          <Button
            className="bg-defaultgreen h-12 rounded-lg"
            onClick={() => handleConnectWalletClick()}
          >
            {isConnectedToPeraWallet ? "Wallet Connected" : "Connect Wallet"}
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[100%] md:space-x-4 justify-between">
        <div className="md:w-[65%] flex flex-wrap lg:flex-nowrap lg:space-x-4 justify-between mb-4">
          <div className="m-auto sm:mx-0 mb-4 md:my-0 w-[80%] sm:w-[48%] md:w-[33%] min-h-[115px] border border-gray-200 bg-white rounded-lg p-3 space-y-2">
            <h1 className="text-base">Courses Completed</h1>
            <div className="flex justify-between ">
              <div className="space-y-1">
                <h1 className="font-semibold text-2xl">3/20</h1>
                <div className="text-red-700 space-x-1">
                  <Badge className="bg-red-300 text-red-700 p-0 px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                      />
                    </svg>
                    <span>5%</span>
                  </Badge>
                  <span className="text-sm">Low</span>
                </div>
              </div>
              <div className="rounded-full h-10 w-10 border border-gray-300"></div>
            </div>
          </div>
          <div className="m-auto sm:mx-0 mb-4 md:my-0 w-[80%] sm:w-[48%] md:w-[33%] min-h-[115px] border border-gray-200 bg-white rounded-lg p-3 space-y-2">
            <h1 className="text-base">Quizzes Taken</h1>
            <div className="flex justify-between ">
              <div className="space-y-1">
                <h1 className="font-semibold text-2xl">4/40</h1>
                <div className="text-red-700 space-x-1">
                  <Badge className="bg-red-300 text-red-700 p-0 px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                      />
                    </svg>
                    <span>5%</span>
                  </Badge>
                  <span className="text-sm">Low</span>
                </div>
              </div>
              <div className="rounded-full h-10 w-10 border border-gray-300"></div>
            </div>
          </div>
          <div className="m-auto sm:mx-0 mb-4 md:my-0 w-[80%] sm:w-[48%] md:w-[33%] min-h-[115px] border border-gray-200 bg-white rounded-lg p-3 space-y-2">
            <h1 className="text-base">Tokens Earned</h1>
            <div className="flex justify-between">
              <div className="space-y-1">
                <h1 className="font-semibold text-2xl">12000</h1>
                <div className="text-green-700 space-x-1">
                  <Badge className="bg-green-200 text-green-700 p-0 px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                      />
                    </svg>

                    <span>5%</span>
                  </Badge>
                  <span className="text-xs">Great job</span>
                </div>
              </div>
              <div className="rounded-full h-10 w-10 border border-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="m-auto sm:mx-0 mb-4 sm:mb-0 md:my-0 w-[80%] md:w-[35%]">
          <div className="w-[100%] border border-gray-200 bg-white min-h-[115px] rounded-lg p-3">
            <div className="flex justify-between">
              <div className="flex items-center space-x-1">
                <h1 className="font-semibold text-base text-gray-500">
                  Daily Streak
                </h1>
                <IoMdInformationCircleOutline className="size-4 stroke-1 fill-gray-500" />
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <Image
                    src={"/lightning.svg"}
                    alt=""
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <Image src={"/streaksgroup.svg"} alt="" layout="responsive" width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[100%] justify-between md:space-x-4 space-y-4 md:space-y-0">
        <div className="w-[80%] m-auto sm:mx-0 md:w-[65%] border border-gray-200 bg-white rounded-lg p-4 space-y-3">
          <div className="flex justify-between">
            <div className="flex items-center space-x-1">
              <h1 className="font-semibold text-base">Overall Progress</h1>
              <IoMdInformationCircleOutline className="size-4 stroke-1 fill-gray-500" />
            </div>
            <div className="flex items-center">
              <CiCalendarDate className="size-5 stroke-1 fill-black" />
              <Select>
                <SelectTrigger className="p-1 py-0 focus-visible:ring-0 text-xs font-semibold border-none">
                  <SelectValue placeholder="May 24 - May 31" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-[100%] ">
            <ProgressChart />
          </div>
        </div>
        <div className="w-[80%] m-auto sm:mx-0 md:w-[35%] border border-gray-200 bg-white rounded-lg">
          <div className="border-b border-gray-200 p-3">
            <h2 className="font-semibold">Mint NFTs</h2>
          </div>
          <div className="relative p-3 pb-0 border-b border-gray-200">
            <Image
              src={"/mintnfts.svg"}
              alt=""
              layout="responsive"
              width={100}
              height={100}
              className="m-0"
            />
          </div>
          <div className="p-2 pt-5 flex flex-row md:flex-col lg:flex-row justify-evenly lg:justify-center items-center md:space-x-0 lg:space-x-4 md:space-y-3 lg:space-y-0">
            <Button className="border-2 bg-white border-defaultgreen text-defaultgreen">
              Earn Token
            </Button>
            <Button className="bg-defaultgreen text-white">Mint NFTs</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[100%] justify-between md:space-x-4 space-y-4 md:space-y-0">
        <div className="w-[80%] m-auto sm:mx-0 md:w-[65%] border border-gray-200 bg-white rounded-lg p-4 space-y-3">
          <div className="flex justify-between">
            <h1 className="font-semibold text-base">Ongoing Courses</h1>
            <Link
              href="/dashboard/courses"
              className="flex items-center space-x-1"
            >
              <h1 className="text-sm">See all</h1>
              <MdOutlineChevronRight className="size-6" />
            </Link>
          </div>
          <CourseProgress
            course={"1"}
            title={"Understanding Climate Change"}
            progress={7}
          />
          <div className="border-b border-gray-50"></div>
          <CourseProgress
            course={"2"}
            title={"Our Environment Changes"}
            progress={6}
          />
        </div>
        <div className="w-[80%] m-auto sm:mx-0 md:w-[35%] border border-gray-200 bg-white rounded-lg">
          <div className="border-b border-gray-200 p-3">
            <h2 className="font-semibold">Crypto Conversion</h2>
          </div>
          <div className="border-b border-gray-200 p-3">
            <div className="relative p-3 pb-0 w-[80%] m-auto">
              <Image
                src={"/cryptoconvert.svg"}
                alt=""
                layout="responsive"
                width={100}
                height={100}
                className="m-0"
              />
            </div>
          </div>
          <div className="p-2 pt-5 flex justify-center">
            <Button className="bg-defaultgreen text-white">
              Convert to Crypto
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[100%] justify-between md:space-x-4 space-y-4 md:space-y-0">
        <div className="w-[80%] m-auto sm:mx-0 md:w-[65%] border border-gray-200 bg-white rounded-lg p-4 space-y-3">
          <div className="flex justify-between">
            <h1 className="font-semibold text-base">Leaderboard</h1>
            <Link
              href="/dashboard/leaderboard"
              className="flex items-center space-x-1"
            >
              <h1 className="text-sm">See all</h1>
              <MdOutlineChevronRight className="size-6" />
            </Link>
          </div>
          <div className="w-[100%] lg:w-[70%] m-auto flex items-end justify-evenly">
            <div className="relative">
              <div className="rounded-full w-[62px] h-[62px] lg:w-[71px] lg:h-[71px] bg-purple-800 flex items-center">
                <Avatar className="w-[58px] h-[58px] lg:w-[67px] lg:h-[67px] m-auto">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-2 right-6 rounded-full bg-purple-800 size-6 flex justify-center items-center">
                <h1 className="m-auto text-sm text-white">2</h1>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-full w-[70px] h-[70px]  lg:w-[84px] lg:h-[84px] bg-green-700 flex items-center">
                <Avatar className="w-[66px] h-[66px] lg:w-[80px] lg:h-[80px] m-auto">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-2 right-6 rounded-full bg-green-700 size-6 flex justify-center items-center">
                <h1 className="m-auto text-sm text-white">1</h1>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-full w-[62px] h-[62px] lg:w-[71px] lg:h-[71px] bg-orange-500 flex items-center">
                <Avatar className="w-[58px] h-[58px] lg:w-[67px] lg:h-[67px] m-auto">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute right-5 -bottom-2 lg:right-6 rounded-full bg-orange-500 size-6 flex justify-center items-center">
                <h1 className="m-auto text-sm text-white">3</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] m-auto sm:mx-0 md:w-[35%] border border-gray-200 bg-white rounded-lg">
          <div className="border-b border-gray-200 p-3">
            <h2 className="font-semibold">Never Stop Learning!</h2>
          </div>
          <div className="border-b border-gray-200 p-3 flex flex-col justify-between">
            <h3 className="text-xs text-gray-500">
              Learn and Earn wth our ever expanding course library
            </h3>
            <div className="relative p-3 pb-0 w-[80%] m-auto">
              <Image
                src={"/lEARN.svg"}
                alt=""
                layout="responsive"
                width={100}
                height={100}
                className="m-0"
              />
            </div>
          </div>
          <div className="p-2 pt-5 flex justify-center">
            <Button asChild className="bg-defaultgreen text-white">
              <Link href="/dashboard/courses">Explore More Courses</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
