import { format } from "date-fns"
import Markdown from "react-markdown"
import { Link, LinkProps } from "react-router-dom"

import { formatDistance } from "../utils/format-distance"

interface CardProps extends LinkProps {
  number: number
  title: string
  created_at: string
  body: string
}

export function Card(props: Readonly<CardProps>) {
  const postDateFormat = format(
    new Date(props.created_at),
    "dd 'de' MMMM 'às' HH:mm",
  )

  return (
    <Link
      {...props}
      className="flex flex-col gap-5 rounded-xl border border-transparent bg-base-post p-6 hover:border-base-label md:p-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="line-clamp-2 text-xl font-bold leading-relaxed text-base-title">
          {props.title}
        </h2>
        <time
          dateTime={new Date(props.created_at).toISOString()}
          title={postDateFormat}
          className="text-nowrap text-sm leading-relaxed text-base-span"
        >
          {formatDistance(props.created_at)}
        </time>
      </div>

      <p className="line-clamp-4 leading-relaxed text-base-text">
        <Markdown>{props.body}</Markdown>
      </p>
    </Link>
  )
}
