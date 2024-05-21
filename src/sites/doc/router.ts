import { lazy } from "solid-js";
import Doc from '/src/packages/button/doc.mdx'
// const modulesPage = import.meta.globEager('/src/packages/**/doc.md', {
//   as: 'raw',
// })
const modulesPage = import.meta.glob('/src/packages/**/doc.md')
console.log(modulesPage, 'modulesPage')

const routes: any[] = []
routes.push({
  path: '/zh-CN/component/Button',
  component: Doc,
  name: 'button',
})
// for (const path in modulesPage) {
//   let name = (/packages\/(.*)\/doc\.md/.exec(path) as any[])[1]
//   routes.push({
//     path: '/zh-CN/component/' + name,
//     component: (modulesPage[path]) as any,
//     name,
//   })
// }
// const modulesENPage = import.meta.glob('/src/packages/**/doc.en-US.md', {
//   as: 'raw',
//   eager: true,
// })
const modulesENPage = import.meta.glob('/src/packages/**/doc.en-US.md')

console.log('modulesENPage', modulesENPage)
for (const path in modulesENPage) {
  let name = (/packages\/(.*)\/doc\.en-US\.md/.exec(path) as any[])[1]
  routes.push({
    path: '/en-US/component/' + name,
    component: lazy(modulesENPage[path] as any),
    name,
  })
}

const modulesTaroPage = import.meta.glob('/src/packages/**/doc.taro.md')
console.log('modulesTaroPage', modulesTaroPage)
for (const path in modulesTaroPage) {
  let name = (/packages\/(.*)\/doc\.taro\.md/.exec(path) as any[])[1]
  routes.push({
    path: '/en-US/component/' + name + '-taro',
    component: lazy(modulesTaroPage[path] as any),
    name: name + '-taro',
  })
  routes.push({
    path: '/zh-CN/component/' + name + '-taro',
    component: lazy(modulesTaroPage[path] as any),
    name: name + '-taro',
  })
}
console.log('%c [ routes ]', 'font-size:13px; background:pink; color:#bf2c9f;', routes);

export default routes
