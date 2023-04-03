import {FC} from "react";
import {AiOutlineLeft} from "react-icons/ai";
import {CategoryList} from "./CategoryList";
import {HiOutlineShoppingCart} from "react-icons/hi2";
import {useRouter} from "next/router";
import {useMemoizedFn} from "ahooks";

export const Header: FC = () => {
  let router = useRouter();

  const handleBack = useMemoizedFn(() => router.back()
  )

  return (
    <div className="flex items-center text-2xl mx-2 gap-2 py-2">
      <AiOutlineLeft onClick={handleBack} />
      <CategoryList/>
      <HiOutlineShoppingCart/>
    </div>
  )
}
