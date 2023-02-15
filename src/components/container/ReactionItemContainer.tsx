import { Component, ReactNode } from "react"
import styles from "@/styles/ReactionItemContainer.module.css"

interface Props {
    children: JSX.Element
}

class ReactionItemContainer extends Component<Props> {
    render(): ReactNode {
        return <div className={styles.container}>{this.props.children}</div>;
    }
}

export default ReactionItemContainer;