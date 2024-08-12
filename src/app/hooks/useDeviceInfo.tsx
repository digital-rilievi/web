import { useState, useEffect } from 'react'

const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({ browser: '', device: '', iosVersion: '' })

  useEffect(() => {
    // Define the user-agent string and platform
    const userAgent = navigator.userAgent

    // Device detection
    const isAndroid = /Android/i.test(userAgent)
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent)

    const isChrome = /Chrome/.test(userAgent) && !/Edge/.test(userAgent) && !/OPR/.test(userAgent)
    const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent) && !/Edge/.test(userAgent) && !/OPR/.test(userAgent)
    const isFirefox = /Firefox/.test(userAgent) && !/Trident/.test(userAgent);

    // Detect iOS version
    const iosVersionMatch = userAgent.match(/OS (\d+_\d+)/)
    const iosVersion = iosVersionMatch ? iosVersionMatch[1].replace('_', '.') : ''

    // Determine device and os
    const device = isAndroid ? 'Android' : isIOS ? 'iOS' : 'Other'
    let browser = 'Other'

    if (isChrome) {
      browser = 'Chrome'
    } else if (isSafari) {
      browser = 'Safari'
    } else if (isFirefox) {
      browser = 'Firefox'
    } else if (isIOS) {
      browser = `iOS`
    }

    setDeviceInfo({ browser, device, iosVersion })

  }, [])

  return deviceInfo
};

export default useDeviceInfo