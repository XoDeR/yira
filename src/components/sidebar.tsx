import Image from "next/image"
import Link from "next/link"
import { DottedSeparator } from "./dotted-separator"
import { Navigation } from "./navigation"

export const Sidebar = () => {
  return (
    <aside className="h-full w-full bg-neurtal-100 p-4">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={70} height={40} />
      </Link>
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  )
}