import React from 'react'

import Container from 'react-bootstrap/Container'

import useStyles from './useStyles'

export interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const classes = useStyles()

  return <Container className={classes.container}>{children}</Container>
}

export default PageContainer
