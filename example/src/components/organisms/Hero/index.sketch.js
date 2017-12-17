import React from 'react'
import Hero from './index.js'
import { sketchOf } from 'react-sketch-book/index'

sketchOf('Organisms/Hero')
  .add('Simple Image & Texts', () => (
      <Hero
          color="dark"
          title="Ridiculus"
          subtitle="Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
          image="https://images.unsplash.com/photo-1509664158680-07c5032b51e5?q=80"
          callToActions={[
              { title:'FUSCEL' },
              { title:'LOREM IPSUM' },
          ]}
      />
  ))

