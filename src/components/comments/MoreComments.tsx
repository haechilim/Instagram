import { Component, ReactNode } from "react";
import styles from "@/styles/MoreComments.module.css";
import Util from "@/util";

interface Props {
    commentsCount: number,
    changePopupPost: () => void,
    changePopupDisplay: () => void
}

class MoreComments extends Component<Props> {
    onClick = (): void => {
        const { changePopupPost, changePopupDisplay } = this.props;

        changePopupPost();
        changePopupDisplay();
    }

    render(): ReactNode {
        const { commentsCount } = this.props;

        return (
            <div className={styles.detailComments} onClick={this.onClick}>
                {`댓글 ${Util.getCountToString(commentsCount)}개 모두 보기`}
            </div>
        );
    }
}

export default MoreComments;