import {FC} from "react";
import {Card} from "forest-mobile-ui";
import Image from "next/image"
import {HiOutlineShoppingCart} from "react-icons/hi2";

export const GoodsList: FC = () => {
  return (
    <div className="w-full flex flex-col gap-[0.15rem] pb-3">
      {
        new Array(100).fill(0).map((_, index) => <GoodsItem key={index}/>)
      }
    </div>
  )
}


const GoodsItem: FC = () => {
  return (
    <Card round className="h-[1.31rem] box-border py-[0.16rem]">
      <div className="flex items-center">
        <Image width={100} height={100} className="w-[0.93rem] h-[0.8rem]" src="/images/apple.png" alt=""/>
        <div className="flex flex-col w-full">
          <div>{"新疆小苹果 1.5KG"}</div>
          <div className="flex gap-2 mt-1">
            <div
              className="px-[0.1rem] py-[0.02rem] border-red-300 border-[0.02rem] rounded-[0.06rem] text-red-300 flex justify-center items-center box-border text-sm">
              特价
            </div>
            <div
              className="px-[0.1rem] py-[0.02rem] border-gray-300 border-[0.02rem] rounded-[0.06rem] text-gray-300 flex justify-center items-center box-border text-sm">
              24H发货
            </div>
          </div>
          <div className="mt-1 flex justify-between items-center">
            <div>
              <span className="text-red-300">￥20.9</span>
              <span>/箱</span>
            </div>
            <div
              className="h-[0.22rem] w-[0.22rem] rounded-full bg-primary flex justify-center items-center text-white">
              <HiOutlineShoppingCart/>
            </div>
          </div>
          <div className="text-gray-300">888 人已买过</div>
        </div>
      </div>
    </Card>
  )
}
