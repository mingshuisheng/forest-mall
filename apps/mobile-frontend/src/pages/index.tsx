import {TabBarPage} from "@/componenst";
import {GetStaticProps} from "next";
import {Header} from "@/componenst/home/Header";
import {GoodsArea} from "@/componenst/home/GoodsArea";

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
