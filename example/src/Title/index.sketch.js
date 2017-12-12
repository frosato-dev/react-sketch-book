import React from 'react'
import Title from './index.js'
import { sketchOf } from 'react-sketch-book'

sketchOf('Titles')
  .add('Title H1', () => <Title fontSize={30}>This is a title H1</Title>)
  .add('Title H2', () => <Title fontSize={25}>This is a title H2</Title>)
  .add('Title H3', () => <Title fontSize={20}>This is a title H3</Title>)
  .add('Title H4', () => <Title fontSize={15}>This is a title H4</Title>)

