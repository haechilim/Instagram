import { Component } from "react";
import styles from "@/styles/FullScreenPopup.module.css";
import CloseIcon from "@/components/icons/CloseIcon";
import { PostPopupState, changePopupDisplay } from "@/modules/postPopup";
import { connect } from "react-redux";

interface Props {
    children: JSX.Element,
    popupDisplay?: string,
    changePopupDisplay?: (display: string) => void
}

class FullScreenPopup extends Component<Props> {
    render() {
        const { children, popupDisplay, changePopupDisplay } = this.props;
        const style = { display: popupDisplay === undefined ? "none" : popupDisplay }

        return (
            <div 
                className={styles.popupContainer}
                style={style}
                onClick={() => changePopupDisplay && changePopupDisplay("none")}>
                <button className={styles.closeButton}>
                    <CloseIcon/>
                </button>
                {children}
            </div>
        );
    }
}

const mapStateToProps = (state: any): PostPopupState => ({
    popupDisplay: state.postPopup.popupDisplay
});

const mapDispatchToProps = (dispatch: any): any => ({
    changePopupDisplay: (display: string) => dispatch(changePopupDisplay(display))
});

export default connect(mapStateToProps, mapDispatchToProps)(FullScreenPopup);