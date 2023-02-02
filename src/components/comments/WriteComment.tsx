import { Component, ReactNode } from "react";
import EmoticonIcon from "@/components/icons/EmoticonIcon";
import styles from "@/styles/WriteComment.module.css"

class WriteComment extends Component {
    render(): ReactNode {
        return (
            <div className={styles.writeComment}>
                <textarea className={styles.textarea} placeholder="댓글 달기..." wrap="on" rows={1}/>
                <EmoticonIcon/>
            </div>
        );
    }
}

export default WriteComment;