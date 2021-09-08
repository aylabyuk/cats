import React, { useCallback } from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export interface MasterCardProps {
  catId: string
  imageUrl: string
  onViewDetails: (catId: string) => void
}

export const MasterCard: React.FC<MasterCardProps> = ({
  catId,
  imageUrl,
  onViewDetails,
}) => {
  const handleViewDetails = useCallback(() => onViewDetails(catId), [
    onViewDetails,
  ])

  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Button variant="primary" onClick={handleViewDetails}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  )
}

export default MasterCard
