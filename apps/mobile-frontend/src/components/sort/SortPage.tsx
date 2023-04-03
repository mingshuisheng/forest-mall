import {FC, ComponentProps} from "react"
import {TabBarPage} from "@/components";
import {Header} from "@/components/sort/Header";
import {SortArea} from "@/components/sort/SortArea";

export type SortPageProps = ComponentProps<'div'> & {}

export const SortPage: FC<SortPageProps> = () => {
  return (
    <TabBarPage>
      <div className="w-full h-full flex flex-col">
        <Header/>
        <SortArea />
      </div>
    </TabBarPage>
  )
}
