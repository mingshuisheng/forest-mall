import {ChangeEvent, FC} from "react";
import {HiOutlineMagnifyingGlass} from "react-icons/hi2";
import {BaseProps} from "@/types/BaseProps";
import classNames from "classnames";
import {useControllableValue, useMemoizedFn} from "ahooks"

export type SearchInputProps = BaseProps & {
  readonly?: boolean
  value?: string
  onChange?(value: string): void
  onClick?(): void
  autoFocus?: boolean
}

export const SearchInput: FC<SearchInputProps> = (props) => {
  const {
    autoFocus = false,
    className = "",
    readonly = false,
    onClick = () => {
    }
  } = props
  const [value, setValue] = useControllableValue<string>(props, {
    defaultValue: ""
  })

  const handleChange = useMemoizedFn((e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value))

  return (
    <div onClick={onClick}
         className={classNames("rounded h-[0.3rem] bg-white flex items-center mx-2", className)}>
      <HiOutlineMagnifyingGlass className="pl-2 text-[0.27rem] shrink-0 text-gray-400"/>
      <input
        autoFocus={autoFocus}
        type="text"
        readOnly={readonly}
        value={value}
        onChange={handleChange}
        className="w-[calc(100%-0.48rem)] bg-transparent pl-1 read-only:text-gray-400 text-black"/>
    </div>
  )
}
