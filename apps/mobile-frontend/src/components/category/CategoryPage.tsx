import {FC} from "react";
import {CommonPage} from "../CommonPage";
import {Header} from "./Header";
import {CategoryArea} from "@/components/category/CategoryArea";

export const CategoryPage: FC = () => {
  return (
    <CommonPage className="flex flex-col">
      <Header/>
      <CategoryArea className="flex-1"/>
    </CommonPage>
  )
}
