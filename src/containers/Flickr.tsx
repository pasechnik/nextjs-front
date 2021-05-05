import useSwr from 'swr'
import SpacingGrid from '../components/SpacingGrid'

const fetcher = (url: string) =>
  fetch(url, { mode: 'no-cors' })
    .then((res) => res.text())
    .then((res) => res.trim())
    .then((res) => res.substr('jsonFlickrFeed('.length))
    .then((res) => res.slice(0, -1))
    .then((res) => JSON.parse(res))

export interface FlickrItem {
  title: string
  link: string
  media: {
    m: string
  }
  date_taken: string
  description: string
  published: string
  author: string
  author_id: string
  tags: string
}
export interface FlickrFeed {
  title: string
  link: string
  description: string
  modified: string
  generator: string
  items: [FlickrItem]
}
export default function Flickr() {
  const { data, error } = useSwr<FlickrFeed, any>(
    // 'https://api.flickr.com/services/feeds/photos_public.gne?format=json' as any,
    // './flickr-feed.json' as any,
    '/flickr-feed' as any,
    fetcher as any
  )

  if (error) console.error(error)
  if (error) return <div>Failed to load users</div>

  if (!data) return <div>Loading...</div>

  console.log({ data })
  return <SpacingGrid items={data.items} />
  // return <SpacingGrid items={[]} />
}
