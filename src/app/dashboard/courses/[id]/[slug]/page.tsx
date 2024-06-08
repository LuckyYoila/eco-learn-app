import Link from "next/link";
import Image from "next/image";

import { FaCheckSquare } from "react-icons/fa";

import LessonHeader from "@/components/dashboard/LessonHeader";
export default function Lesson() {
  return (
    <div className="w-[100%] space-y-6 px-10">
      <LessonHeader
        number={"1"}
        title={"the basics of climate change"}
        subhead="Meaning, history and causes of climate change"
      />
      <div className="space-y-3">
        <div className="flex space-x-6 w-[100%] bg-white">
          <Link href={"#overview"} className="block">
            <div className="border-b-2 border-white font-semibold hover:text-defaultgreen hover:border-defaultgreen py-3 px-4">
              <h2>Overview</h2>
            </div>
          </Link>
          <Link href={"#objectives"} className="block">
            <div className="border-b-2 border-white font-semibold hover:text-defaultgreen hover:border-defaultgreen py-3 px-4">
              <h2>Objectives</h2>
            </div>
          </Link>
          <Link href={"#lecture"} className="block">
            <div className="border-b-2 border-white font-semibold hover:text-defaultgreen hover:border-defaultgreen py-3 px-4">
              <h2>Lecture</h2>
            </div>
          </Link>
          <Link href={"#reviews"} className="block">
            <div className="border-b-2 border-white font-semibold hover:text-defaultgreen hover:border-defaultgreen py-3 px-4">
              <h2>Reviews</h2>
            </div>
          </Link>
        </div>
        <div id="overview" className="px-4 py-8 space-y-4 bg-gray-200 rounded-md">
          <h1 className="font-extrabold text-2xl">Overview</h1>
          <p className="text-gray-500">Welcome to your first step in becoming a climate hero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, d</p>
          <p className="text-gray-500">This lesson will take you through the fundamentals of climate change, including its causes, effects, and the importance Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ipsum, facilis oris.</p>
          <p className="text-gray-500">Let{"'"}s dive in!</p>
        </div>
      </div>
      <div id="objectives" className="px-4 py-8 space-y-4 bg-lightgreen rounded-md">
        <h1 className="font-extrabold text-2xl">Learning Objectives</h1>
        <div className="flex items-center space-x-1">
        <FaCheckSquare className="fill-defaultgreen" />
        <p>Understand what climate change is and why it matter</p>
        </div>
        <div className="flex items-center space-x-1">
        <FaCheckSquare className="fill-defaultgreen" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, adipisci fugiat. Quas inventore enim quibusdam</p>
        </div>
        <div className="flex items-center space-x-1">
        <FaCheckSquare className="fill-defaultgreen" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis unde sapiente, suscipit atque fugiat nemo voluptate saepe autem!</p>
        </div>
        <div className="flex items-center space-x-1">
        <FaCheckSquare className="fill-defaultgreen" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis unde sapiente, suscipit atque fugiat nemo voluptate saepe autem!</p>
        </div>
      </div>
      <div id="lecture" className="px-3 py-5 space-y-4">
      <h1 className="font-extrabold text-2xl">Impact of Climate Change on Weather Patterns</h1>
      <div className="relative w-[100%]">
            <Image src={"/polarbears.png"} alt="" layout="responsive" width={100} height={100} />
      </div>
      </div>
      <div id="reviews" className="px-4 py-8 space-y-4">
      <h1 className="font-extrabold text-2xl">Reviews</h1>
      </div>
    </div>
  );
}
