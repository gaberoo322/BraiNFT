import React from 'react'

import AlchemyContext from 'src/contexts/AlchemyContext'

const AlchemyProvider: React.FC = ({ children }) => {
  return (
    <AlchemyContext.Provider value={null}>{children}</AlchemyContext.Provider>
  )
}

export default AlchemyProvider
