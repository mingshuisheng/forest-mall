import {FC, PropsWithChildren} from "react";
import {PageFooter} from "./PageFooter";
import classNames from "classnames";

export type TabBarPageProps = {
  className?: string
} & PropsWithChildren

export const TabBarPage: FC<TabBarPageProps> = ({children, className}) => {
  return (
    <main className={classNames("h-full w-full flex flex-col", className)}>
      <div className="flex-1 w-full bg-gray-100 overflow-auto relative">
        {children}
      </div>
      <PageFooter/>
    </main>
  )
}
