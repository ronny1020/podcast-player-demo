import { EpisodeItem, RSS } from '../models/rss'

export default function findEpisodeByGuid(
  rss: RSS,
  guid: string
): EpisodeItem | null {
  return (
    rss.channel.item.find((episode) => episode.guid['#text'] === guid) || null
  )
}
