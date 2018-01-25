import React from 'react'
import { render, Artboard, View, Text } from 'react-sketchapp'
import { groups } from './index'
import '../tmp/imports'

// @TODO inject with config
const CONFIG = {
    page: {
        name: 'Main',
        style: {
            flexDirection: 'row',
            padding: 30
        }
    },
    group: {
        name: 'Name',
        wrapper: {
            flexDirection: 'column',
            padding: 30
        },
        title: {
            fontSize: 24,
            color: '#ccc'
        }
    },
    component: {
        name: 'Component',
        wrapper: {
            marginTop: 10,
            flex: 1
        },
        description: {
            fontSize: 12,
            color: '#ccc'
        }
    }
}

const Group = ({ name, children }) => (
    <View name={name} style={{ ...CONFIG.group.wrapper }}>
        <Text name={CONFIG.group.name} style={{ ...CONFIG.group.title }}>
            {name}
        </Text>
        {children}
    </View>
)

const Component = ({ component, description }) => {
    return (
        <View name={CONFIG.component.name} style={{ ...CONFIG.component.wrapper }}>
            <Text name="description" style={{ ...CONFIG.component.description }}>
                {description}
            </Text>
            <View name="item">{component}</View>
        </View>
    )
}

const Page = () => (
    <Artboard name={CONFIG.page.name} style={{ ...CONFIG.page.style }}>
        {Object.values(groups).map((group, index) => (
            <Group name={group.name} key={`group_${index}`}>
                {Object.keys(group.components).map((componentName, index) => (
                    <Component
                        key={`component_${componentName}_${index}`}
                        description={componentName}
                        component={group.components[componentName]()}
                    />
                ))}
            </Group>
        ))}
    </Artboard>
)

export default context => {
    render(<Page />, context.document.currentPage())
}
