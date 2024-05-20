import { createEffect, createSignal } from 'solid-js'
import { useLocation } from '@solidjs/router'
import { nav } from '@/config.json'
import './issue.scss'

export function Issue() {
  const location = useLocation()
  const [componentName, setComponentName] = createSignal({ name: '', cName: '' })

  createEffect(() => {
    const getComponentName = () => {
      const s = location.hash.split('/')
      const cname = s[s.length - 1].toLowerCase()
      const component: any = {}
      nav.forEach((item: any) => {
        item.packages.forEach((sItem: any) => {
          if (sItem.name.toLowerCase() == cname) {
            component.name = sItem.name
            component.cName = sItem.cName
            return
          }
        })
      })
      return component
    }

    const componentName = getComponentName()
    setComponentName(componentName)
  })

  return (
    <>
      <div class="doc-content-issue">
        <a
          class="issue-item"
          href="https://github.com/jdf2e/nutui-react/issues"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#ffa200" d="M17 15V5h-2v10H5v2h10v10h2V17h10v-2z"/></svg>
          Issue
        </a>
        <a
          class="issue-item"
          href="https://github.com/jdf2e/nutui-react/issues?q=is:issue+is:open"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="none" d="M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z"/><path fill="#ffa200" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"/></svg>
          Open
        </a>
        <a
          class="issue-item"
          href={`https://github.com/jdf2e/nutui-react/issues?q=is:issue+is:closed+${componentName().name}`}
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#ffa200" d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"/></svg>
          Closed
        </a>
      </div>
    </>
  )
}
