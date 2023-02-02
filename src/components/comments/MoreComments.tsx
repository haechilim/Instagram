import { Component, ReactNode } from "react";
import Util from "@/util";
import styles from "@/styles/MoreComments.module.css"

interface Props {
    commentsCount: number
}

class MoreComments extends Component<Props> {
    render(): ReactNode {
        const { commentsCount } = this.props;

        return (
            <div 
                className={styles.detailComments}
                // onClick={() => handlePostState(post)}
                >
                    {`댓글 ${Util.getCountToString(commentsCount)}개 모두 보기`}
            </div>
        );
    }
}

export default MoreComments;