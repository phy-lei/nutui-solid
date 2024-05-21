import { createEffect, createSignal, onMount } from 'solid-js'
import { nav } from '@/config.json'
// @ts-ignore
import { version } from '/package.json'
import './header.scss'

const langs = [
  { name: '中文', locale: 'zh-CN' },
  { name: '中文(繁体)', locale: 'zh-TW' },
  { name: 'English', locale: 'en-US' },
  { name: 'Thai', locale: 'th' },
]

const Header = () => {
  const [currLang, setCurrLang] = createSignal({})

  const toHome = () => {
    window.location.href = '/'
  }

  onMount(() => {
    let packages = [] as any[]
    nav.forEach((item) => {
      packages.push(...item.packages)
    })
  })

  createEffect(() => {
    const lang = langs.filter(
      (l) => window.location.pathname.indexOf(l.locale) > -1
    )[0]
    setCurrLang(lang)
  })

  return (
    <div class="doc-header doc-header-red">
      <div class="header-logo">
        <a class="logo-link" href="#/" onClick={toHome}></a>
        <span class="logo-border"></span>
        <span class="version">{version}</span>
      </div>
      <div class="header-nav">
        <a href="https://github.com/jdf2e/nutui-docs" target="_blank">
          当前环境：development ,代码 PR 合并后，文档会自动同步至
          https://github.com/jdf2e/nutui-docs
        </a>
      </div>
    </div>
  )
}

export default Header
