/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'

export function createMemoClass(func: (props: any) => string) {
  return function useMemoClass(args?: any): string {
    const dependencies =
      typeof args === 'object' && args !== null
        ? Object.keys(args)
            .filter(key => key !== 'theme')
            .map(key => args[key])
        : []

    return useMemo(() => func(args), dependencies)
  }
}
