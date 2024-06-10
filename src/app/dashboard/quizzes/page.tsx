import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import QuizModule from "@/components/dashboard/QuizModule";

const quizList = [
  {
    title: "Understanding Climate Change",
    description: "Meaning, history, causes of climate change",
    id: "1",
    questions: [
      {
        question: "What is climate change?",
        answer: 1,
        options: ["Solar variations", "Human activities", "Volcanic eruptions", "Ocean currents" ],

      },
    
      {
        question: "Which of the following gases is considered a major greenhouse gas?",
        answer: 2,
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon" ],

      },
      {
        question: "What is the main effect of rising global temperatures on polar ice caps?",
        answer: 2,
        options: ["They expand", "They remain stable", "They melt", "They thicken" ],

      },
      {
        question: "Which renewable energy source relies on wind to generate electricity?",
        answer: 2,
        options: ["Solar power", "Hydroelectric power", "Wind power", "Geothermal power" ],

      },
      {
        question: "What international agreement aims to limit global warming to well below 2 degrees Celsius?",
        answer: 1,
        options: ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Basel Convention" ],

      },
    ],
  },
  {
    title: "Effects of Climate Change",
    description: "Impact of climate change on weather patterns",
    id: "2",
  },
  {
    title: "The Role of Science and Data",
    description:
      "Climate models and the role of data collection in understanding climate trends",
    id: "3",
  },
];

export default function Quizzes() {
  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <div>
          <h1 className="font-semibold text-xl">Your Quizzes</h1>
          <p>
            Review and complete quizzes to test your knowledge and earn rewards.
          </p>
        </div>
        <div className="">
          <Select>
            <SelectTrigger className="p-1 py-0 focus-visible:ring-0 text-sm border-gray-100 text-gray-500">
              <SelectValue placeholder="Sort by: All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Environment</SelectItem>
              {/* <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem> */}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap m-auto w-[98%] py-8 justify-between">
        <QuizModule
          status={"Completed"}
          course={"1"}
          lesson={"1"}
          title={"the basics of climate change"}
        ></QuizModule>
        {/* <QuizModule status={"Pending"} course={"1"} lesson={"2"} title={"the greenhouse effect explained"}></QuizModule>
        <QuizModule status={"Completed"} course={"1"} lesson={"1"} title={"the basics of climate change"}></QuizModule>
        <QuizModule status={"Completed"} course={"1"} lesson={"1"} title={"the basics of climate change"}></QuizModule> */}
      </div>
    </div>
  );
}
