import { Component, ReactNode } from "react"
import CoverImage from "@/components/coverImage/CoverImage"
import styles from "@/styles/CoverImageGroup.module.css"

interface Props {
    images: string[],
    right: boolean
}

class CoverImageGroup extends Component<Props> {
    render(): ReactNode {
        const { images, right } = this.props;
        const bigImage = <CoverImage type="big" image={images[4]} right={right}/>;

        return (
            <div className={styles.coverImageGroup}>
                {right || bigImage}
                <div className={`${styles.coverImages} ${styles.marginRight}`}>
                    <CoverImage image={images[0]}/>
                    <CoverImage image={images[2]}/>
                </div>
                <div className={`${styles.coverImages} ${right && styles.marginRight}`}>
                    <CoverImage image={images[1]}/>
                    <CoverImage image={images[3]}/>
                </div>
                {right && bigImage}
            </div>
        );
    }
}

export default CoverImageGroup;