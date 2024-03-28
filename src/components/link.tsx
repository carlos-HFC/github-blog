import { Link as L, LinkProps as Props } from "react-router-dom"

interface LinkProps extends Props {}

export function Link(props: Readonly<LinkProps>) {
  return (
    <L
      {...props}
      className="flex items-center gap-2 border-b border-b-transparent text-xs font-bold uppercase leading-relaxed text-blue hover:border-b-blue"
    />
  )
}
