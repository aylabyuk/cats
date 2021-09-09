import React from 'react'

import Button from 'react-bootstrap/Button'

export interface LoadMoreButtonProps {
  /**
   * Callback function when user clicks the button
   */
  onClick: () => void

  /**
   * Flag whether it is currently fetching data from API
   */
  loading?: boolean

  /**
   * Flag whether the button should be disabled or not
   */
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
