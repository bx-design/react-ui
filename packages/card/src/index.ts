import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Card as InternalCard, CardProps } from './card'
import { CardHeader, CardHeaderProps } from './card-header'
import { CardBody, CardBodyProps } from './card-body'
import { CardFooter, CardFooterProps } from './card-footer'

interface Card
  extends ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>> {
  Header: typeof CardHeader
  Body: typeof CardBody
  Footer: typeof CardFooter
}

const Card = InternalCard as Card

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps }
export { Card, CardHeader, CardBody, CardFooter }
