import {FC} from "react";
import {AiOutlineLeft} from "react-icons/ai";
import {SearchInput} from "../../common/SearchInput";
import {HiOutlineShoppingCart} from "react-icons/hi2";

export const Header: FC = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 py-[0.1rem] px-[0.1rem]">
      <AiOutlineLeft className="text-xl"/>
      <SearchInput className="flex-1" value="春菜" readonly={true}/>
      <HiOutlineShoppingCart className="text-xl"/>
    </div>
  )
}
