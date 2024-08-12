import { useState, useEffect } from 'react'

const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({ device: '', os: '', iosVersion: '' })

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
    let os = 'Other'

    if (isChrome) {
      os = 'Chrome'
    } else if (isSafari) {
      os = 'Safari'
    } else if (isFirefox) {
      os = 'Firefox'
    } else if (isIOS) {
      os = `iOS`
    }

    setDeviceInfo({ device, os, iosVersion })

  }, [])

  return deviceInfo
};

export default useDeviceInfo