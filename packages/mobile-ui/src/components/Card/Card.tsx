import {BaseProps} from "../../types/BaseProps";
import {FC} from "react";
import classNames from "classnames";

export type CardProps = {} & BaseProps

export const Card: FC<CardProps> = ({className, children}) => {
  return (
    <div className={classNames("w-full px-[0.12rem] rounded-sm bg-white h-max", className)}>
      {children}
    </div>
  )
}
