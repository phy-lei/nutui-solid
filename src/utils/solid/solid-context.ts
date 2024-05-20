import {
  createContext as createSolidContext,
  useContext as useSolidContext,
} from 'solid-js'
import { type ContextProviderComponent, type Context } from 'solid-js'

export interface CreateContextOptions<T> {
  hookName?: string
  providerName?: string
  errorMessage?: string
  name?: string
  defaultValue?: T
}

export type CreateContextReturn<T> = [
  ContextProviderComponent<T>,
  () => T,
  Context<T>,
]

function getErrorMessage(hook: string, provider: string) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`
}

export function createContext<T>(options: CreateContextOptions<T> = {}) {
  const {
    hookName = 'useContext',
    providerName = 'Provider',
    errorMessage,
    defaultValue,
  } = options

  const Context = createSolidContext<T | undefined>(defaultValue)

  function useContext() {
    const context = useSolidContext(Context)

    if (!context) {
      const error = new Error(
        errorMessage ?? getErrorMessage(hookName, providerName)
      )
      error.name = 'ContextError'
      Error.captureStackTrace?.(error, useContext)
      throw error
    }

    return context
  }

  return [Context.Provider, useContext, Context] as CreateContextReturn<T>
}