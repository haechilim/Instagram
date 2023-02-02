import { Component, ReactNode } from "react"
import styles from "@/styles/Contents.module.css"
import { PostDirection } from "./Post"
import Image from "next/image"

interface Props {
    direction: PostDirection,
    images: string[]
}

class Contents extends Component<Props> {
    render(): ReactNode {
        const { direction, images } = this.props; 
        const axis: string = this.getAxis(direction);

        return (
            <div className={axis + ` ${styles.contentsContainer}`}>
                <img
                    alt={images[0]}
                    className={axis + ` ${styles.contents}`}
                    src={"/res/contents/" + images[0] + ".jpeg"}
                />
                {/* <button className="prev"/>
                <button className="next"/>
                <div className="pageBar">
                    <div className="pages">
                        <div className="page"/>
                        <div className="page current"/>
                        <div className="page"/>
                        <div className="page"/>
                        <div className="page"/>
                        <div className="page"/>
                        <div className="page"/>
                        <div className="page"/>
                    </div>
                </div> */}
            </div>
        );
    }

    getAxis(direction: PostDirection): string {
        switch (direction) {
            case PostDirection.COLUMN:
                return styles.horizontal;

            case PostDirection.ROW:
                return styles.vertical;
        }
    }
}

export default Contents;