import { Component, ReactNode } from "react"
import { PostDirection } from "@/components/posts/Post"
import styles from "@/styles/Contents.module.css"

interface Props {
    direction: PostDirection,
    images: string[]
}

interface Axis {
    container: string,
    contents: string
}

class Contents extends Component<Props> {
    render(): ReactNode {
        const { direction, images } = this.props; 
        const axis: Axis = this.getAxis(direction);
        const { container, contents } = axis;

        return (
            <div className={container + ` ${styles.contentsContainer}`}>
                <img
                    alt={images[0]}
                    className={contents + ` ${styles.contents}`}
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

    getAxis(direction: PostDirection): Axis {
        switch (direction) {
            case PostDirection.COLUMN:
                return {
                    container: styles.horizontalContainer,
                    contents: styles.horizontalContents
                };

            case PostDirection.ROW:
                return {
                    container: styles.verticalContainer,
                    contents: styles.verticalContents
                };
        }
    }
}

export default Contents;