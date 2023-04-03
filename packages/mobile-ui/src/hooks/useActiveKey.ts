import {useControllableValue} from "ahooks";

export type KeyType = string | number

export type SetActiveKeyType = (key: KeyType) => void

export type ActiveKeyProps = {
  activeKey?: KeyType
  onActiveKeyChange?: SetActiveKeyType
}

export type UseActiveKeyReturnType = {
  activeKey: KeyType,
  setActiveKey: SetActiveKeyType
}

export const useActiveKey = (props: ActiveKeyProps): UseActiveKeyReturnType => {
  const [activeKey, setActiveKey] = useControllableValue<string | number>(props, {
    defaultValue: 0,
    valuePropName: "activeKey",
    trigger: "onActiveKeyChange"
  })
  return {activeKey, setActiveKey}
}
