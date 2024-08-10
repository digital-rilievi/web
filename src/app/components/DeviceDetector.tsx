import React, { useState, useEffect } from 'react';

const DeviceDetector = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isAndroid: false,
    isIOS: false,
    isChrome: false,
    isSafari: false,
    isFirefox: false,
    iosVersion: '',
  });

  useEffect(() => {
    // Define the user-agent string and platform
    const userAgent = navigator.userAgent;

    // Device detection
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isChrome = /Chrome/.test(userAgent) && !/Edge/.test(userAgent) && !/OPR/.test(userAgent);
    const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent) && !/Edge/.test(userAgent) && !/OPR/.test(userAgent);
    const isFirefox = (/Firefox/.test(userAgent)) && !/Trident/.test(userAgent);

    // Detect iOS version
    const iosVersionMatch = userAgent.match(/OS (\d+_\d+)/);
    const iosVersion = iosVersionMatch ? iosVersionMatch[1].replace('_', '.') : '';

    // Update state
    setDeviceInfo({
      isAndroid,
      isIOS,
      isChrome,
      isSafari,
      isFirefox,
      iosVersion,
    });

    console.log("userAgent: " + userAgent);
    console.log("isAndroid: " + isAndroid);
    console.log("isIOS: " + isIOS);
    console.log("isChrome: " + isChrome);
    console.log("isSafari: " + isSafari);
    console.log("isFirefox: " + isFirefox);
    console.log("iosVersionMatch: " + iosVersionMatch);
    console.log("iosVersion: " + iosVersion);
  }, []);

  return (
    <>
      {deviceInfo.isAndroid && <p>You are using an Android device.</p>}
      {deviceInfo.isIOS && (
        <div>
          <p>You are using an iOS device.</p>
          {deviceInfo.iosVersion && <p>iOS Version: {deviceInfo.iosVersion}</p>}
        </div>
      )}
      {deviceInfo.isChrome && <p>You are using Chrome.</p>}
      {deviceInfo.isSafari && <p>You are using Safari.</p>}
      {deviceInfo.isFirefox && <p>You are using Firefox.</p>}
      {!deviceInfo.isChrome && !deviceInfo.isSafari && !deviceInfo.isFirefox && <p>You are using a different browser.</p>}
    </>
  );
};

export default DeviceDetector;
