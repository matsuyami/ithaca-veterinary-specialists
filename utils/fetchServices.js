export const fetchServices = async () => {
  const res = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getServices`)
  const data = await res.json()
  const services = data.services

  return services 
}