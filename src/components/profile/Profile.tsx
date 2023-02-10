import { Component } from "react"
import styles from "@/styles/Profile.module.css"
import Avatar, { AvatarSize } from "@/components/profile/Avatar"
import LargeAvatar from "@/components/profile/LargeAvatar"
import { ProfilePopupState, changeDisplay, changePosition } from "@/modules/profilePopup"
import { changeUser } from "@/modules/profilePopup"
import { connect } from "react-redux"

interface Props {
    id: string,
    idOnly: boolean,
    additionalInfo?: string,
    changeUser?: (id: string) => void,
    changeDisplay?: (display: string) => void,
    changePosition?: (top: string, left: string) => void,
}

class Profile extends Component<Props> {
    mouseOverTimeoutId: NodeJS.Timer | undefined = undefined;
    mouseLeaveTimeoutId: NodeJS.Timer | undefined = undefined;

    onMouseOver = (e: React.MouseEvent<HTMLElement>): void => {
        const { id, changeUser, changeDisplay, changePosition } = this.props;

        clearTimeout(this.mouseLeaveTimeoutId);
        this.mouseOverTimeoutId = setInterval(() => {
            if(changeUser !== undefined) changeUser(id);
            if(changeDisplay !== undefined && changePosition !== undefined) this.updateStyleMouseOver(e, changeDisplay, changePosition);
            clearTimeout(this.mouseOverTimeoutId);
        }, 500);
    };

    onMouseLeave = (e: React.MouseEvent<HTMLElement>): void => {
        const { changeDisplay } = this.props;

        clearTimeout(this.mouseOverTimeoutId);
        this.mouseLeaveTimeoutId = setInterval(() => {
            if(changeDisplay !== undefined) changeDisplay("none");
            clearTimeout(this.mouseLeaveTimeoutId);
        }, 500);
    };
    
    render() {
        const myId: string = "haechilim";
        const { id, idOnly, additionalInfo } = this.props;
        const isMyId: boolean = id === myId;

        return (
            <div id={id} className={styles.profileContainer}>
                {idOnly || (isMyId ? <LargeAvatar id={id}/> : 
                    <Avatar
                        size={AvatarSize.SIZE_32}
                        id={id}
                        onMouseOver={this.onMouseOver}
                        onMouseLeave={this.onMouseLeave}
                    />
                )}
                <div className={styles.info + (idOnly ? "" : (` ${styles.marginLeft}` + (isMyId ? ` ${styles.padding}` : "")))}>
                    <div 
                        className={styles.id}
                        onMouseOver={!isMyId ? this.onMouseOver : undefined}
                        onMouseLeave={!isMyId ? this.onMouseLeave : undefined}>
                        {id}
                    </div>
                    {additionalInfo !== undefined &&
                        <div className={styles.additionalInfo + (isMyId ? ` ${styles.name}` : "")}>
                            {additionalInfo}
                        </div>
                    }
                </div>
            </div>
        );
    }

    updateStyleMouseOver(e: React.MouseEvent<HTMLElement>, changeDisplay: (display: string) => void, changePosition: (top: string, left: string) => void): void {
        const element: HTMLElement = e.target as HTMLElement;
        const top: string = (element.offsetHeight + element.offsetTop) + "px";
        const left: string = element.offsetLeft + "px";
        
        changeDisplay("flex");
        changePosition(top, left);
    }
}

const mapStateToProps = (state: any): ProfilePopupState => ({
    profilePopupId: state.profilePopup.profilePopupId,
    display: state.profilePopup.display,
    top: state.profilePopup.top,
    left: state.profilePopup.left
});

const mapDispatchToProps = (dispatch: any): any => ({
    changeUser: (id: string) => dispatch(changeUser(id)),
    changeDisplay: (display: string) => dispatch(changeDisplay(display)),
    changePosition: (top: string, left: string) => dispatch(changePosition(top, left)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);