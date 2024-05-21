/* @refresh reload */
import { render } from 'solid-js/web';
import { isMobile } from '@/sites/assets/util'
import '@/sites/assets/styles/reset.scss'
import '@/sites/assets/styles/md-style.scss'
import App from './App'

// if (isMobile) {
//   location.replace('demo.html')
// }

const rootElement = document.querySelector('#doc')

if (rootElement != null) {
  render(() => <App></App>, rootElement);
}