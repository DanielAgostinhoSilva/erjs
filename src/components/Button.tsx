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
        console.log('constructor')
        this.state = {
            alreadyClicked: !!props.initializedClicked
        }
    }

    render() {
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

    componentDidMount() {
        console.log('componentDidMount')
        setTimeout(() => {
            this.setState({
                alreadyClicked: false
            })
        }, 5000)
    }

    componentDidUpdate(prevProps: Readonly<ButtonProps>, prevState: Readonly<ButtonState>, snapshot?: any) {
        console.log('anterior', prevState)
        console.log('atual', this.state)
    }
}

export default Button