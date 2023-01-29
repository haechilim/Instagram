import { Component, ReactNode } from "react"
import styles from "@/styles/Progress.module.css"

class Progress extends Component {
    render(): ReactNode {
        return (
            <div className={styles.total}>
                <div className={styles.progressBar}/>
            </div>
        );
    };
}

export default Progress;