import { useQuery } from "@tanstack/react-query"
import { format } from "date-fns"
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from "react-icons/fa6"
import Markdown from "react-markdown"
import { useParams } from "react-router-dom"

import { getIssueDetails } from "../api/get-issue-details"
import { Link } from "../components/link"
import { formatDistance } from "../utils/format-distance"

export function Post() {
  const params = useParams<"number">()

  const { data: post } = useQuery({
    queryKey: ["issue", params.number],
    queryFn: () => getIssueDetails({ number: Number(params.number) }),
  })

  if (!post)
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" size-16 animate-spin rounded-full border-4 border-base-text border-b-transparent" />
      </div>
    )

  const postDateFormat = format(
    new Date(post.created_at),
    "dd 'de' MMMM 'às' HH:mm",
  )

  return (
    <>
      <div className="flex flex-col gap-5 rounded-xl bg-base-profile p-6 shadow sm:p-8">
        <div className="flex items-center justify-between">
          <Link to="/">
            <FaChevronLeft />
            Voltar
          </Link>
          <Link
            to={post.html_url ?? ""}
            target="_blank"
            rel="noreferrer"
          >
            Ver no GitHub
            <FaArrowUpRightFromSquare />
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold leading-snug text-base-title">
            {post.title}
          </h1>

          <footer className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2">
              <FaGithub className="text-lg text-base-label" />
              <span className="leading-relaxed text-base-span">
                {post.user.login}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarDay className="text-lg text-base-label" />
              <time
                dateTime={new Date(post.created_at).toISOString()}
                title={postDateFormat}
                className="leading-relaxed text-base-span first-letter:capitalize"
              >
                {formatDistance(post.created_at)}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <FaComment className="text-lg text-base-label" />
              <span className="leading-relaxed text-base-span">
                {post.comments} comentários
              </span>
            </div>
          </footer>
        </div>
      </div>

      <Markdown className="prose max-w-full px-4 py-10 *:text-base-text prose-headings:font-bold prose-a:text-blue prose-blockquote:border-s-base-label prose-strong:font-bold prose-strong:text-base-text prose-pre:bg-base-post prose-pre:text-base-subtitle md:px-8">
        {post.body}
      </Markdown>
    </>
  )
}
