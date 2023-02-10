import { Component, ReactNode } from "react"
import CoverImage, { CoverImageSize } from "@/components/coverImage/CoverImage"
import styles from "@/styles/CoverImageGroup.module.css"

interface Props {
    images: string[],
    right: boolean
}

class CoverImageGroup extends Component<Props> {
    render(): ReactNode {
        const { images, right } = this.props;
        const bigImage = <CoverImage type={CoverImageSize.BIG} image={images[4]} right={right}/>;

        return (
            <div className={styles.coverImageGroup}>
                {right || bigImage}
                <div className={`${styles.coverImages} ${styles.marginRight}`}>
                    <CoverImage type={CoverImageSize.NORMAL} image={images[0]}/>
                    <CoverImage type={CoverImageSize.NORMAL} image={images[2]}/>
                </div>
                <div className={`${styles.coverImages} ${right && styles.marginRight}`}>
                    <CoverImage type={CoverImageSize.NORMAL} image={images[1]}/>
                    <CoverImage type={CoverImageSize.NORMAL} image={images[3]}/>
                </div>
                {right && bigImage}
            </div>
        );
    }
}

export default CoverImageGroup;