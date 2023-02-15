import { Component, ReactNode } from "react";
import styles from "@/styles/Comment.module.css";
import Profile from "@/components/profile/Profile";

interface Props {
    comment: CommentType,
    idOnly: boolean
}

export type CommentType = {
    id: number,
    userId: string,
    content: string,
    time: number,
    likes?: number,
    commentsCount?: number
}

class Comment extends Component<Props> {
    render(): ReactNode {
        const { comment, idOnly } = this.props;
        const { id, userId, content, time, likes, commentsCount } = comment;

        return (
            <div className={styles.commentContainer}>
                <div className={styles.leftDiv}>
                    <div className={styles.selfComment}>
                        <Profile idOnly={idOnly} id={userId}/>
                        <div className={styles.comment}>{content}</div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;