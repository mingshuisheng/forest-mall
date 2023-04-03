import {FC} from "react";
import {Divider} from "forest-mobile-ui";
import classNames from "classnames";
import Image from "next/image"

export const RecommendGoods: FC = () => {
  return (
    <div className="h-[1.31rem] box-border pt-[0.16rem] flex">
      <RecommendItem className="flex-1" title="吃好点" subTitle="美国大樱桃尝鲜"/>
      <Divider direction="vertical"/>
      <RecommendItem className="flex-1 ml-2" title="产地量贩" subTitle="凤梨19.9元/箱"/>
    </div>
  )
}

type RecommendItemProps = {
  title: string;
  subTitle: string;
  className?: string
}

const RecommendItem: FC<RecommendItemProps> = ({className, title, subTitle}) => {
  return(
    <div className={classNames("", className)}>
      <div className="font-bold">{title}</div>
      <div className="text-sm text-gray-400 my-1">{subTitle}</div>
      <div className="flex justify-between items-center mr-[0.2rem] mt-[0.08rem]">
        <Image width={100} height={100} className="w-[0.5rem]" src="/images/apple.png"  alt=""/>
        <Image width={100} height={100} className="w-[0.5rem]" src="/images/seafood.png" alt="" />
      </div>
    </div>
  )
}
