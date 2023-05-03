const PRESSURE_UNITS = 0.75006157584566

export const capitalizeFirstLetter = (string) => {
    if (typeof string !== 'string') return ''

    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const hpaToMmhgConverter = (hpa) => {
    return Math.round(hpa * PRESSURE_UNITS)
}

export const getTime = (seconds) => {
    return new Date(seconds * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' })
}
