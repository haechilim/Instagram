import { Component, ReactNode } from "react";
import LargeAvatar from "@/components/profile/LargeAvatar";
import styles from "@/styles/Story.module.css"

interface Props {
    id: string,
    checked?: boolean
}

class Story extends Component<Props> {
    render(): ReactNode {
        const { id, checked } = this.props;

        return (
            <li className={styles.storyListItem}>
                <LargeAvatar id={id} checked={checked}/>
                <div className={`${styles.id} ${checked ? styles.checkedText : styles.uncheckedText}`}>{id}</div>
            </li>
        );
    }
}

export default Story;