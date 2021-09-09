import React, { useCallback } from 'react'

import Form from 'react-bootstrap/Form'
import { Breed } from '../../../models'
import useStyles from './useStyles'

export interface BreedSelectProps {
  breeds: Breed[]
  onSelectBreed: (breedId: string) => void
}

export const BreedSelect: React.FC<BreedSelectProps> = ({
  breeds,
  onSelectBreed,
}) => {
  const classes = useStyles()

  const handleSelect = useCallback(
    (event) => onSelectBreed(event.target.value),
    [onSelectBreed],
  )

  return (
    <Form.Group className={classes.formGroup} onChange={handleSelect}>
      <Form.Label>Breed</Form.Label>
      <Form.Select>
        <option value={0}>Select breed</option>
        {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}

export default React.memo(BreedSelect)
