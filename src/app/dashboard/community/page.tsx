import ListItem from "@/components/dashboard/ListItem"
import StoryIcon from "@/components/dashboard/StoryIcon";
import CreatePost from "@/components/dashboard/CreatePost";
import UserPost from "@/components/dashboard/UserPost";

export default function Community() {
  return (
    <div className="w-[100%] md:flex pt-3 md:space-x-8">
      <div className="w-[90%] m-auto md:m-0 md:w-[70%] px-5 space-y-5">
        <div className="flex space-x-8">
            <StoryIcon name={"my story"} story={true} />
            <StoryIcon name={"sissy jones"} story={true} />
            <StoryIcon name={"mike tyson"} story={true} />
            <StoryIcon name={"kambili"} story={true} />
            <StoryIcon name={"sissy jones"} story={true} />
        </div>
        <CreatePost />
        <UserPost username={"Bunmi Bello"} time={"56 mins"} likes={"2.8K"} comments={"7"} post={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolores fugit aperiam, natus ipsa eos itaque a, optio consequuntur quisquam ad!"} />
        <UserPost username={"Timi Collins"} time={"56 mins"} likes={"2.8K"} comments={"7"} post={"dolor sit amet consectetur adipisicing elit. Ipsam dolores fugit aperiam, natus ipsa eos itaque a, optio consequuntur"} />
      </div>
      <div className="w-[70%] m-auto lg:w-[30%] space-y-6 mt-10 md:mt-0">
        <div className="w-[100%] bg-white p-3 space-y-3 border border-gray-100 rounded-md">
          <div className="border-b border-gray-100 p-2">
            <h1>Your Eco-Friends</h1>
          </div>
          <div className="space-y-3">
            <ListItem name={"Ralph edwards"} story={true} />
            <ListItem name={"savannah nguyen"} story={false} />
            <ListItem name={"James charles"} story={false} />
            <ListItem name={"Kiki leakes"} story={true} />
            <ListItem name={"James charles"} story={false} />
          </div>
          <h1 className="text-defaultgreen ml-2">View all</h1>
        </div>
        <div className="w-[100%] bg-white p-3 space-y-3 border border-gray-100 rounded-md">
          <div className="border-b border-gray-100 p-2">
            <h1>Suggested paged</h1>
          </div>
          <div className="space-y-3">
            <ListItem name={"green innovators"} story={false} />
            <ListItem name={"eco educators"} story={false} />
            <ListItem name={"recycling champions"} story={false} />
            <ListItem name={"clean energy advocates"} story={false} />
            <ListItem name={"Community green warriors"} story={false} />
          </div>
          <h1 className="text-defaultgreen ml-2">View all</h1>
        </div>
      </div>
    </div>
  );
}
