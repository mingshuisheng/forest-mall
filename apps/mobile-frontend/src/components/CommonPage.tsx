import {FC, PropsWithChildren} from "react";
import classNames from "classnames";

export type CommonPageProps = {
  className?: string
} & PropsWithChildren


export const CommonPage: FC<CommonPageProps> = ({children, className}) => {
  return(
    <main className={classNames("h-full w-full bg-gray-100", className)}>
      {children}
    </main>
  )
}
