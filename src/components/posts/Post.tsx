import { Component, ReactNode } from "react"
import { changePopupDisplay, changePopupPost, PostPopupState } from "@/modules/postPopup"
import { connect } from "react-redux"
import Comment, { CommentType } from "@/components/comments/Comment"
import MoreComments from "@/components/comments/MoreComments"
import WriteComment, { WriteCommentStyles } from "@/components/comments/WriteComment"
import OptionIcon from "@/components/icons/OptionIcon"
import ActionPanel from "@/components/panel/ActionPanel"
import Profile from "@/components/profile/Profile"
import styles from "@/styles/Post.module.css"
import Contents from "@/components/posts/Contents"
import ReactionItemContainer from "@/components/container/ReactionItemContainer"
import Time from "@/components/util/Time"
import Comments from "@/components/comments/Comments"

export enum PostDirection {
    COLUMN,
    ROW
}

export type PostType = {
    id: number,
    userId: string,
    time: number,
    images: string[],
    likes: number,
    commentsCount: number,
    mainComment: CommentType
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

        const { id, userId, time, images, likes, commentsCount, mainComment } = targetPost;
        const { COLUMN, ROW } = PostDirection;

        switch(direction) {
            case COLUMN:
                return (
                    <li className={styles.postItemContainer}>
                        <div className={styles.itemTopBar}>
                            <Profile id={userId} idOnly={false}/>
                            <div className={styles.time}>
                                <div className={styles.dot}>•</div>
                                <Time time={time}/>
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
                            <Comment comment={mainComment} idOnly={true}/>
                            <MoreComments 
                                commentsCount={commentsCount}
                                changePopupPost={() => changePopupPost !== undefined && changePopupPost(targetPost)}
                                changePopupDisplay={() => changePopupDisplay !== undefined && changePopupDisplay("flex")}
                            />
                            <WriteComment style={WriteCommentStyles.ITEM}/>
                        </div>
                    </li>
                );
            
            case ROW:
                return (
                    <div className={styles.postContainer} onClick={e => e.stopPropagation()}>
                        <div className={styles.contentsContainer}>
                            <Contents direction={ROW} images={images}/>
                        </div>
                        <div className={styles.reactionContainer}>
                            <div className={styles.topBar}>
                                <Profile id={userId} idOnly={false}/>
                                <button className={styles.optionButton}>
                                    <OptionIcon/>
                                </button>
                            </div>
                            <Comments postId={id}/>
                            <ReactionItemContainer>
                                <ActionPanel likes={likes} time={time}/>
                            </ReactionItemContainer>
                            <ReactionItemContainer>
                                <WriteComment style={WriteCommentStyles.POPUP}/>
                            </ReactionItemContainer>
                        </div>
                    </div>
                );

            default:
                return <></>;
        }
    }
}

const mapStateToProps = (state: any): PostPopupState => ({
    popupPost: state.postPopup.popupPost,
    popupDisplay: state.postPopup.popupDisplay
});

const mapDispatchToProps = (dispatch: any): any => ({
    changePopupPost: (post: PostType) => dispatch(changePopupPost(post)),
    changePopupDisplay: (display: string) => dispatch(changePopupDisplay(display))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);