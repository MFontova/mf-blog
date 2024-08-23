import Link from "next/link";

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
    <header className="p-8 flex justify-between border-b">
      <Link href={'/'} className="text-xl font-bold">MFontova</Link>
      <nav>
        <ul className="flex gap-10">
          {
            routes.map(route => (
              <li key={route.path}>
                <Link className="hover:underline transition-all" href={route.path}>{route.label}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}