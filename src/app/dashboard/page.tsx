"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAppSelector } from "@/hooks/redux";

export default function Dashboard() {
  const user = useAppSelector((state) => state?.auth?.user);
  return (
    <div className="">
      <div className="md:flex items-center justify-between py-2 space-y-3">
        <div>
          <h1 className="font-semibold text-xl">Welcome {user?.firstName}</h1>
          <p>Did you know? Recycling one ton of paper saves 17 trees</p>
        </div>
        <div className="">
          <Button className="bg-defaultgreen h-12 rounded-lg">
            Connect Pera Wallet
          </Button>
        </div>
      </div>
      <div className="lg:flex w-[100%] py-8 lg:space-x-4 justify-between">
        <div className="lg:w-[65%] flex flex-wrap lg:flex-nowrap lg:space-x-4 justify-between mb-4">
          
            <div className="mb-4 md:my-0 w-[48%] md:w-[33%] h-fit border border-gray-200 bg-white rounded-lg p-3 space-y-2">
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
            <div className="mb-4 md:my-0 w-[48%] md:w-[33%] h-fit border border-gray-200 bg-white rounded-lg p-3 space-y-2">
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
            <div className="mb-4 md:my-0 w-[48%] md:w-[33%] h-fit border border-gray-200 bg-white rounded-lg p-3 space-y-2">
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
        <div className="w-[35%] h-[900px]">
          <div className="w-[100%] border border-gray-200 bg-white h-[113px] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
