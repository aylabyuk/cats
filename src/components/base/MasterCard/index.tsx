import React, { useCallback } from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import useStyles from './useStyles'

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
  const classes = useStyles()

  const handleViewDetails = useCallback(() => onViewDetails(catId), [
    onViewDetails,
  ])

  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Button
          className={classes.button}
          variant="primary"
          onClick={handleViewDetails}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  )
}

export default MasterCard
