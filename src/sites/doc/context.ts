import { createContext } from '@/utils/solid/solid-context'

type APPContextType = [string, (value: {
  path?: string;
}) => void]

export const [APPProvider, useAPPContext] =
  createContext<APPContextType>({
    name: "APPContext",
    hookName: "useAPPContext",
    providerName: "<APPProvider />",
});
