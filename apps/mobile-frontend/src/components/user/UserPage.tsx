import {FC, ComponentProps} from "react"
import classNames from "classnames"
import {TabBarPage} from "@/components";
import {Header} from "./Header";
import {Card, Center, Divider} from "forest-mobile-ui";
import {AiOutlineLike, AiOutlineWallet} from "react-icons/ai";
import {HiOutlineCube, HiInbox} from "react-icons/hi";
import {FaTicketAlt} from "react-icons/fa";
import {MdGrade} from "react-icons/md";
import {RecommendGoods} from "@/components/common/RecommendGoods";

export type UserPageProps = ComponentProps<'div'> & {}

export const UserPage: FC<UserPageProps> = ({className}) => {
  return (
    <TabBarPage className={classNames("", className)}>
      <Center className="flex-col">
        <Header/>
        <Card round className="mt-5 flex flex-col gap-3 override:w-[95%] pt-3 pb-5">
          <div className="font-bold">我的订单</div>
          <Divider/>
          <div className="flex px-5 justify-between text-sm">
            <Center className="flex-col gap-1">
              <AiOutlineWallet className="text-primary h-[0.2rem] w-[0.2rem]"/>
              <div className="text-gray-600">待付款</div>
            </Center>
            <Center className="flex-col gap-1">
              <HiOutlineCube className="text-primary h-[0.2rem] w-[0.2rem]"/>
              <div className="text-gray-600">待发货</div>
            </Center>
            <Center className="flex-col gap-1">
              <HiInbox className="text-primary h-[0.2rem] w-[0.2rem]"/>
              <div className="text-gray-600">待收货</div>
            </Center>
            <Center className="flex-col gap-1">
              <AiOutlineLike className="text-primary h-[0.2rem] w-[0.2rem]"/>
              <div className="text-gray-600">待评价</div>
            </Center>
          </div>
        </Card>

        <Card round className="mt-5 flex flex-col gap-3 override:w-[95%] pt-3 pb-5">
          <div className="font-bold">我的订单</div>
          <Divider/>
          <div className="flex px-5 gap-5 text-sm">
            <Center className="flex-col gap-1">
              <FaTicketAlt className="text-[#CE5F41] h-[0.2rem] w-[0.2rem]"/>
              <div className="text-gray-600">开发票</div>
            </Center>
            <Center className="flex-col gap-1">
              <MdGrade className="text-[#FFE38F] h-[0.2rem] w-[0.2rem]"/>
              <div className="text-gray-600">内容收藏</div>
            </Center>
          </div>
        </Card>
        <RecommendGoods className="mt-5"/>
      </Center>
    </TabBarPage>
  )
}
