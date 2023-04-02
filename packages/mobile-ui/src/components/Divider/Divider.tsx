import {FC} from "react";
import {BaseProps} from "../../types/BaseProps";
import classNames from "classnames";

export type DividerProps = Omit<BaseProps, "children"> & {
  direction?: "horizontal" | "vertical";
}

export const Divider: FC<DividerProps> = ({className, direction = "horizontal"}) => {
  return (
    <div className={classNames("bg-gray-200", {
      "w-full h-[1px]":direction === "horizontal",
      "h-full w-[1px]":direction === "vertical",
    }, className)}/>
  )
}
