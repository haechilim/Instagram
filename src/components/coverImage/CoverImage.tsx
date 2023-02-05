import { Component, ReactNode } from "react"
import Image from "next/image"
import styles from "@/styles/CoverImage.module.css"

interface Props {
    type?: string,
    image: string
    right?: boolean,
}

class CoverImage extends Component<Props> {
    render(): ReactNode {
        const { type, right, image } = this.props;

        switch(type) {
            case "big":
                return (
                    <div className={`${styles.bigImage} ${right || styles.marginRight}`}>
                        <Image 
                            alt=""
                            src={"/res/explore/" + image + ".jpg"}
                            fill
                            objectFit="cover"
                        />
                    </div>
                )
            
            case "small":
                return (
                    <div className={styles.smallImage}>
                        <Image 
                            alt=""
                            src={"/res/explore/" + image + ".jpg"}
                            fill
                            objectFit="cover"
                        />
                    </div>
                )

            default:
                return (
                    <div className={styles.coverImage}>
                        <Image 
                            alt="" 
                            src={"/res/explore/" + image + ".jpg"}
                            fill
                            objectFit="cover"
                        />
                    </div>
                )
        }
    }
}

export default CoverImage;