import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Completed() {
  return (
    <div className="py-2 space-y-2 w-[100%]">
      <div className="text-center">
        <h1 className="text-2xl font-semibold ">Congratulations, Gabriella!</h1>
        <p>
          You have successfully completed the quiz on Understanding Climate
          Change
        </p>
      </div>
    
      <div className="relative w-[30%] m-auto text-center flex items-center justify-center">
        <div className="relative">
          <Image
            src={"/quizcomplete.svg"}
            alt=""
            layout="responsive"
            width={100}
            height={100}
            className="z-40"
          />
        </div>
        <div className="absolute top-0 text-center w-[70%] h-[100%] flex items-center">
          <div className="relative m-auto text-2xl font-semibold">
            <h1>You have earned</h1>
            <h1>50 Eco Coins</h1>
          </div>
        </div>
      </div>

      <div className="flex relative w-[60%] m-auto justify-center space-x-6">
        <div>
          <Button className="bg-defaultgreen text-white">Redeem Reward</Button>
        </div>
        <div>
          <Button className="bg-white text-defaultgreen ring-1 ring-defaultgreen hover:text-white">Continue Learning</Button>
        </div>
      </div>
    </div>
  );
}
