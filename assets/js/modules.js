import Eventer from './modules/eventer'
import WindowSizeObserver from './modules/window-size-observer'
import ScrollObserver from './modules/scroll-observer'
import InviewportObserver from './modules/inviewport-observer'
// import InviewportScrollObserver from './modules/inviewport-scroll-observer'
import ImagePreloader from './modules/image-preloader'
// import RequestAnimationFramer from './modules/request-animatino-framer'

// Eventer
export const eventer /* :Instance */ = new Eventer()

// WindowSizeObserver
export const windowSizeObserver /* :Instance */ = new WindowSizeObserver()

// WindowSizeObserver
export const scrollObserver /* :Instance */ = new ScrollObserver()

// InviewportObserver
export const inviewportObserver /* :Instance */ = new InviewportObserver()

// InviewportScrollObserver
// export const inviewportScrollObserver /* :Instance */ = new InviewportScrollObserver()

// ImagePreloader
export const imagePreloader /* :Instance */ = new ImagePreloader()

// RequestAnimationFramer
// export const requestAnimationFramer /* :Instance */ = new RequestAnimationFramer()
