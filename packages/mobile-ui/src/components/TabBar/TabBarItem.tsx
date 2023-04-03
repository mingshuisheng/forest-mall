import {ComponentProps, FC, ReactNode} from "react";
import classNames from "classnames";

export type TabBarItemProps = ComponentProps<'div'> & {
  icon: ReactNode
}

export const TabBarItem: FC<TabBarItemProps> = ({ icon, children, className, ...restProps}) => {

  return (
    <div {...restProps} className={classNames("group-[.activated]:text-primary group-[.activated]:font-bold flex flex-col items-center", className)}>
      <div className="text-[0.2rem]">{icon}</div>
      <div className="text-[0.12rem]">{children}</div>
    </div>
  )
}
