import React, {FC, ComponentProps} from "react"
import classNames from "classnames"
import {Card} from "forest-mobile-ui";
import {Image} from "@/components/common/Image";
import {AiOutlineScan, AiOutlineQrcode} from "react-icons/ai";

export type HeaderProps = ComponentProps<'div'> & {}

export const Header: FC<HeaderProps> = ({className}) => {
  return (
    <div className={classNames("w-full h-[1.64rem] relative", className)}>
      <div className="w-full h-[1rem] bg-primary absolute top-0 left-0 z-0"/>
      <Card round className="absolute top-[0.46rem] left-[2.5%] h-[1.25rem] override:w-[95%]">
        <div className="text-primary flex justify-between items-center">
          <Image className="w-[0.65rem] h-[0.65rem] mt-1 rounded-full" src="/images/apple.png"/>
          <div className="flex-1 font-bold">小小刀</div>
          <AiOutlineScan className="text-3xl mr-5"/>
          <AiOutlineQrcode className="text-3xl"/>
        </div>
        <div className="flex justify-between px-5">
          <div className="flex flex-col items-center">
            <div className="font-bold">3</div>
            <div className="text-gray-500">优惠券</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold">100.0</div>
            <div className="text-gray-500">我的账户</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold">3</div>
            <div className="text-gray-500">电子券</div>
          </div>
        </div>
      </Card>
    </div>
  )
}
