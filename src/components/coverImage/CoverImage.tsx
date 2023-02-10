import { Component, ReactNode } from "react"
import Image from "next/image"
import styles from "@/styles/CoverImage.module.css"

export enum CoverImageSize {
    BIG,
    NORMAL,
    SMALL
}

interface Props {
    type: CoverImageSize,
    image: string
    right?: boolean,
}

class CoverImage extends Component<Props> {
    render(): ReactNode {
        const { type, right, image } = this.props;
        const imageJSX: JSX.Element = <Image 
            alt=""
            src={"/res/explore/" + image + ".jpg"}
            fill
            objectFit="cover"
        />

        switch(type) {
            case CoverImageSize.BIG:
                return <div className={`${styles.bigImage} ${right || styles.marginRight}`}>{imageJSX}</div>

            case CoverImageSize.NORMAL:
                return <div className={styles.coverImage}>{imageJSX}</div>
            
            case CoverImageSize.SMALL:
                return <div className={styles.smallImage}>{imageJSX}</div>
        }
    }
}

export default CoverImage;