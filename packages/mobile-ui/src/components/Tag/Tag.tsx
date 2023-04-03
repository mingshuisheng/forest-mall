import {ComponentProps, FC} from "react";
import classNames from "classnames";
import {Center} from "../Layout";
import {Colors} from "../../types/Colors";
import {Fills} from "../../types/Fills";

export type TagProps = ComponentProps<'div'> & {
  color?: Colors
  fill?: Fills
  round?: boolean
}

export const Tag: FC<TagProps> = (props) => {
  const {
    children = "",
    className = "",
    color = "default",
    fill = "solid",
    round = false,
    style = {},
    ...restProps
  } = props

  const inColors = ["default", "primary", "success", "warning", "danger"].includes(color)

  const colorClass =
    fill === "solid" ? {
        "bg-[#666]": color === "default",
        "bg-[#1677ff]": color === "primary",
        "bg-[#00b578]": color === "success",
        "bg-[#ff8f1f]": color === "warning",
        "bg-[#ff3141]": color === "danger",
        "text-white": inColors
      } :
      {
        "border-[#666] text-[#666]": color === "default",
        "border-[#1677ff] text-[#1677ff]": color === "primary",
        "border-[#00b578] text-[#00b578]": color === "success",
        "border-[#ff8f1f] text-[#ff8f1f]": color === "warning",
        "border-[#ff3141] text-[#ff3141]": color === "danger",
        "border": true
      }

  if (!inColors) {
    if (fill === "solid") {
      style.backgroundColor = style.backgroundColor || color
    } else {
      style.borderColor = style.borderColor || color
      style.color = style.color || color
    }
  }

  return (
    <Center {...restProps} className={classNames("px-[0.2rem] py-1 w-max leading-none", {"rounded": round}, className, colorClass)}
            style={style}>
      {children}
    </Center>
  )
}
