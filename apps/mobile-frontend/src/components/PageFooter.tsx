import {ComponentProps, FC} from "react";
import {TabBar, TabBarItem, TabBarItemProps} from "forest-mobile-ui";
import {HiOutlineHome, HiOutlineBars3, HiOutlineShoppingCart, HiOutlineUser} from "react-icons/hi2";
import Link from "next/link";
import {useRouter} from "next/router";
import classNames from "classnames";

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

type PageFooterProps = ComponentProps<'div'>

export const PageFooter: FC<PageFooterProps> = ({className}) => {
  let router = useRouter();

  return (
    <footer className={classNames("h-max w-full shadow-footer", className)}>
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
