import {FC} from "react";
import {CategoryList} from "../category/CategoryList";
import {Card} from "forest-mobile-ui";
import {DiscountGoods} from "./DiscountGoods";
import {RecommendGoods} from "./RecommendGoods";
import {SortGoods} from "./SortGoods";
import {GoodsList} from "./GoodsList";

export const GoodsArea: FC = () => {
  return (
    <div className="h-max w-full box-border px-[0.24rem]">
      <div className="mt-[0.1rem] px-[0.1rem]">
        <CategoryList/>
      </div>
      <Card round className="mt-[0.1rem]">
        <DiscountGoods/>
      </Card>
      <Card round className="mt-[0.15rem]">
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
