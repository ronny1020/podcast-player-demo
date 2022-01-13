import { EpisodeItem } from '../models/rss'

export default function findTheGuidByEpisodeNumber(
  episodes: EpisodeItem[],
  episodeNumber: number
): string | null {
  return (
    episodes.find((episode) => episode['itunes:episode'] === episodeNumber)
      ?.guid['#text'] || null
  )
}
