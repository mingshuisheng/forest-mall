import {ComponentProps, FC} from "react"
import {Center} from "../Layout";
import classNames from "classnames";

export type SideBarItemProps = ComponentProps<'div'>

export const SideBarItem: FC<SideBarItemProps> = ({className, children}) => {
  return (
    <Center className={classNames("w-full py-2 group-[.activated]:bg-white group-[.activated]:text-primary group-[.activated]:font-bold text-sm", className)}>
      {children}
    </Center>
  )
}
