import {FC} from "react";
import {Header} from "./Header";
import {GoodsList} from "./GoodsList";
import {RecommendGoods} from "./RecommendGoods";

export const SearchResultPage: FC = () => {
  return(
    <div >
      <Header/>
      <GoodsList/>
      <RecommendGoods/>
    </div>
  )
}
