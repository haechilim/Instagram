import { Component } from "react"
import styles from "@/styles/Button.module.css"

interface Props {
    name: string,
    marginRight?: boolean
}

class Button extends Component<Props> {
    render() {
        const { name, marginRight } = this.props;

        return (
            <button className={`${styles.button} ${marginRight && styles.marginRight}`}>{name}</button>
        );
    }
}

export default Button;