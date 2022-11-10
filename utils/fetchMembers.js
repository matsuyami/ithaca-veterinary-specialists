export const fetchMembers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getMembers`)
  const data = await res.json()
  const members = data.members

  console.log('fetching', members)

  return members
}