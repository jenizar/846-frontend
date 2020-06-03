import { Endpoints } from '../shared/constants'

export default ({ store, $axios }) => {
  return $axios.get(Endpoints.INCIDENTS).then((res) => {
    store.dispatch('global/storeIncidents', { data: res.data.data })
  })
}
