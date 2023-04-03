import {FC} from "react";
import {SearchInput} from "../common/SearchInput";
import {useRouter} from "next/router";
import {useMemoizedFn} from "ahooks";

export const Header: FC = () => {
  let router = useRouter();

  const handleCancel = useMemoizedFn(async () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      await router.replace("/")
    }
  })

  return (
    <div className="w-full flex items-center p-3 bg-[#f5f5f5]">
      <SearchInput className="flex-1" autoFocus={true} value="小芒果" />
      <div onClick={handleCancel}>取消</div>
    </div>
  )
}
