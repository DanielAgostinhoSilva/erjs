import {Component, PropsWithChildren} from "react";

type ButtonProps = PropsWithChildren<{
    onClick?: () => any
}>

class Button extends Component<ButtonProps> {
    render() {
        console.log(this.props)

        return <button onClick={this.props.onClick}>
            { this.props.children}
        </button>
    }
}

export default Button