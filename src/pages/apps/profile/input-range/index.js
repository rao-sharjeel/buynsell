import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

import './styles.scss'

const InputRangeComponenet = () => {
  return (
    <>
      <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '30px' }}>App Score</h4>
      <div className="d-flex align-items-center">
        <ProgressBar
          completed={60}
          className="wrapper"
          barContainerClassName="container"
          completedClassName="barCompleted"
          labelClassName="label"
          customLabel="Base Score 60"
        />
        <h4 style={{ marginLeft: '20px', fontSize: '14px', fontWeight: '600' }}>60</h4>
      </div>
    </>
  )
}

export default InputRangeComponenet
