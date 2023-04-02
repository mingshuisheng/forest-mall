import {FC, ReactNode} from "react";
import {FastFoodIcon, FruitIcon, GrainOilIcon, MeatIcon, SeaFoodIcon} from "@/icons";

export const CategoryList: FC = () => {
  return (
    <ul role="category list" className="w-full flex justify-between py-[0.05rem]">
      <li><CategoryItem icon={<FruitIcon className="h-[0.5rem] w-[0.5rem] text-white"/>} name="水果蔬菜" /></li>
      <li><CategoryItem icon={<MeatIcon className="h-[0.5rem] w-[0.5rem] text-white"/>} name="肉禽蛋品" /></li>
      <li><CategoryItem icon={<SeaFoodIcon className="h-[0.5rem] w-[0.5rem] text-white"/>} name="海鲜水产" /></li>
      <li><CategoryItem icon={<FastFoodIcon className="h-[0.5rem] w-[0.5rem] text-white"/>} name="速食冷冻" /></li>
      <li><CategoryItem icon={<GrainOilIcon className="h-[0.5rem] w-[0.5rem] text-white"/>} name="粮油食品" /></li>
    </ul>
  )
}

type CategoryItemProps ={
  icon: ReactNode
  name: string
}

const CategoryItem:FC<CategoryItemProps> = ({icon, name}) => {
  return (
    <div tabIndex={0} className="flex flex-col items-center">
      <div className="rounded-full flex justify-center items-center">{icon}</div>
      <div className="text-sm">{name}</div>
    </div>
  )
}
