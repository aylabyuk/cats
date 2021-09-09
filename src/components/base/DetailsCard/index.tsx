import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import { Cat } from '../../../models'
import useStyles from './useStyles'

export interface DetailsCardProps extends Cat {}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  id,
  name,
  origin,
  temperament,
  description,
  imageUrl,
}) => {
  const classes = useStyles()

  return (
    <Card>
      <Card.Header className={classes.header}>
        <Link
          to={{
            pathname: '/',
            search: `?breed=${id}`,
          }}
          component={Button}
        >
          Back
        </Link>
      </Card.Header>
      <Card.Img src={imageUrl} />
      <Card.Body>
        <h4>{name}</h4>
        <h5>{`Origin: ${origin}`}</h5>
        <h6>{temperament}</h6>
        <p>{description}</p>
      </Card.Body>
    </Card>
  )
}

export default DetailsCard
