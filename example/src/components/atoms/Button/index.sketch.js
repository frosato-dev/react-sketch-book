import React from 'react'
import Button from './index.js'
import { sketchOf } from 'react-sketch-book/index'

sketchOf('Atoms/Buttons')
    .add('Default', () => <Button>This is a button</Button>)
    .add('Primary', () => <Button type="primary">This is a button</Button>)
    .add('Secondary', () => <Button type="secondary">This is a button</Button>)
    .add('Tertiary', () => <Button type="tertiary">This is a button</Button>)

