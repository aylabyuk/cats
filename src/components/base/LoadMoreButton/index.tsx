import React from 'react'

import Button from 'react-bootstrap/Button'

export interface LoadMoreButtonProps {
  onClick: () => void
  loading?: boolean
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onClick,
  loading,
}) => (
  <Button disabled={loading} variant="success" onClick={onClick}>
    {loading ? 'Loading cats...' : 'Load more'}
  </Button>
)

export default LoadMoreButton
