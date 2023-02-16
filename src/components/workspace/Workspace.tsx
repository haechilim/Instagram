import { Component, ReactNode } from "react"
import styles from "@/styles/Workspace.module.css"

interface Props {
    children: JSX.Element
}

class Workspace extends Component<Props> {
    render(): ReactNode {
        return <div className={styles.workspaceContainer}>{this.props.children}</div>;
    }
}

export default Workspace;