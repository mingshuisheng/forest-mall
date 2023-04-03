import {FC} from "react";
import {TabBar, TabBarItem, TabBarItemProps} from "forest-mobile-ui";
import {HiOutlineHome, HiOutlineBars3, HiOutlineShoppingCart, HiOutlineUser} from "react-icons/hi2";
import Link from "next/link";
import {useRouter} from "next/router";

type ItemType = TabBarItemProps & { href: string }

const items: ItemType[] = [
  {
    href: "/",
    icon: <HiOutlineHome/>,
    children: "主页"
  },
  {
    href: "/sort",
    icon: <HiOutlineBars3/>,
    children: "分类"
  },
  {
    href: "/cart",
    icon: <HiOutlineShoppingCart/>,
    children: "购物车"
  },
  {
    href: "/user",
    icon: <HiOutlineUser/>,
    children: "我的"
  },
]


export const PageFooter: FC = () => {
  let router = useRouter();

  return (
    <footer className="h-max w-full">
      <TabBar activeKey={router.pathname}>
        {
          items.map(item => {
            return (
              <Link href={item.href} key={item.href}>
                <TabBarItem {...item}/>
              </Link>
            )
          })
        }
      </TabBar>
    </footer>
  )
}
