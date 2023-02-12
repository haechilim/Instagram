import { Component, ReactNode } from "react"
import { changePopupDisplay, changePopupPost, PostPopupState } from "@/modules/postPopup"
import { connect } from "react-redux"
import Comment from "@/components/comments/Comment"
import MoreComments from "@/components/comments/MoreComments"
import WriteComment from "@/components/comments/WriteComment"
import OptionIcon from "@/components/icons/OptionIcon"
import ActionPanel from "@/components/panel/ActionPanel"
import Profile from "@/components/profile/Profile"
import styles from "@/styles/Post.module.css"
import Contents from "@/components/posts/Contents"
import Util from "@/util"

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
    post?: PostType
    popupPost?: PostType,
    changePopupPost?: (post: PostType) => void,
    changePopupDisplay?: (display: string) => void
}

class Post extends Component<Props> {
    render(): ReactNode {
        const { direction, post, popupPost, changePopupPost, changePopupDisplay } = this.props;
        let targetPost: PostType;

        if(post !== undefined) targetPost = post;
        else if(popupPost !== undefined) targetPost = popupPost;
        else return;

        const { id, time, images, likes, commentsCount, mainComment } = targetPost;
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
                            <MoreComments 
                                commentsCount={commentsCount}
                                changePopupPost={() => changePopupPost !== undefined && changePopupPost(targetPost)}
                                changePopupDisplay={() => changePopupDisplay !== undefined && changePopupDisplay("flex")}
                            />
                            <WriteComment/>
                        </div>
                    </li>
                );
            
            case ROW:
                return (
                    <div className={styles.postContainer} onClick={(e) => e.stopPropagation()}>
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

const mapStateToProps = (state: any): PostPopupState => (console.log(state), {
    popupPost: state.postPopup.popupPost,
    popupDisplay: state.postPopup.popupDisplay
});

const mapDispatchToProps = (dispatch: any): any => ({
    changePopupPost: (post: PostType) => dispatch(changePopupPost(post)),
    changePopupDisplay: (display: string) => dispatch(changePopupDisplay(display))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);