import {FC, PropsWithChildren} from "react";
import {PageFooter} from "./PageFooter";
import {CommonPage} from "./CommonPage";
import classNames from "classnames";

export type TabBarPageProps = {
  className?: string
} & PropsWithChildren

export const TabBarPage: FC<TabBarPageProps> = ({children, className}) => {
  return (
    <CommonPage className={classNames("flex flex-col", className)}>
      <div className="flex-1 w-full overflow-auto relative">
        {children}
      </div>
      <PageFooter className="z-10"/>
    </CommonPage>
  )
}
