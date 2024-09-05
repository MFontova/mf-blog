import Link from "next/link";
import LogoName from "./LogoName";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

const routes: Route[] = [
  {
    label: "Sobre mi",
    path: "/about",
  },
  {
    label: "Proyectos",
    path: "/projects",
  },
  {
    label: "Blog",
    path: "/blog",
  }
]

export default function Header() {
  
  return(
    <header className="p-8 flex flex-col md:flex-row justify-between items-center gap-10 border-b">
      {/* <Link href={'/'} className="text-xl font-bold">{`{ MFontova }`}</Link> */}
      <LogoName/>
      <nav>
        <ul className="flex gap-10">
          {
            routes.map(route => (
              <MenuItem route={route} key={route.path} />
            ))
          }
        </ul>
      </nav>
    </header>
  )
}