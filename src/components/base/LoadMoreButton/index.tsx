import React from 'react'

import Button from 'react-bootstrap/Button'

export interface LoadMoreButtonProps {
  onClick: () => void
  loading?: boolean
  disabled?: boolean
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onClick,
  loading,
  disabled,
}) => (
  <Button disabled={disabled || loading} variant="success" onClick={onClick}>
    {loading ? 'Loading cats...' : 'Load more'}
  </Button>
)

export default LoadMoreButton
