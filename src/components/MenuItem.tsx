"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItem({route}: {route: Route}) {
  const pathname = usePathname()

  return (
    <li key={route.path}>
      <Link className={`hover:underline hover:decoration-dashed underline-offset-4 transition-all ${pathname.includes(route.path) && 'underline decoration-dashed font-bold'}`} href={route.path}>{route.label}</Link>
    </li>
  )
}