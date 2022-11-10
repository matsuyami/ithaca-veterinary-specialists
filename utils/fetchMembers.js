export const fetchMembers = async () => {
  const res = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getMembers`)
  const data = await res.json()
  const members = data.members

  return members
}