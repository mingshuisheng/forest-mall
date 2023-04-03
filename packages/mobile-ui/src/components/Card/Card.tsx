import {ComponentProps, FC} from "react";
import classNames from "classnames";

export type CardProps = ComponentProps<'div'> & {
  round?: boolean
  mode?: "shadow" | "divider"
}

export const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    round = false,
    mode = "shadow",
    ...restProps
  } = props
  return (
    <div {...restProps}
         className={
           classNames(
             "w-full px-[0.12rem] bg-white h-max",
             {
               "rounded-sm": round,
               "shadow-card": mode === "shadow",
               "border-b-[1px] border-gray-200": mode === "divider",
             },
             className
           )
         }>
      {children}
    </div>
  )
}
