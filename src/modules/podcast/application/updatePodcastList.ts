import getPodcastList from '../services/getPodcastList'

export default async function updatePodcastList() {
  const podcastList = await getPodcastList()

  console.log(podcastList)
}
