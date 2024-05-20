import { createEffect, createSignal } from 'solid-js'
import { useLocation } from '@solidjs/router'
import './demo-preview.scss'

const DemoPreview = (props: any) => {
  const location = useLocation()
  const [URL, setURL] = createSignal(location.pathname)

  createEffect(() => {
    setURL(location.pathname)
  })

  return (
    <div class={`doc-demo-preview ${props.class}`}>
      <iframe src={`/react/demo.html#${URL()}`} frameBorder="0"></iframe>
    </div>
  )
}

export default DemoPreview
