import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

export default async (req: any, res: any) => {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    return {
      redirect: {
        destination: '/admin/works', // some destination '/dashboard' Ex,
        permanent: false,
      },
    }
  } else {
    return {
      redirect: {
        destination: '/404', // some destination '/dashboard' Ex,
        permanent: false,
      },
    }
  }
}