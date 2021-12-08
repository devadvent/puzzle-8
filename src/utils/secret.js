export const hasDuplicates = arr => {
    return new Set(arr).size !== arr.length
}

export const assignNames = names => {
    // Return an array of objects with name and secretSanta.
    // Example:
    // [
    //     { name: 'Jimmy', secretSanta: 'Johnny' },
    //     { name: 'Johnny', secretSanta: 'Sandra' },
    //     { name: 'Sandra', secretSanta: 'Jimmy' },
    // ]

    // Rules:
    // - There should be a secret santa for everyone
    // - The secret santa should not be the same as the name
    // - When there are duplicate names, throw an Error('DUPLICATE_NAMES')
    return []
}
