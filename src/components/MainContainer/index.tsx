import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import _Main, { MainProps } from './Main'
import MainButton from './MainButton'

export type { MainProps } from './Main'
export type { MainButtonProps } from './MainButton'

type CompoundedComponent = ForwardRefExoticComponent<
    MainProps & RefAttributes<HTMLDivElement>
> & {
    Button: typeof MainButton
}

const Main = _Main as CompoundedComponent

Main.Button = MainButton

export { Main }

export default Main
