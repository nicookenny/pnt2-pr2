import { StyledInput } from "./styled-components"

export const Input = ({label, ...props}) => {
    return (<label> {label}
        <StyledInput {...props} />
    </label>)
}