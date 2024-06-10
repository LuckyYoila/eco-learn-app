import { Button } from "../ui/button";
import { Progress } from "@/components/ui/progress";

export default function CourseProgress({
  course,
  title,
  progress,
}: {
  course: String;
  title: String;
  progress: number;
}) {
const value = ((progress/8) * 100)
  return (
    <div className="py-2 flex justify-between">
      <div>
        <h1 className="text-base font-semibold">Course {course}</h1>
        <h3 className="text-sm text-gray-500">{title}</h3>
      </div>
      <div className="flex items-center space-x-4">
        <Progress value={value} className="min-w-[180px]" color="green" />
        <h3>{progress}/8</h3>
      </div>
        <div>
            <Button className="bg-defaultgreen text-white">Continue</Button>
        </div>
    </div>
  );
}
