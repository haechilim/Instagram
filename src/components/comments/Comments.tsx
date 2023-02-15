import { Component, ReactNode } from "react"
import Comment, { CommentType } from "@/components/comments/Comment"
import styles from "@/styles/Comments.module.css"

interface Props {
    postId: number
}

class Comments extends Component<Props> {
    render(): ReactNode {
        //postId를 통해 받아온 comment 리스트
        const comments: CommentType[] = [
            {
                id: 0,
                userId: "mintistration_04",
                content: "우와..",
                time: 1674093619896,
                likes: 69,
                commentsCount: 1
            },
            {
                id: 1,
                userId: "winter.aespa",
                content: "주무세요 어르신",
                time: 1674093680896,
                likes: 30,
                commentsCount: 0
            },
            {
                id: 2,
                userId: "haechilim",
                content: "이거 어디까지 내려가는 거에요?",
                time: 1674093780896,
                likes: 11,
                commentsCount: 8
            }
        ];

        return (
            <ul className={styles.container}>
                {comments.map((comment: CommentType, index: number) => (
                    <li className={styles.list} key={index}><Comment comment={comment} idOnly={false}/></li>
                ))}
            </ul>
        );
    }
}

export default Comments;