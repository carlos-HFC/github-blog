import { memo, useEffect, useState } from "react"
import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaGithub,
  FaUserGroup,
} from "react-icons/fa6"

import { api } from "../lib/axios"
import { Link } from "./link"

interface ProfileProps {
  avatar_url: string
  html_url: string
  login: string
  name: string
  followers: number
  bio: string
  company: string
}

function ProfileComp() {
  const [profile, setProfile] = useState({} as ProfileProps)

  useEffect(() => {
    api.get("/users/carlos-hfc").then(response => setProfile(response.data))
  }, [])

  return (
    <div className="flex flex-col items-center gap-8 rounded-xl bg-base-profile p-6 shadow md:flex-row md:items-stretch md:p-8">
      <div>
        <img
          src={profile.avatar_url}
          alt={profile.name}
          width={148}
          className="aspect-square rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between">
          <h2 className="text-2xl font-bold leading-snug text-base-title">
            {profile.name}
          </h2>
          <Link
            to={profile.html_url}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <FaArrowUpRightFromSquare />
          </Link>
        </div>

        <p className="leading-relaxed text-base-text">{profile.bio}</p>

        <footer className="flex flex-1 flex-col gap-2 md:flex-row md:items-end md:gap-6">
          <div className="flex items-center gap-2">
            <FaGithub className="text-lg text-base-label" />
            <span className="leading-relaxed text-base-subtitle">
              {profile.login}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaBuilding className="text-lg text-base-label" />
            <span className="leading-relaxed text-base-subtitle">
              {profile.company}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaUserGroup className="text-lg text-base-label" />
            <span className="leading-relaxed text-base-subtitle">
              {profile.followers} seguidores
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export const Profile = memo(ProfileComp)
