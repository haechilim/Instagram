import { Component, ReactNode } from "react"
import styles from "@/styles/ExploreWorkspace.module.css"
import CoverImageGroup from "@/components/coverImage/CoverImageGroup"

class ExploreWorkspace extends Component {
    group(array: string[], count: number): string[][] {
        const result: string[][] = [];
        let group: string[] = [];

        if(count === 0) return result;

        for(let i: number = 0; i < array.length; i++) {
            if(i !== 0 && i % count === 0) {
                result.push(group);
                group = [];
            }

            group.push(array[i]);
        }

        while(group.length < count) {
            group.push("none");
        }

        result.push(group);
        return result;
    }
    
    render(): ReactNode {
        const covers: string[] = [
            "image1",
            "image2",
            "image3",
            "image4",
            "image5",
            "image6",
            "image7",
            "image8",
            "image9",
            "image10",
            "image11",
            "image12"
        ];
        const imageGroups: string[][] = this.group(covers, 5);


        return (
            <div className={styles.exploreWorkspaceContainer}>
                <div className={styles.imageContainer}>
                    {imageGroups.map((images, index) => (
                        <CoverImageGroup key={"coverImageGroup" + index} images={images} right={index % 2 === 0}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default ExploreWorkspace;