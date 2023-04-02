import {FC} from "react";
import classNames from "classnames";
import {HiOutlineShoppingCart} from "react-icons/hi2";

export type DiscountGoodsProps = {
  className?: string
}

export const DiscountGoods: FC<DiscountGoodsProps> = ({className}) => {
  return (
    <div className={classNames("py-[0.1rem]", className)}>
      <div role="header" className="flex justify-between items-center">
        <div className="font-bold text-base">超划算</div>
        <div className="text-sm">{"更多 >"}</div>
      </div>
      <div className="flex justify-between">
        <DiscountGoodsItem imgSrc="/images/apple.png" name="新疆小苹果 1.5..." price={20.9} unit="箱"/>
        <DiscountGoodsItem imgSrc="/images/apple.png" name="新疆小苹果 1.5..." price={20.9} unit="箱"/>
        <DiscountGoodsItem imgSrc="/images/apple.png" name="新疆小苹果 1.5..." price={20.9} unit="箱"/>
      </div>
    </div>
  )
}

type DiscountGoodsItemProps = {
  imgSrc: string
  name: string
  price: number
  unit: string
}

const DiscountGoodsItem: FC<DiscountGoodsItemProps> = ({imgSrc, name, price, unit}) => {
  return (
    <div className="flex flex-col">
      <div className="w-[0.93rem] h-[0.8rem]">
        <img src={imgSrc} alt=""/>
      </div>
      <div className="text-sm">{name}</div>
      <div className="flex items-center justify-between text-sm mt-1">
        <div>
          <span className="text-red-400 text-sm">￥</span>
          <span className="text-red-400 ml-1">{price}</span>
          <span>/{unit}</span>
        </div>
        <div className="h-[0.22rem] w-[0.22rem] rounded-full bg-primary flex justify-center items-center text-white">
          <HiOutlineShoppingCart/>
        </div>
      </div>
    </div>
  )
}
