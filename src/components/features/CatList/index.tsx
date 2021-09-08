import React from 'react'

export interface CatListProps {
  children: React.ReactNode
}

export const CatList: React.FC<CatListProps> = ({ children }) => {
  return <div className="">{children}</div>
}

export default CatList
