import type { App } from 'vue'
import { Button } from './components'

interface InstallOptions {
  prefix?: string
}

const components = {
  Button
}

const KABZUI = {
  install(app: App, options: InstallOptions = {}) {
    const { prefix = 'kabzui' } = options

    Object.keys(components).forEach((name) => {
      const componentName = prefix ? `${prefix}${name}` : name
      app.component(componentName, components[name as keyof typeof components])
    })
  }
}

export default KABZUI


export {
  Button
}
