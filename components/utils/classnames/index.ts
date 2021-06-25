import type { ArgumentArray, ClassesForReturn, Mapping } from './types'

function classNames(...input: ArgumentArray) {
  let classes: ClassesForReturn = []
  for (let i = 0; i < input.length; i++) {
    const arg = input[i]
    if (typeof arg === 'string' || arg instanceof String) {
      classes = [...classes, arg as string]
    } else if (Array.isArray(arg)) {
      if ((arg as ArgumentArray).length) {
        const inner = classNames(...arg)
        if (inner) {
          classes = [...classes, inner]
        }
      }
    } else if (typeof arg === 'object') {
      if ((arg as Mapping).toString === Object.prototype.toString) {
        for (const key in arg) {
          if (arg[key]) {
            classes = [...classes, key]
          }
        }
      } else {
        classes = [...classes, (arg as Mapping).toString()]
      }
    }
  }
  return classes.join(' ')
}

export default classNames
