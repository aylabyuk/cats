import React, { useCallback } from 'react'
import Col from 'react-bootstrap/Col'

import { Cat } from '../../../models'
import useStyles from './useStyles'
import MasterCard from '../../base/MasterCard'

export interface CatListProps {
  cats: Cat[]
}

export const CatList: React.FC<CatListProps> = ({ cats }) => {
  const classes = useStyles()

  const handleViewDetails = useCallback(() => console.log('meow'), [])

  if (!cats.length) {
    return (
      <Col className={classes.noCatsCol} xs={12}>
        No cats available
      </Col>
    )
  }

  return (
    <>
      {cats.map((cat) => (
        <Col key={cat.catId} md={3} sm={6} xs={12}>
          <MasterCard {...cat} onViewDetails={handleViewDetails} />
        </Col>
      ))}
    </>
  )
}

export default React.memo(CatList)
