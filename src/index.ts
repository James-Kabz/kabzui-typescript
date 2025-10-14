import type { App } from 'vue'
import * as components from './components/index'

interface InstallOptions {
  prefix?: string
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
