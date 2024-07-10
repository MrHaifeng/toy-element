import {makeInstaller} from '@toy-element/utils'
import components from './components'
import '@toy-element/theme/index.css'

const install = makeInstaller(components)

export * from '@toy-element/components';
export default install;