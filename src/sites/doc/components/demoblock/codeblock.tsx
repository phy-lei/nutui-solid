import hljs from 'highlight.js'
import {useAPPContext} from '../../context'
import DemoBlock from './demoblock'
import './demoblock.scss'

const modules = import.meta.glob('@/packages/**/demos/*/*.tsx', {
  as: 'raw',
  eager: true,
})
// console.log('modules', modules)
const CodeBlock = (props: { src?: string }) => {
  const [path] = useAPPContext()

  const originCode = modules[`${path}/demos/${props.src}`]

  const highlightedCode = hljs.highlightAuto(originCode, ['jsx']).value

  return (
    <DemoBlock text={originCode} scss="">
      <pre>
        <code innerHTML={highlightedCode} />
      </pre>
    </DemoBlock>
  )
}

export default CodeBlock
