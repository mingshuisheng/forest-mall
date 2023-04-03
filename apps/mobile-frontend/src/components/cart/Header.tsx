import {FC, ComponentProps} from "react"
import classNames from "classnames"

export type HeaderProps = ComponentProps<'div'> & {}

export const Header: FC<HeaderProps> = ({className}) => {
  return (
    <div className={classNames("flex w-full justify-between items-center px-3 py-3 bg-primary text-white", className)}>
      <div className="invisible">删除</div>
      <div className="font-bold text-xl">购物车</div>
      <div>删除</div>
    </div>
  )
}
