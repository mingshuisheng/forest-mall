import {FC} from "react";
import {Card, Center, Tag} from "forest-mobile-ui";
import Image from "next/image"
import {HiOutlineShoppingCart} from "react-icons/hi2";

export const GoodsList: FC = () => {
  return (
    <div className="w-full pb-3">
      <div className="flex justify-evenly py-[0.2rem] sticky top-0 bg-white">
        <div>价格</div>
        <div>销量</div>
        <div>筛选</div>
      </div>
      <Center className="mt-3 px-[0.12rem]">
        <div className="w-full flex justify-between items-start flex-wrap gap-y-5">
          {
            new Array(2).fill(0).map((_, index) => {
              return (
                <Card key={index} className="override:w-[48.5%] override:h-[2.3rem] box-border flex flex-col">
                  <Image width={100} height={100} className="w-[1.47rem] h-[1.24rem]" src="/images/apple.png" alt=""/>
                  <div className="text-[0.14rem]">{"新疆小苹果 1.5KG"}</div>
                  <div className="mt-5 flex gap-2">
                    <Tag round fill="outline" color="danger" className="override:px-1 override:py-0">特价</Tag>
                    <Tag round fill="outline" className="override:px-1 override:py-0">24H发货</Tag>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <div>
                      <span className="text-red-300">￥20.9</span>
                      <span className="text-sm">/箱</span>
                      <span className="ml-1 text-sm line-through text-gray-600">￥39.9</span>
                    </div>
                    <div className="h-[0.22rem] w-[0.22rem] rounded-full bg-primary flex justify-center items-center text-white">
                      <HiOutlineShoppingCart/>
                    </div>
                  </div>
                </Card>
              )
            })
          }
        </div>
      </Center>
    </div>
  )
}
