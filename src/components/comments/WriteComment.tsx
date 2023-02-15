import { ChangeEventHandler, Component, ReactNode } from "react";
import EmoticonIcon, { EmoticonIconSize } from "@/components/icons/EmoticonIcon";
import styles from "@/styles/WriteComment.module.css"
import WriteCommentButton from "../buttons/WriteCommentButton";

export enum WriteCommentStyles {
    ITEM,
    POPUP
}

interface Props {
    style: WriteCommentStyles
}

interface State {
    clickable: boolean
}

class WriteComment extends Component<Props, State> {
    state: State = {
        clickable: false
    }

    onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        this.setState({
            ...this.state,
            clickable: e.target.value.length !== 0
        })
    }

    render(): ReactNode {
        switch(this.props.style) {
            case WriteCommentStyles.ITEM:
                return (
                    <div className={styles.writeComment}>
                        <textarea className={styles.textarea} placeholder="댓글 달기..." wrap="on" rows={1} onChange={this.onChange}/>
                        <WriteCommentButton style={WriteCommentStyles.ITEM} clickable={this.state.clickable}/>
                        <EmoticonIcon size={EmoticonIconSize.MINI}/>
                    </div>
                );

            case WriteCommentStyles.POPUP:
                return (
                    <div className={styles.writeComment}>
                        <div className={styles.icon}>
                            <EmoticonIcon size={EmoticonIconSize.NORMAL}/>
                        </div>
                        <textarea className={styles.textarea} placeholder="댓글 달기..." wrap="on" rows={1} onChange={this.onChange}/>
                        <WriteCommentButton style={WriteCommentStyles.POPUP} clickable={this.state.clickable}/>
                    </div>
                );
        }
    }
}

export default WriteComment;