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
// import LinkMiddleware from './views/link-middleware'
import HeightFitter from './views/height-fitter'
import PageLoader from './views/page-loader'
import Lazyloader from './views/lazyloader'
import Inviewporter from './views/inviewporter'
import Ignitioner from './views/ignitioner'
import { waitTime } from './utils/wait-time'

/* ClientFlagSetter */
new ClientFlagSetter()

/* modules init */
windowSizeObserver.on().update()
// scrollObserver.add(window) // always scroll observe
inviewportObserver.create()
// inviewportScrollObserver.on()
// lottie.create().on()

/* LinkMiddleware */
// new LinkMiddleware().create().on()

/* HeightFitter */
new HeightFitter()
  .create()
  .on()
  .update()

/* PageLoader start */
new PageLoader().start()

/* page loaded after */
document.addEventListener(
  'pageLoaded',
  async () => {
    /* Inviewporter */
    new Inviewporter().create().on()

    /* Lazyloader */
    new Lazyloader().create().on()

    /* Ignitioner */
    new Ignitioner().create().on()

    await waitTime(1000)

    /* add readied class */
    document.documentElement.classList.add('is-page-readied')
  },
  { once: true }
)
