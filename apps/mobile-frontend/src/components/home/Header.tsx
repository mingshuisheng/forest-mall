import {FC} from "react";
import {HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineChevronDown} from "react-icons/hi2";
import {SearchInput} from "../common/SearchInput";
import {useRouter} from "next/router";

export const Header: FC = () => {
  let router = useRouter();

  return (
    <header className="w-full bg-primary flex py-2 px-2 items-center justify-between box-border">
      <div className="flex gap-1 items-center text-white text-[0.14rem]">
        北京
        <HiOutlineChevronDown className="text-[0.15rem]"/>
      </div>
      <SearchInput readonly={true} className="flex-1" value="西瓜" onClick={() => router.push("/search")}/>
      <HiOutlineChatBubbleOvalLeftEllipsis className="text-white text-[0.2rem]"/>
    </header>
  )
}
