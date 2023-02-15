import { CSSProperties, Component, ReactNode } from "react"
import { WriteCommentStyles } from "../comments/WriteComment"
import styles from "@/styles/WriteCommentButton.module.css"

interface Props {
    style: WriteCommentStyles,
    clickable: boolean
}

class WriteCommentButton extends Component<Props> {
    render(): ReactNode {
        const { style, clickable } = this.props;
        const visibility: CSSProperties = {
            visibility: clickable ? "visible" : "hidden"
        }

        switch(style) {
            case WriteCommentStyles.ITEM:
                return <button className={`${styles.button} ${styles.marginRight}`} style={visibility}>게시</button>

            case WriteCommentStyles.POPUP:
                return <button className={clickable ? styles.button : styles.nonClickable}>게시</button>
        }
    }
}

export default WriteCommentButton;