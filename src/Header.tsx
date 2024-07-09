"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import auroraImage from './assets/aurora.jpg'
import './Header.css'

export function NavigationMenuDemo() {
    return (
      <NavigationMenu className='header-navbar'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <a href="https://openreview.net/pdf?id=sw9iOHGxgm" className={navigationMenuTriggerStyle()} target='_blank'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Paper 📜
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="https://github.com/McGill-NLP/AURORA" className={navigationMenuTriggerStyle()} target='_blank'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                GitHub 💻
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="https://huggingface.co/collections/McGill-NLP/aurora-667ec89fbc53ec5d0b7de6e9" className={navigationMenuTriggerStyle()} target='_blank'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Datasets 🤗
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="https://huggingface.co/" className={navigationMenuTriggerStyle()} target='_blank'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Demo 🤗
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
{/*           <NavigationMenuItem>
            <NavigationMenuTrigger>More</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
  
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"


export const Header = () => {
  return (
    <header>
        <img src={auroraImage} alt="Aurora Image" className='header-image'/>
        <h1 className="scroll-m-20 text-8xl font-extrabold tracking-tight lg:text-9xl header-title">
          A<span className='header-title-span'>U</span>RO<span className='header-title-span'>R</span>A
        </h1>
        <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl header-subtitle">
            Action-Reasoning-Object-Attribute
        </h2>
        <NavigationMenuDemo />
    </header>
  )
}
