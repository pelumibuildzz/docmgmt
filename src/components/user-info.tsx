import { Bell, UserCircleIcon } from "lucide-react";
import Link from "next/link";

const UserInfo = () => {
  return (
    <span className="flex space-x-3 items-center">
        <Link
          href="/notifications"
          className=""
        >
          <Bell width={22} height={22} />
        </Link>
        <span className="flex space-x-3 items-center font-medium">
          <UserCircleIcon width={32} height={32} />
          <span className="text-[14px]">Adibogun Aminat</span>
        </span>
    </span>
  )
}

export default UserInfo;