"use client";

import Image from "next/image";
import { useState } from "react";

export default function QuizFrame() {
  const [src1, setSrc1] = useState("/quizframe/greypolygon.svg");
  const [src2, setSrc2] = useState("/quizframe/greypolygon.svg");
  const [src3, setSrc3] = useState("/quizframe/greypolygon.svg");
  const [src4, setSrc4] = useState("/quizframe/greypolygon.svg");

  return (
    <div className="w-[100%] relative">
      <div className="absolute w-[100%]">
        <div className="relative w-[40%] m-auto -mt-20">
          <Image
            src={"/quizbg.png"}
            alt=""
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="relative w-[100%] md:w-[90%] lg:w-[80%] m-auto text-center flex items-center justify-center">
        <div className="flex items-center">
          <div className="relative hidden md:block">
            <Image
              src={"/quizframe/Divider.svg"}
              alt=""
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className="relative">
            <Image
              src={"/quizframe/Polygon 3.svg"}
              alt=""
              layout="responsive"
              width={100}
              height={100}
            />
          </div>

          <div className="relative hidden md:block">
            <Image
              src={"/quizframe/Dividers.svg"}
              alt=""
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="absolute top-0 text-center w-[70%] lg:w-[52%] h-[100%] flex items-center">
          <div className="space-y-1 lg:space-y-3">
            <h1 className="font-extrabold font-base md:text-xl">1/5</h1>
            <p className="font-sm md:font-base font-semibold">
              Which of the following gases is considered a major greenhouse gas?
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto space-y-6 pt-8">
        <div className="w-[100%] lg:flex justify-between space-y-5">
          <div
            className="w-[70%] sm:w-[90%] md:w-[70%] lg:w-[45%] m-auto lg:m-0 relative flex items-center"
            onMouseEnter={() => setSrc1("/quizframe/smallpoly.svg")}
            onMouseLeave={() => setSrc1("/quizframe/greypolygon.svg")}
          >
            <div className="w-[100%] flex items-center">
              <div className="relative hidden md:block">
                <Image
                  src={"/quizframe/graydivide.svg"}
                  alt=""
                  layout="responsive hidden md:block"
                  width={100}
                  height={100}
                />
              </div>
              <div className="relative">
                <Image
                  src={src1}
                  alt=""
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <div className="absolute top-0 w-[100%] h-[100%] flex space-x-3 items-center justify-normal pl-10 md:pl-28">
                <h1 className="font-semibold">A:</h1>
                <h1>Solar variations</h1>
              </div>
            </div>
          </div>
          <div
            className="w-[70%] sm:w-[90%] md:w-[70%]  lg:w-[45%] m-auto lg:m-0 relative flex items-center"
            onMouseEnter={() => setSrc2("/quizframe/smallpoly.svg")}
            onMouseLeave={() => setSrc2("/quizframe/greypolygon.svg")}
          >
            <div className="w-[100%] flex items-center">
              <div className="relative">
                <Image
                  src={src2}
                  alt=""
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <div className="relative hidden md:block">
                <Image
                  src={"/quizframe/graydivide.svg"}
                  alt=""
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <div className="absolute top-0 w-[100%] h-[100%] flex space-x-3 items-center justify-normal pl-10">
                <h1 className="font-semibold">B:</h1>
                <h1>Human activities</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100% lg:flex justify-between space-y-5">
          <div
            className="w-[70%] sm:w-[90%] md:w-[70%]  lg:w-[45%] m-auto lg:m-0 relative flex items-center"
            onMouseEnter={() => setSrc3("/quizframe/smallpoly.svg")}
            onMouseLeave={() => setSrc3("/quizframe/greypolygon.svg")}
          >
            <div className="w-[100%] flex items-center">
              <div className="relative hidden md:block">
                <Image
                  src={"/quizframe/graydivide.svg"}
                  alt=""
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <div className="relative">
                <Image
                  src={src3}
                  alt=""
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <div className="absolute top-0 w-[100%] h-[100%] flex space-x-3 items-center justify-normal pl-10 md:pl-28">
                <h1 className="font-semibold">C:</h1>
                <h1>Volcanic eruptions</h1>
              </div>
            </div>
          </div>
          <div
            className="w-[70%] sm:w-[90%] md:w-[70%]  lg:w-[45%] m-auto lg:m-0 relative flex items-center"
            onMouseEnter={() => setSrc4("/quizframe/smallpoly.svg")}
            onMouseLeave={() => setSrc4("/quizframe/greypolygon.svg")}
          >
            <div className="w-[100%] flex items-center">
              <div className="relative">
                <Image
                  src={src4}
                  alt=""
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <div className="relative hidden md:block">
                <Image
                  src={"/quizframe/graydivide.svg"}
                  alt=""
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <div className="absolute top-0 w-[100%] h-[100%] flex space-x-3 items-center justify-normal pl-10">
                <h1 className="font-semibold">D:</h1>
                <h1>Ocean currents</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
