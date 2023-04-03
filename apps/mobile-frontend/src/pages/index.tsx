import {TabBarPage} from "@/components";
import {GetStaticProps} from "next";
import {Header} from "@/components/home/Header";
import {GoodsArea} from "@/components/home/GoodsArea";

type Props = {}

export default function Home() {
  return (
    <TabBarPage>
      <Header/>
      <GoodsArea/>
    </TabBarPage>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {

  return {
    props: {},
  }
}
