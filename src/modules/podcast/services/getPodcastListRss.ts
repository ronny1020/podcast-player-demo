import { XMLParser } from 'fast-xml-parser'
import { RSS } from '../models/rss'

const parser = new XMLParser()

export default async function getPodcastListRss(): Promise<RSS> {
  const response = await fetch(
    `${
      import.meta.env.VITE_DOMAIN
    }/v2/podcasts/954689a5-3096-43a4-a80b-7810b219cef3/feed.xml`
  )
  const xml = await response.text()
  const { rss } = parser.parse(xml) as { rss: RSS }

  return rss
}
