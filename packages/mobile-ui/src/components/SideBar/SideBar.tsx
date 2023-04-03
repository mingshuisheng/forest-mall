import {Children, ComponentProps, FC, isValidElement} from "react"
import classNames from "classnames";
import {ActiveKeyProps, useActiveKey} from "../../hooks";


export type SideBarProps = ComponentProps<'nav'> & ActiveKeyProps

export const SideBar: FC<SideBarProps> = (props) => {
  const {className, children, ...restProps} = props
  const {activeKey, setActiveKey} = useActiveKey(props)

  return (
    <nav {...restProps} className={classNames("flex flex-col h-full w-[0.85rem] items-center", className)}>
      <ul className="w-full">
        {
          Children.map(children, (child, index) => {
            if (!isValidElement(child)) return null

            const key = child.key || index
            return (
              <li onClick={() => setActiveKey(key)} key={key}
                  className={classNames("group w-full", {"activated": key === activeKey})}>
                {child}
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
