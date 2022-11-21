# react-modal

> success modal to react

[![NPM](https://img.shields.io/npm/v/react-modal.svg)](https://www.npmjs.com/package/react-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-modal-success
```

## Usage

```jsx
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
```

## License

MIT © [Julienjs](https://github.com/Julienjs)
# Module-success-modal-react
