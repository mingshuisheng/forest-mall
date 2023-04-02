import {FC, PropsWithChildren, ReactNode} from "react";
import Link from "next/link";
import classNames from "classnames";

export type TabBarItemProps = {
  href: string
  icon: ReactNode
  className?: string
} & PropsWithChildren

export const TabBarItem: FC<TabBarItemProps> = ({href, icon, children, className}) => {

  return (
    <Link href={href} className={classNames("group-[.activated]:text-primary group-[.activated]:font-bold flex flex-col items-center", className)}>
      <div className="text-[0.2rem]">{icon}</div>
      <div className="text-[0.12rem]">{children}</div>
    </Link>
  )
}
