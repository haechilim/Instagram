import { Component, ReactNode } from "react";
import styles from "@/styles/Comment.module.css";
import Profile from "@/components/profile/Profile";

interface Props {
    id: string,
    comment: string
}

class Comment extends Component<Props> {
    render(): ReactNode {
        const { id, comment } = this.props;
        return (
            <div className={styles.commentContainer}>
                <div className={styles.leftDiv}>
                    <div className={styles.selfComment}>
                        <Profile idOnly={true} id={id}/>
                        <div className={styles.comment}>{comment}</div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;