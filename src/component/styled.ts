import React, {CSSProperties, PropsWithChildren} from "react"

export const styled = <T>(tagName: string, styleProvider: (props: T) => CSSProperties) => {
    return (props: PropsWithChildren<T>) => {
        const style = styleProvider(props)
        return React.createElement(tagName, {style}, props.children)
    }
}
