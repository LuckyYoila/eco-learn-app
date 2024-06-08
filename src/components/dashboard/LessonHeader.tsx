export default function LessonHeader({number, title, subhead}:{number:String, title:String, subhead:String}) {
    return (
        <div className="w-[100%] space-y-3">
            <div className="w-[100%] bg-gray-700 rounded-lg h-80"></div>
            <div className="flex space-x-1 items-center">
                <h1 className="font-semibold text-xl">{"LESSON " + number}:</h1>
                <h1 className="font-semibold text-2xl capitalize">{title}</h1>
            </div>
            <h2 className="text-gray-500 text-base">{subhead}</h2>
        </div>
    )
}