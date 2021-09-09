import React, { useCallback } from 'react'
import Form from 'react-bootstrap/Form'

import { Breed } from '../../../models'
import useQuery from '../../hooks/useQuery'
import useStyles from './useStyles'

export interface BreedSelectProps {
  /**
   *  List of cat breeds
   */
  breeds: Breed[]

  /**
   *  Callback when selecting a breed
   */
  onSelectBreed: (breedId: string) => void
}

export const BreedSelect: React.FC<BreedSelectProps> = ({
  breeds,
  onSelectBreed,
}) => {
  const query = useQuery()
  const classes = useStyles()

  const handleSelect = useCallback(
    (event) => onSelectBreed(event.target.value),
    [onSelectBreed],
  )

  return (
    <Form.Group className={classes.formGroup} onChange={handleSelect}>
      <Form.Label>Breed</Form.Label>
      <Form.Select defaultValue={query.get('breed') || ''}>
        <option>Select breed</option>
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
