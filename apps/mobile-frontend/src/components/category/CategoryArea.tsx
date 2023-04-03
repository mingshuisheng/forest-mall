import React, {ComponentProps, FC} from "react"
import classNames from "classnames";
import {Card, Divider, SideBar, SideBarItem, Tag, Flex1Overflow} from "forest-mobile-ui";
import {Image} from "@/components/common/Image";
import {HiOutlineShoppingCart} from "react-icons/hi2";

export const CategoryArea: FC<ComponentProps<'div'>> = ({className, ...restProps}) => {
  return (
    <div className={classNames("bg-white flex items-start content-start", className)} {...restProps}>
      <SideBar className="flex-shrink-0 bg-gray-300">
        <SideBarItem>好货推荐</SideBarItem>
        <SideBarItem>热带水果</SideBarItem>
        <SideBarItem>樱桃</SideBarItem>
        <SideBarItem>柑橘橙柚</SideBarItem>
        <SideBarItem>苹果梨蕉</SideBarItem>
        <SideBarItem>奇异果</SideBarItem>
        <SideBarItem>瓜类葡萄</SideBarItem>
        <SideBarItem>茄果</SideBarItem>
        <SideBarItem>菌菇</SideBarItem>
        <SideBarItem>葱姜蒜</SideBarItem>
      </SideBar>
      <Flex1Overflow className="flex flex-col">
        {
          new Array(10).fill(0).map((_, index) => (
            <Card key={index} mode="divider" className="override:px-0">
              <div className="flex w-full h-[1.31rem] items-center">
                <Image src="/images/apple.png" className="w-[0.93rem] h-[0.8rem]"/>
                <div className="flex flex-col h-full ml-1 w-full pr-3">

                  <div className="mt-[0.15rem]">
                    {"新疆小苹果 1.5KG"}
                  </div>

                  <div className="flex text-gray-500 gap-1">
                    <span>特级苹果</span>
                    <Divider direction="vertical"/>
                    <span>1500g</span>
                    <Divider direction="vertical"/>
                    <span>进口</span>
                  </div>

                  <div className="mt-2 flex gap-2">
                    <Tag color="danger" fill="outline" round className="override:px-1 override:py-1 text-sm">特价</Tag>
                    <Tag fill="outline" round className="override:px-1 override:py-1 text-sm">24H发货</Tag>
                  </div>

                  <div className="mt-1 flex justify-between">
                    <div>
                      <span className="text-red-300">￥</span>
                      <span className="text-red-300 font-bold">20.9</span>
                      <span>/箱</span>
                    </div>
                    <div className="h-[0.22rem] w-[0.22rem] rounded-full bg-primary flex justify-center items-center text-white">
                      <HiOutlineShoppingCart/>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))
        }
      </Flex1Overflow>
    </div>
  )
}
