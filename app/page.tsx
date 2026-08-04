import { HomeBtn, IHomeBtn } from "./components/HomeBtn/HomeBtn";
import findIcon from "@/public/icons/material-symbols--search.svg";
import shopIcon from "@/public/icons/mdi--cart-outline.svg";
import checkIcon from "@/public/icons/material-symbols--check.svg";

export default function Home() {
  const btns: IHomeBtn[] = [
    {
      id: 0,
      title: "FIND",
      icon: findIcon,
      path: "search"
    },
    {
      id: 1,
      title: "WISHLIST",
      icon: shopIcon,
      path: "wishlist"
    },
    {
      id: 2,
      title: "COLLECTED",
      icon: checkIcon,
      path: "collected"
    }
  ]

  return (
    <>
      <div className="flex h-screen items-center justify-center gap-44">
        {btns.map((btn) => (
          <HomeBtn key={btn.id} {...btn} />
        ))}
      </div>
    </>
  )

}
