import {FC} from "react";
import classNames from "classnames";


export const SortGoods: FC = () => {
  return (
    <div className="flex justify-between">
      <SortGoodsItem title="全部" subTitle="猜你喜欢" />
      <SortGoodsItem title="时令" subTitle="当季优选" activated={true}/>
      <SortGoodsItem title="进口" subTitle="国际直采"/>
      <SortGoodsItem title="人气" subTitle="大家在买"/>
    </div>
  )
}

type SortGoodsItemProps = {
  title: string
  subTitle: string
  activated?: boolean
}

const SortGoodsItem: FC<SortGoodsItemProps> = ({title, subTitle, activated}) => {
  return (
    <div className={classNames("flex flex-col items-center group", {"activated": activated})}>
      <div className="text-base group-[.activated]:text-primary">{title}</div>
      <div
        className="text-sm text-gray-500 px-2 py-1 rounded-full mt-2 group-[.activated]:text-white group-[.activated]:bg-primary">
        {subTitle}
      </div>
    </div>
  )
}
