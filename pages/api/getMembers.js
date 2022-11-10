import { groq } from 'next-sanity'
import { sanityClient } from '../../lib/sanity'

const query = groq`
*[_type == "member"]`

export default async function handler(req, res) {
  const members = await sanityClient.fetch(query)
  return res.status(200).json({members})
}
