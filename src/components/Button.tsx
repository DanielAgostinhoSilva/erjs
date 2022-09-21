import {Component, PropsWithChildren} from "react";

type ButtonProps = PropsWithChildren<{
    onClick?: () => any,
    initializedClicked?: boolean
}>

interface ButtonState {
    alreadyClicked: boolean
}

class Button extends Component<ButtonProps, ButtonState> {

    constructor(props: ButtonProps) {
        super(props);
        this.state = {
            alreadyClicked: !!props.initializedClicked
        }
    }

    render() {
        console.log(this.props)

        return <button
            onClick={() => {
                this.setState({alreadyClicked: true})
                this.props.onClick?.call([])
            }}
            disabled={this.state.alreadyClicked}
        >
            { this.props.children}
        </button>
    }
}

export default Button