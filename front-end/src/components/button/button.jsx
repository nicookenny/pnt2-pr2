import { StyledButton } from "./styled-components"


export const Button = ({children, ...props}) =>{
    return <StyledButton {...props} > {children} </StyledButton>
}