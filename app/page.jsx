import Link from "next/link"
import { useRouter } from "next/navigation"

const HomePage = () => {
  const router = useRouter()
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Show properties</Link>
    </div>
  )
}

export default HomePage
