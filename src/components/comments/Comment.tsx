import { Component, ReactNode } from "react"
import styles from "@/styles/Comment.module.css"
import Profile from "@/components/profile/Profile"
import Util from "@/util"

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
        const { userId, content } = comment;

        return (
            <div className={styles.commentContainer}>
                {idOnly ? 
                    <div className={styles.mainDiv}>
                        <div className={styles.selfComment}>
                            <Profile idOnly={idOnly} id={userId}/>
                            <div className={styles.comment}>{content}</div>
                        </div>
                    </div>:
                    <div className={styles.mainDiv}>
                        <div className={styles.selfComment}>
                            <Profile idOnly={idOnly} id={userId} comment={comment}/>
                            <div className={styles.comment}>{content}</div>
                        </div>
                        <div className={styles.commentInfoContainer}>
                            <button className={styles.button}>{Util.timeToString(comment.time)}</button>
                            <button className={styles.button}>좋아요 {comment.likes}개</button>
                            <button className={styles.button}>답글 달기</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Comment;