import {FC} from "react";
import {CategoryList} from "./CategoryList";
import {Card} from "forest-mobile-ui";
import {DiscountGoods} from "@/componenst/home/DiscountGoods";
import {RecommendGoods} from "@/componenst/home/RecommendGoods";
import {SortGoods} from "@/componenst/home/SortGoods";
import {GoodsList} from "@/componenst/home/GoodsList";

export const GoodsArea: FC = () => {
  return (
    <div className="h-max w-full box-border px-[0.24rem]">
      <div className="mt-[0.1rem] px-[0.1rem]">
        <CategoryList/>
      </div>
      <Card className="mt-[0.1rem]">
        <DiscountGoods/>
      </Card>
      <Card className="mt-[0.1rem]">
        <RecommendGoods/>
      </Card>
      <div className="mt-[0.1rem] sticky top-0 bg-gray-100 py-2">
        <SortGoods/>
      </div>
      <div className="mt-[0.05rem]">
        <GoodsList/>
      </div>
    </div>
  )
}
