export const required = value => value ? undefined : "Field is required"

export const minLength = min => value =>
    value && value.length < min ? `Min characters: ${min}` : undefined

export const maxLength = max => value =>
    value && value.length > max ? `Max characters: ${max}` : undefined