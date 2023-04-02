import {FC} from "react";
import {HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineChevronDown, HiOutlineMagnifyingGlass} from "react-icons/hi2";

export const Header: FC = () => {
  return (
    <header className="w-full bg-primary flex py-2 px-2 items-center justify-between box-border">
      <div className="flex gap-1 items-center text-white text-[0.14rem]">
        北京
        <HiOutlineChevronDown className="text-[0.15rem]"/>
      </div>
      <div className="rounded flex-1 h-[0.3rem] bg-white flex items-center mx-2">
        <HiOutlineMagnifyingGlass className="pl-2 text-[0.27rem] shrink-0 text-gray-400"/>
        <input type="text" readOnly={true}
               className="w-[calc(100%-0.48rem)] bg-transparent pl-1 read-only:text-gray-400 text-black" value="西瓜"/>
      </div>
      <HiOutlineChatBubbleOvalLeftEllipsis className="text-white text-[0.2rem]"/>
    </header>
  )
}
