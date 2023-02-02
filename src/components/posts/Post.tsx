import { Component, ReactNode } from "react"
import Comment from "@/components/comments/Comment"
import MoreComments from "@/components/comments/MoreComments"
import WriteComment from "@/components/comments/WriteComment"
import OptionIcon from "@/components/icons/OptionIcon"
import ActionPanel from "@/components/panel/ActionPanel"
import Profile from "@/components/profile/Profile"
import styles from "@/styles/Post.module.css"
import Util from "@/util"
import Contents from "./Contents"

export enum PostDirection {
    COLUMN,
    ROW
}

export type PostType = {
    id: string,
    time: number,
    images: string[],
    likes: number,
    commentsCount: number,
    mainComment: string
}

interface Props {
    direction: PostDirection,
    post: PostType
}

class Post extends Component<Props> {
    render(): ReactNode {
        const { direction, post } = this.props;
        const { id, time, images, likes, commentsCount, mainComment } = post;
        const { COLUMN, ROW } = PostDirection;

        switch(direction) {
            case COLUMN:
                return (
                    <li className={styles.postItemContainer}>
                        <div className={styles.itemTopBar}>
                            <Profile id={id} idOnly={false}/>
                            <div className={styles.time}>
                                <div className={styles.dot}>•</div>
                                <div>{Util.timeToString(time)}</div>
                            </div>
                            <div className={styles.optionDiv}>
                                <button className={styles.optionButton}>
                                    <OptionIcon/>
                                </button>
                            </div>
                        </div>
                        <div className={styles.contentsBox}>
                            <Contents direction={COLUMN} images={images}/>
                        </div>
                        <div className={styles.bottomBar}>
                            <ActionPanel likes={likes}/>
                            <Comment id={id} comment={mainComment}/>
                            <MoreComments commentsCount={commentsCount}/>
                            <WriteComment/>
                        </div>
                    </li>
                );
            
            case ROW:
                return (
                    <div className={styles.postContainer}>
                        <div className={styles.contentsContainer}>
                            <Contents direction={ROW} images={images}/>
                        </div>
                        <div className={styles.reactionContainer}>
                            <div className={styles.topBar}>
                                <Profile id={id} idOnly={false}/>
                                <button className={styles.optionButton}>
                                    <OptionIcon/>
                                </button>
                            </div>
                        </div>
                    </div>
                );

            default:
                return <></>;
        }
    }
}

export default Post;