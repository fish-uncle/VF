export default function MapLoader(key = 'c846fee54a3a2ffa9c1165fefd609e86', version = '1.4.15') {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve({AMap: window.AMap, AMapUI: window.AMapUI})
    } else {
      window.initAMapUI = () => {
        resolve({AMap: window.AMap, AMapUI: window.AMapUI})
      }
      window.initAMap = () => {
        const script = document.createElement('script')
        script.async = true
        script.src = `//webapi.amap.com/ui/1.1/main.js?v=1.1.1`
        script.onload = initAMapUI
        script.onerror = reject
        document.head.appendChild(script)
      }
      const script = document.createElement('script')
      script.async = true
      script.src = `//webapi.amap.com/maps?v=${version}&callback=initAMap&key=${key}`
      script.onerror = reject
      document.head.appendChild(script)
    }
  })
}