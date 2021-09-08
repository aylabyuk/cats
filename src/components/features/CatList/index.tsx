import React, { useCallback } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

import { Cat } from '../../../models'
import MasterCard from '../../base/MasterCard'

export interface CatListProps {
  cats: Cat[]
}

export const CatList: React.FC<CatListProps> = ({ cats }) => {
  const handleViewDetails = useCallback(() => console.log('meow'), [])

  return (
    <Row>
      {cats.map((cat) => (
        <Col key={cat.catId} md={3} sm={6} xs={12}>
          <MasterCard {...cat} onViewDetails={handleViewDetails} />
        </Col>
      ))}
    </Row>
  )
}

export default React.memo(CatList)