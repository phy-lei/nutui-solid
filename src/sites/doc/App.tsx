import {
  createSignal,
  createMemo,
  createEffect,
  For,
  onMount,
  onCleanup,
  Show,
  Suspense,
} from 'solid-js'
import { Router, Route } from '@solidjs/router'
import { MDXProvider } from 'solid-mdx'
import './App.scss'
import { nav } from '@/config.json'
import { APPProvider } from './context'
import Nav from '@/sites/doc/components/nav'
import Header from '@/sites/doc/components/header'
import DemoPreview from '@/sites/doc/components/demo-preview'
import Issue from '@/sites/doc/components/issue'
import routers from './router'
import CodeBlock from './components/demoblock/codeblock'

const Title = () => {
  const [componentName, setComponentName] = createSignal({
    name: '',
    cName: '',
  })

  const s = createMemo(() => window.location.hash.split('/'))

  createEffect(() => {
    const getComponentName = () => {
      const cname = s()[s().length - 1].toLowerCase().replace('-taro', '')
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
    <div class="title">
      {componentName().name}&nbsp;{s()[1] === 'zh-CN' && componentName().cName}
    </div>
  )
}
const components = {
  CodeBlock,
}

const App = () => {
  const [fixed, setFixed] = createSignal(false)
  const [hidden, setHidden] = createSignal(false)
  const [docname, setDocName] = createSignal('react')

  const taros = createMemo(() => {
    const docs = {} as any
    const support = {} as any
    nav.forEach((navItem) => {
      return navItem.packages.forEach((pk: any) => {
        const lname = pk.name.toLowerCase()
        if (pk.tarodoc) {
          docs[lname] = true
        }
        if (pk.taro) {
          support[lname] = true
        }
      })
    })
    return { docs, support }
  })

  const scrollTitle = () => {
    let top = document.documentElement.scrollTop
    if (top > 127) {
      setFixed(true)
      if (top < 142) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    } else {
      setFixed(false)
      setHidden(false)
    }
  }

  const switchDoc = (name: string) => {
    const href = window.location.href
    if (name === 'react') {
      window.location.href = href.replace('-taro', '')
    } else {
      window.location.href = href.replace('-taro', '') + '-taro'
    }
    setDocName(name)
  }

  onMount(() => {
    document.addEventListener('scroll', scrollTitle)
    onCleanup(() => {
      document.removeEventListener('scroll', scrollTitle)
    })
  })

  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <div class="doc-content">
        <div class="doc-title">
          <div
            class={`doc-title-position ${fixed() ? 'fixed' : ''} ${
              hidden() ? 'hidden' : ''
            }`}
          >
            <Title></Title>
            <Issue></Issue>
          </div>
        </div>
        <div class="doc-content-document isComponent">
          <Router>
            <For each={routers}>
              {(ru) => {
                const path = ru.component.name?.substring(
                  0,
                  ru.component.name.lastIndexOf('/')
                )
                // console.log(
                //   '%c [ ===>123 ]',
                //   'font-size:13px; background:pink; color:#bf2c9f;',
                //   ru.component,
                //   path,
                //   ru.path
                // )

                return (
                  <Route
                    path={ru.path}
                    component={() => (
                      <APPProvider value={path}>
                        <MDXProvider components={components}>
                          <Show
                            when={taros().docs[ru.name.replace('-taro', '')]}
                            fallback={
                              <div
                                class="doc-content-tabs single"
                                style={{
                                  display: `${
                                    taros().support[
                                      ru.name.replace('-taro', '')
                                    ]
                                      ? 'inherit'
                                      : 'none'
                                  }`,
                                }}
                              >
                                <div class="tab-item cur">React / Taro</div>
                              </div>
                            }
                          >
                            <div class="doc-content-tabs ">
                              <div
                                class={`tab-item ${
                                  docname() === 'react' ? 'cur' : ''
                                }`}
                                onClick={() => switchDoc('react')}
                              >
                                React
                              </div>
                              <div
                                class={`tab-item ${
                                  docname() === 'taro' ? 'cur' : ''
                                }`}
                                onClick={() => switchDoc('taro')}
                              >
                                Taro
                              </div>
                            </div>
                          </Show>
                          {/* <Suspense fallback={<div>fetching user data</div>}>
                            <ru.component></ru.component>
                          </Suspense> */}
                          <ru.component></ru.component>
                        </MDXProvider>
                      </APPProvider>
                    )}
                  ></Route>
                )
              }}
            </For>
          </Router>
        </div>
        {/*<div class="markdown-body">*/}
        <DemoPreview class={`${fixed() ? 'fixed' : ''}`}></DemoPreview>
        {/*</div>*/}
      </div>
    </>
  )
}
export default App
