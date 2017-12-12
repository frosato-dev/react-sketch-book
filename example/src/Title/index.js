import React from 'react'
import { Text } from 'react-primitives';

export default ({ children, fontSize }) => (
  <Text
    name="Title"
    style={{ color: "#571845", fontWeight: 'bold', fontSize: fontSize }}
  >
    {children}
  </Text>
)


