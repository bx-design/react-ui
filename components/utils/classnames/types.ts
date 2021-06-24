export type Value = string | number | boolean | undefined | null
export type Mapping = Record<string, unknown>
export type ArgumentArray = Array<Argument>
export type Argument = Value | Mapping | ArgumentArray
export type ClassesForReturn = Array<string>
