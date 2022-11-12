import { groq } from 'next-sanity'
import { sanityClient } from '../../lib/sanity'

const query = groq`
*[_type == "service"]`

export default async function handler(req, res) {
  const services = await sanityClient.fetch(query)
  return res.status(200).json({services})
}
