class ComponentGroup {
    /**
     * Constructor
     * @param {String} name - The name of the group of components
     */
    constructor(name) {
        this.name = name
        this.components = {}
    }

    /**
     * Add
     * @param {String} componentName - The name of the component
     * @param componentFactory - A function that return a component
     * @returns {ComponentGroup}
     */
    add(componentName, componentFactory) {
        this.components[componentName] = componentFactory
        return this
    }
}

export const groups = {}

/**
 *
 * @param {String} name - The name of the group of components
 * @returns {ComponentGroup}
 */
export const sketchOf = name => {

    if (!groups[name]) {
        groups[name] = new ComponentGroup(name)
    }

    return groups[name]
}
