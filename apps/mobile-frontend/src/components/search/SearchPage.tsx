import {FC} from "react";
import {CommonPage} from "../CommonPage";
import {Header} from "./Header";
import {Center, Tag} from "forest-mobile-ui";
import {AiOutlineReload} from "react-icons/ai"


export const SearchPage: FC = () => {
  return (
    <CommonPage className="flex flex-col">
      <Header/>
      <div className="flex-1 bg-white flex justify-center items-start">
        <Center className="w-[90%] flex flex-col">
          <div className="flex flex-col mt-5 w-full">
            <div className="flex justify-between items-center">
              <div className="font-bold">实时搜索</div>
              <AiOutlineReload/>
            </div>
            <div className="flex mt-2 flex-wrap gap-2">
              <Tag round={true} color="#f5f5f5">充值卡</Tag>
              <Tag round={true} color="#f5f5f5">充值卡</Tag>
              <Tag round={true} color="#f5f5f5">充值卡</Tag>
              <Tag round={true} color="#f5f5f5">充值卡</Tag>
              <Tag round={true} color="#f5f5f5">充值卡</Tag>
            </div>
          </div>
          <div className="flex flex-col mt-5 w-full">
            <div className="flex justify-between items-center">
              <div className="font-bold">新品</div>
            </div>
            <div className="flex mt-2 flex-wrap gap-2">
              <Tag round={true} color="#f5f5f5">充值卡</Tag>
              <Tag round={true} color="#f5f5f5">充值卡</Tag>
              <Tag round={true} color="#f5f5f5">充值卡</Tag>
              <Tag round={true} color="#f5f5f5">充值卡</Tag>
              <Tag round={true} color="#f5f5f5">充值卡</Tag>
            </div>
          </div>
        </Center>
      </div>
    </CommonPage>
  )
}
