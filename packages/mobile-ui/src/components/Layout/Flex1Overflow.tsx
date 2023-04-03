import {FC, ComponentProps} from "react"
import classNames from "classnames"

export type Flex1OverflowProps = ComponentProps<'div'> & {}

export const Flex1Overflow: FC<Flex1OverflowProps> = ({className, children, ...restProps}) => {
  return (
    <div className="flex-1 relative h-full">
      <div {...restProps} className={classNames("absolute top-0 bottom-0 left-0 right-0 overflow-auto", className)}>
        {children}
      </div>
    </div>
  )
}
