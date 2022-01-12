export interface RSS {
  channel: Channel
  '@_xmlns:dc': string
  '@_xmlns:content': string
  '@_xmlns:atom': string
  '@_version': string
  '@_xmlns:itunes': string
  '@_xmlns:googleplay': string
  '@_xmlns:soundon': string
}

export interface Channel {
  title: string
  description: string
  link: string
  image: Image
  generator: string
  lastBuildDate: string
  'atom:link': AtomLink
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
  'itunes:image': ItunesImage
  'itunes:explicit': ItunesBlock
  'itunes:subtitle': string
  'itunes:category': ItunesCategory
  'itunes:new-feed-url': string
  item: EpisodeItem[]
}

export interface AtomLink {
  '@_href': string
  '@_rel': string
  '@_type': string
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
  guid: GUID
  'dc:creator': ItunesAuthor
  pubDate: string
  enclosure: Enclosure
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
  'itunes:image': ItunesImage
  'soundon:searchId'?: string
  'itunes:keywords'?: string
  'itunes:subtitle'?: string
}

export enum ItunesAuthor {
  謝孟恭 = '謝孟恭',
}

export interface Enclosure {
  '@_url': string
  '@_length': string
  '@_type': Type
}

export enum Type {
  AudioMPEG = 'audio/mpeg',
}

export interface GUID {
  '#text': string
  '@_isPermaLink': string
}

export enum ItunesEpisodeType {
  Full = 'Full',
}

export enum ItunesBlock {
  No = 'no',
}

export interface ItunesImage {
  '@_href': string
}

export enum SoundonExclusive {
  Public = 'public',
}

export interface ItunesCategory {
  '@_text': string
}

export interface ItunesOwner {
  'itunes:name': ItunesAuthor
  'itunes:email': string
}
