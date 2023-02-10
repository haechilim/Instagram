import { Component } from "react";
import styles from "@/styles/FullScreenPopup.module.css";
import CloseIcon from "@/components/icons/CloseIcon";

interface Props {
    children?: JSX.Element
}

class FullScreenPopup extends Component<Props> {
    render() {
        const { children } = this.props;

        return (
            <div className={styles.popupContainer}>
                <button className={styles.closeButton}>
                    <CloseIcon/>
                </button>
                {children}
            </div>
        );
    }
}

export default FullScreenPopup;