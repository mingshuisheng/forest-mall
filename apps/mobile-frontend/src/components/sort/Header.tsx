import {FC, ComponentProps} from "react"
import {SearchInput} from "../common/SearchInput";

export type HeaderProps = ComponentProps<'div'> & {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className="flex h-max w-full px-2 py-[0.1rem]">
      <SearchInput value="小苹果" className="flex-1" />
    </div>
  )
}
