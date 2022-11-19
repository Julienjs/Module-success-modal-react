import React, { useState } from 'react'
import { Player } from "@lottiefiles/react-lottie-player";
import { Modal } from 'react-modal';
import 'react-modal/dist/index.css'

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="app">
      <button onClick={() => setShowModal(true)}> Show Modal </button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Player
          className="animation"
          autoplay
          loop={false}
          keepLastFrame={true}
          src="https://assets6.lottiefiles.com/packages/lf20_jbrw3hcz.json"
        />
        <h4 className="msg">Success</h4>
      </Modal>
    </div>
  )
}

export default App
