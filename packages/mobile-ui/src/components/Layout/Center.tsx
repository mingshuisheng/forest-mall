import {ComponentProps, FC} from "react";
import classNames from "classnames";

export type CenterProps = ComponentProps<'div'>

export const Center: FC<CenterProps> = ({className, children, ...restProps}) => {
  return (
    <div {...restProps} className={classNames("flex justify-center items-center", className)}>
      {children}
    </div>
  )
}
