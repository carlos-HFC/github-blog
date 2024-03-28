import { format } from "date-fns"
import { useEffect, useState } from "react"
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from "react-icons/fa6"
import Markdown from "react-markdown"
import { useParams } from "react-router-dom"

import { Link } from "../components/link"
import { api } from "../lib/axios"
import { formatDistance } from "../utils/format-distance"

interface PostProps {
  number: number
  html_url: string
  title: string
  user: {
    login: string
  }
  comments: number
  created_at: string
  body: string
}

export function Post() {
  const params = useParams<"number">()

  const [post, setPost] = useState<PostProps>()

  useEffect(() => {
    api
      .get(`/repos/carlos-hfc/github-blog/issues/${params.number}`)
      .then(response => setPost(response.data))
  }, [params.number])

  if (!params.number || !post) return null

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
            to={post.html_url}
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

      <Markdown className="prose prose-blockquote:border-s-base-label prose-pre:bg-base-post prose-pre:text-base-subtitle prose-headings:font-bold prose-strong:font-bold prose-strong:text-base-text prose-a:text-blue max-w-full px-4 py-10 *:text-base-text md:px-8">
        {post.body}
      </Markdown>
    </>
  )
}
