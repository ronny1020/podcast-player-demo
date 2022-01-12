export interface RSS {
  channel: Channel
}

export interface Channel {
  title: string
  description: string
  link: string
  image: Image
  generator: string
  lastBuildDate: string
  'atom:link': string
  copyright: string
  language: string
  category: string[]
  'soundon:id': string
  'soundon:searchId': string
  'soundon:deleted': ItunesBlock
  'soundon:createdAt': string
  'soundon:updatedAt': string
  'soundon:importStatus': string
  'soundon:importFeedUrl': string
  'itunes:type': string
  'itunes:complete': ItunesBlock
  'itunes:block': ItunesBlock
  'itunes:author': ItunesAuthor
  'itunes:summary': string
  'itunes:owner': ItunesOwner
  'itunes:image': string
  'itunes:explicit': ItunesBlock
  'itunes:subtitle': string
  'itunes:category': string
  'itunes:new-feed-url': string
  item: EpisodeItem[]
}

export interface Image {
  url: string
  title: string
  link: string
}

export interface EpisodeItem {
  title: string
  description: string
  link: string
  guid: string
  'dc:creator': ItunesAuthor
  pubDate: string
  enclosure: string
  'content:encoded': string
  'soundon:id': string
  'soundon:createdAt': string
  'soundon:updatedAt': string
  'soundon:exclusive': SoundonExclusive
  'itunes:summary': string
  'itunes:author': ItunesAuthor
  'itunes:episodeType': ItunesEpisodeType
  'itunes:explicit': ItunesBlock
  'itunes:duration': number
  'itunes:season': number
  'itunes:episode': number
  'itunes:image': string
  'soundon:searchId'?: string
  'itunes:keywords'?: string
  'itunes:subtitle'?: string
}

export enum ItunesAuthor {
  謝孟恭 = '謝孟恭',
}

export enum ItunesEpisodeType {
  Full = 'Full',
}

export enum ItunesBlock {
  No = 'no',
}

export enum SoundonExclusive {
  Public = 'public',
}

export interface ItunesOwner {
  'itunes:name': ItunesAuthor
  'itunes:email': string
}
