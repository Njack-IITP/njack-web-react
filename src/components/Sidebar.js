import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebaricon d-none d-lg-block">
      <a href="https://www.instagram.com/iit_patna/">
          <img alt="instagram-icon" src={require('../assets/Instagram – 1.png')} />
      </a><br /><br />
      <a href="https://www.facebook.com/njack.iitp/">
          <img alt="facebook-icon" src={require('../assets/Facebook – 1.png')} />
      </a><br /><br />
      <a href="https://twitter.com/njackiitp">
          <img alt="twitter-icon" src={require('../assets/Twitter – 1.png')} />
      </a><br /><br />
      <a href="https://github.com/Njack-IITP">
          <img alt="github-icon" src={require('../assets/Github – 1.png')} />
      </a>
    </div>
  )
}
