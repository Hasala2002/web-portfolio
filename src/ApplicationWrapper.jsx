import React, { useState } from 'react'
import App from './App'
import RespNavigation from './utilities/RespNavigation'

const ApplicationWrapper = () => {

  const [respNavState,setRespNavState] = useState(false)

  return (
    <>
        <RespNavigation navState={respNavState} setNavState={setRespNavState} />
        <App navState={respNavState} setRespNavState={setRespNavState} />
    </>
  )
}

export default ApplicationWrapper