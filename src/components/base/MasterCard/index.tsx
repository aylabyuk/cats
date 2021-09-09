import React from 'react'

import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import useStyles from './useStyles'

export interface MasterCardProps {
  /**
   * A cat's unique identifier, or slug
   */
  catId: string

  /**
   * A picture url of your little furry friend 😍
   */
  imageUrl: string
}

export const MasterCard: React.FC<MasterCardProps> = ({ catId, imageUrl }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body className={classes.cardBody}>
        <Link to={`/${catId}`}>
          <Button className={classes.button}>View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default MasterCard
