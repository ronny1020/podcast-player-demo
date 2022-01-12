import getPodcastListRss from '../services/getPodcastListRss'
import usePodcastListStore from '../store/podcastListStore'

export default async function updatePodcastList() {
  const podcastListRss = await getPodcastListRss()

  const podcastListStore = usePodcastListStore()
  podcastListStore.setRss(podcastListRss)
}
