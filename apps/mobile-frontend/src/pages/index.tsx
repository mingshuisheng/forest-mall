import {FC, PropsWithChildren} from "react";

export default function Home() {
  return (
    <div className="h-full w-full">
      <NavPage></NavPage>
    </div>
  )
}

const NavPage: FC<PropsWithChildren> = ({children}) => {
  return (
    <main className="h-full w-full flex flex-col">
      <div className="flex-1 w-full bg-blue-700 overflow-auto">
        <div className="h-[1rem] bg-green-200 relative">
          123213123
        </div>
        <div className="h-[0.5rem] bg-red-300 sticky top-0">
          bbbbb
        </div>
        <div className="h-[20rem] bg-pink-300">
          {
            new Array(80).fill(1).map((_, i) => <div className="leading-none" key={i}>123123123</div>)
          }
        </div>
      </div>
      <footer className="h-max w-full bg-amber-500">
        <nav className="h-2">

        </nav>
      </footer>
    </main>
  )
}
