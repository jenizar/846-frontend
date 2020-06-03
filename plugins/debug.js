export default ({ app, store }) => {
  console.warn('Press D to toggle debug mode.')
  document.addEventListener('keyup', (event) => {
    if (event.key === 'd') {
      store.dispatch('global/toggleDebugMode')
    }
  })
}