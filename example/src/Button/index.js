import React from 'react'
import { Text, View } from 'react-primitives';

export default ({ children, fontSize }) => (
  <View name="Button" style={{ backgroundColor: '#571845', padding: 5 }}>
    <Text
      style={{ color: "white", fontWeight: 'bold', fontSize: fontSize }}
    >
      {children}
    </Text>
  </View>
)


