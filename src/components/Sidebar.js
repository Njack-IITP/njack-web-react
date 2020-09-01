import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebaricon d-none d-lg-block">
      <a href="https://www.instagram.com/iit_patna/"><img src={require('../assets/Instagram – 1.png')} /></a><br /><br />
      <a href="https://www.facebook.com/njack.iitp/"><img src={require('../assets/Facebook – 1.png')} /></a><br /><br />
      <a href="https://twitter.com/njackiitp"><img src={require('../assets/Twitter – 1.png')} /></a><br /><br />
      <a href="https://github.com/Njack-IITP"><img src={require('../assets/Github – 1.png')} /></a>
    </div>
  )
}
