import React from 'react'
import { View } from 'react-primitives'
import News from './index.js'
import { sketchOf } from 'react-sketch-book/index'
import { articles } from "../../../utils/mocks"


sketchOf('Organisms/News')
  .add('Simple', () => (
      <View style={{ width: 600 }}>
          <News
              articles={[ articles[0], articles[1] ]}
          />
      </View>
  ))

