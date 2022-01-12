import { defineStore } from 'pinia'
import { RSS } from '../models/rss'

interface PodcastListStoreState {
  rss: RSS | null
}

const usePodcastListStore = defineStore('podcastListStore', {
  state: (): PodcastListStoreState => ({
    rss: null,
  }),
  actions: {
    setRss(rss: RSS) {
      this.rss = rss
    },
  },
})

export default usePodcastListStore
