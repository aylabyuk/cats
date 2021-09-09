import React from 'react'
import Alert from 'react-bootstrap/Alert'

import BreedSelect, { BreedSelectProps } from '../../base/BreedSelect'

export interface SelectInputSectionProps extends BreedSelectProps {
  loading: boolean
  error: boolean
}

export const SelectInputSection: React.FC<SelectInputSectionProps> = ({
  loading,
  error,
  ...rest
}) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error || !rest.breeds.length) {
    return (
      <Alert variant="warning">
        Sorry. Can't fetch breed list right now, Meow! 😿
      </Alert>
    )
  }

  return <BreedSelect {...rest} />
}

export default SelectInputSection
