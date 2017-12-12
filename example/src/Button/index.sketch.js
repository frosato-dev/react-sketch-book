import React from 'react'
import Button from './index.js'
import { sketchOf } from 'react-sketch-book'

sketchOf('Buttons')
  .add('Button1', () => <Button>This is a button</Button>)

