"use client"

import Link from "next/link";
import LogoWedding from "@/asset/images/logo-wedding.svg";
import { usePathname } from "next/navigation";

type Props = {}
function Header({}:Props){
  const pathName = usePathname()
  const mainMenus = [
    {
      key:"homepage",
      label:"Home",
      slug:"/"
    },
    {
      key:"category",
      label:"Categories",
      slug:"/categories"
    },
    {
      key:"package",
      label:"Packages",
      slug:"/packages"
    },
    {
      key:"Testimonials",
      label:"Testimonials",
      slug:"/testimonials"
    }
  ]
  
    return (
        <header className="flex justify-between container mx-auto items-center pt-8 -mb-8">
        <span className="flex gap-x-3 items-center">
          <span className="text-color2">
            <LogoWedding/>
          </span>
          <span className="text-2xl font-bold cursor-default">Samawa</span>
        </span>
        <ul className="flex gap-x-10">
          {
            mainMenus.map( menu =>{
              let isActive = false
              if(pathName == menu.slug || (pathName.startsWith(menu.slug) && pathName.charAt(menu.slug.length) === "/")){
                isActive = true
              }

              return <li key={menu.key}>
                <Link
                  href= {menu.slug}
                  className={`${isActive ? "font-bold" : ""} hover:underline`}
                  aria-current={isActive ? "true":"false"}
                  >{menu.label}</Link>
              </li>
            })
          }
        </ul>
        <ul className="flex gap-x-4">
          <li>
            <Link
              href="/contacts.html"
              className="border border-dark1 px-5 py-3 rounded-full font-semibold"
              >Contact Us</Link>
          </li>
          <li>
            <Link
              href="/contacts.html"
              className="border transparent bg-color2 text-light1 px-5 py-3 rounded-full font-semibold"
              >Contact Us</Link>
          </li>
        </ul>
    </header>
    );
}

export default Header;