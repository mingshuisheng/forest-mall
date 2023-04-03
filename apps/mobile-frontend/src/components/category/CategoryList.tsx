import {FC} from "react";
import {FastFoodIcon, FruitIcon, GrainOilIcon, MeatIcon, SeaFoodIcon} from "@/icons";
import Link from "next/link";
import {SVGIcon} from "../../../global";

const categoryArray: CategoryItemProps[] = [
  {
    svgIcon: FruitIcon,
    name: "水果蔬菜"
  },
  {
    svgIcon: MeatIcon,
    name: "肉禽蛋品"
  },
  {
    svgIcon: SeaFoodIcon,
    name: "海鲜水产"
  },
  {
    svgIcon: FastFoodIcon,
    name: "速食冷冻"
  },
  {
    svgIcon: GrainOilIcon,
    name: "粮油食品"
  },
]

export const CategoryList: FC = () => {
  return (
    <ul role="category list" className="w-full flex justify-between py-[0.05rem]">
      {
        categoryArray.map((item, index) => {
          return (
            <li key={index}>
              <Link href="/category">
                <CategoryItem svgIcon={item.svgIcon} name={item.name}/>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

type CategoryItemProps = {
  svgIcon: SVGIcon
  name: string
}

const CategoryItem: FC<CategoryItemProps> = ({svgIcon: SVGIcon, name}) => {
  return (
    <div tabIndex={0} className="flex flex-col items-center">
      <div className="rounded-full flex justify-center items-center">
        <SVGIcon className="h-[0.3rem] w-[0.3rem] text-white"/>
      </div>
      <div className="text-sm">{name}</div>
    </div>
  )
}
