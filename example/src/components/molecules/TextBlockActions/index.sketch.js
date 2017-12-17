import React from 'react'
import { sketchOf } from 'react-sketch-book/index'
import { View } from 'react-primitives'

import TextBlockActions from './index.js'

const WIDTH = 400

sketchOf('Molecules/TextBlock')
    .add('Without action', () => (
        <View style={{ width: WIDTH }}>
            <TextBlockActions
                title="Ornare Nibh"
                subtitle="Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla."
                theme="dark"
            />
        </View>
    ))
    .add('With one actions', () => (
        <View style={{ width: WIDTH }}>
            <TextBlockActions
                title="Ornare Nibh"
                subtitle="Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla."
                theme="dark"
                callToActions={[
                    { title:'Pellentesque'},
                ]}
            />
        </View>
    ))
    .add('With two actions', () => (
        <View style={{ width: WIDTH }}>
            <TextBlockActions
                title="Ornare Nibh"
                subtitle="Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla."
                theme="dark"
                callToActions={[
                    { title:'Pellentesque'},
                    { title:'Vestibulum'}
                ]}
                width={WIDTH}
            />
        </View>
    ))


