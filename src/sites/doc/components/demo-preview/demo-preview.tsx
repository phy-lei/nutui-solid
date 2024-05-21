import { createEffect, createSignal } from 'solid-js'
import './demo-preview.scss'

const DemoPreview = (props: any) => {
  const [URL, setURL] = createSignal(window.location.pathname)

  createEffect(() => {
    setURL(window.location.pathname)
  })

  return (
    <div class={`doc-demo-preview ${props.class}`}>
      <iframe src={`/react/demo.html#${URL()}`} frameBorder="0"></iframe>
    </div>
  )
}

export default DemoPreview
