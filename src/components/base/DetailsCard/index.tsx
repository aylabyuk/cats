import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { Cat } from '../../../models'
import useStyles from './useStyles'

export interface DetailsCardProps extends Cat {
  onBackClick: () => void
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  catName,
  origin,
  temperament,
  description,
  imageUrl,
  onBackClick,
}) => {
  const classes = useStyles()

  return (
    <Card>
      <Card.Header className={classes.header}>
        <Button onClick={onBackClick} variant="primary">
          Back
        </Button>
      </Card.Header>
      <Card.Img src={imageUrl} />
      <Card.Body>
        <h4>{catName}</h4>
        <h5>{`Origin: ${origin}`}</h5>
        <h6>{temperament}</h6>
        <p>{description}</p>
      </Card.Body>
    </Card>
  )
}

export default DetailsCard
