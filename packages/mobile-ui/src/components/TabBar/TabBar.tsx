import {Children, ComponentProps, FC, isValidElement, PropsWithChildren} from "react";
import classNames from "classnames";
import {ActiveKeyProps, useActiveKey} from "../../hooks";

export type TabBarProps = ComponentProps<'nav'> & PropsWithChildren & ActiveKeyProps

export const TabBar: FC<TabBarProps> = (props) => {
  const {children, className} = props

  const {activeKey, setActiveKey} = useActiveKey(props)

  return (
    <nav className={classNames("w-full bg-white py-1", className)}>
      <ul className="w-full flex items-center justify-around">
        {
          Children.map(children, (child, index) => {
            if (!isValidElement(child)) return null
            const key = child.key || index
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
