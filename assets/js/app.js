import '@babel/polyfill'
import 'intersection-observer'
import 'custom-event-polyfill'
import ClientFlagSetter from './views/client-flag-setter'
import {
  windowSizeObserver,
  // scrollObserver,
  inviewportObserver
  // inviewportScrollObserver
  // lottie
} from './modules'
import HeightFitter from './views/height-fitter'
import PageLoader from './views/page-loader'
import Lazyloader from './views/lazyloader'
import Inviewporter from './views/inviewporter'
import Ignitioner from './views/ignitioner'
import { waitTime } from './utils/wait-time'

new ClientFlagSetter()

windowSizeObserver.on().update()
// scrollObserver.add(window) // always scroll observe
inviewportObserver.create()
// inviewportScrollObserver.on()
// lottie.create().on()

new HeightFitter()
  .create()
  .on()
  .update()

new PageLoader().start()

document.addEventListener(
  'pageLoaded',
  async () => {
    new Inviewporter().create().on()
    new Lazyloader().create().on()
    new Ignitioner().create().on()

    await waitTime(1000)

    document.documentElement.classList.add('is-page-readied')
  },
  { once: true }
)
