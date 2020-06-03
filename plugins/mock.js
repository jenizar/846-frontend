import MockAdapter from 'axios-mock-adapter'

const config = {
  delayResponse: 300
}

// This is an example mock adapter
export default ({ $axios, app }) => {
  if (app.context.isDev) {
    const mock = new MockAdapter($axios, config)
    mock.onGet('/test').reply(200, {
      users: [{ id: 1, name: 'John Smith' }]
    })
  }
}
