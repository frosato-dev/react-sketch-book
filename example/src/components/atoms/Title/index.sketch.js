import React from 'react'
import Title from './index.js'
import { sketchOf } from 'react-sketch-book/index'

sketchOf('Atoms/Titles')
    .add('Title xs', () => <Title size="xs" theme="dark">This is a title</Title>)
    .add('Title sm', () => <Title size="sm" theme="dark">This is a title</Title>)
    .add('Title md', () => <Title size="md" theme="dark">This is a title</Title>)
    .add('Title lg', () => <Title size="lg" theme="dark">This is a title</Title>)
    .add('Title xl', () => <Title size="xl" theme="dark">This is a title</Title>)

