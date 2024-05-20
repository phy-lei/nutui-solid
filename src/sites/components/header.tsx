import Taro from '@tarojs/taro'
import './header.scss'
import config from '../../config.json'

const Header = () => {
  const navigateTo = () => {
    Taro.navigateBack({
      delta: 1,
    })
  }

  const compName = () => {
    let allComps: any = []
    let hashCompName = location.hash.split('pages/')[1].replace('/index', '')
    config.nav.map((item: any) => {
      allComps = [...allComps, ...item.packages]
    })

    let targetComp = allComps.filter(
      (item: any) => hashCompName === item.name.toLowerCase()
    )

    return targetComp[0]?.name
  }

  return (
    <>
      {Taro.getEnv() === 'WEB' ? (
        <div class="applets-demo-header">
          <div class="back" onClick={navigateTo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#ffa200" d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z"/></svg>
          </div>
          <div class="applets-icon">
            <img src="https://img13.360buyimg.com/imagetools/jfs/t1/67106/30/23857/9375/63b4df85Fce5fd959/35265019206515fe.png" />
          </div>
          <div>{compName()}</div>
        </div>
      ) : null}
    </>
  )
}

export default Header
