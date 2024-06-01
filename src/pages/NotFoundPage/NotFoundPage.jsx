import React from 'react'
import { Container, StatusNum, StatusText } from './NotFoundPage.styled'

export const NotFoundPage = () => {
  return (
    <Container>
        <StatusNum>404</StatusNum>
        <StatusText>Not Found</StatusText>
    </Container>

  )
}