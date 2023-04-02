import {Children, FC, isValidElement, PropsWithChildren} from "react";
import classNames from "classnames";
import {useControllableValue} from "ahooks";

export type TabBarProps = {
  className?: string
  activeKey?: string | number
  onActiveKeyChange?: (key: string | number) => void
} & PropsWithChildren

export const TabBar: FC<TabBarProps> = (props) => {
  const {children, className} = props

  const [activeKey, setActiveKey] = useControllableValue<string | number>(props, {
    defaultValue: 0,
    valuePropName: "activeKey",
    trigger: "onActiveKeyChange"
  })

  return (
    <nav className={classNames("w-full bg-white py-1", className)}>
      <ul className="w-full flex items-center justify-around">
        {
          Children.map(children, (child, index) => {
            if (!isValidElement(child)) return null

            const key = child.props.key || index
            return (
              <li onClick={() => setActiveKey(key)} key={key}
                  className={classNames("group", {"activated": key === activeKey})}>
                {child}
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
