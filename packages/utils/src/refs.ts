import { useMemo, Ref, RefObject, MutableRefObject } from 'react'

type ReactRef<T> = Ref<T> | RefObject<T> | MutableRefObject<T>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setRef<T = any>(ref: ReactRef<T> | undefined, value: T) {
  if (typeof ref == 'function') {
    ref(value)
  } else if (ref) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ref.current = value
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useForkRef<T = any>(
  refA: ReactRef<T> | undefined,
  refB: ReactRef<T> | undefined
) {
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null
    }
    return (refValue: T) => {
      setRef(refA, refValue)
      setRef(refB, refValue)
    }
  }, [refA, refB])
}
