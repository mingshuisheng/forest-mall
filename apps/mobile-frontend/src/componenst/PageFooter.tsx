import {FC} from "react";
import {TabBar, TabBarItem} from "forest-mobile-ui";
import {HiOutlineHome, HiOutlineBars3, HiOutlineShoppingCart, HiOutlineUser} from "react-icons/hi2";

export const PageFooter: FC = () => {
  return(
    <footer className="h-max w-full">
      <TabBar>
        <TabBarItem href="#" icon={<HiOutlineHome/>}>主页</TabBarItem>
        <TabBarItem href="#" icon={<HiOutlineBars3/>}>分类</TabBarItem>
        <TabBarItem href="#" icon={<HiOutlineShoppingCart/>}>购物车</TabBarItem>
        <TabBarItem href="#" icon={<HiOutlineUser/>}>我的</TabBarItem>
      </TabBar>
    </footer>
  )
}
