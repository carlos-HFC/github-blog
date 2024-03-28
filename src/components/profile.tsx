import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaGithub,
  FaUserGroup,
} from "react-icons/fa6"

import { Link } from "./link"

export function Profile() {
  return (
    <div className="flex gap-8 rounded-xl bg-base-profile p-8 shadow">
      <div>
        <img
          src="https://github.com/carlos-hfc.png"
          alt=""
          width={148}
          className="aspect-square rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold leading-snug text-base-title">
            Carlos Faustino
          </h2>
          <Link
            to="https://github.com/carlos-hfc"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            GITHUB
            <FaArrowUpRightFromSquare />
          </Link>
        </div>

        <p className="mt-2 leading-relaxed text-base-text">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <footer className="flex flex-1 items-end gap-6">
          <div className="flex items-center gap-2">
            <FaGithub className="text-lg text-base-label" />
            <span className="leading-relaxed text-base-subtitle">
              carlos-hfc
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaBuilding className="text-lg text-base-label" />
            <span className="leading-relaxed text-base-subtitle">
              Compass.uol
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaUserGroup className="text-lg text-base-label" />
            <span className="leading-relaxed text-base-subtitle">
              32 seguidores
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}
