import { Link, LinkProps } from "react-router-dom"

interface CardProps extends LinkProps {}

export function Card(props: Readonly<CardProps>) {
  return (
    <Link
      {...props}
      className="flex flex-col gap-5 rounded-xl border border-transparent bg-base-post p-6 hover:border-base-label md:p-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="line-clamp-2 text-xl font-bold leading-relaxed text-base-title">
          JavaScript data types and data structures
        </h2>
        <time className="text-nowrap text-sm leading-relaxed text-base-span">
          Há 1 dia
        </time>
      </div>

      <p className="line-clamp-4 leading-relaxed text-base-text">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </Link>
  )
}
