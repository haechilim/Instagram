import { Component } from "react";
import styles from "@/styles/Profile.module.css"
import Avatar, { AvatarSize } from "@/components/profile/Avatar";
import LargeAvatar from "@/components/profile/LargeAvatar";

interface Props {
    id: string,
    idOnly: boolean,
    additionalInfo?: string
}

class Profile extends Component<Props> {
    mouseOverTimeoutId: NodeJS.Timer | undefined = undefined;
    mouseLeaveTimeoutId: NodeJS.Timer | undefined = undefined;
    detail: HTMLElement | null = null;

    onMouseOver = (e: React.MouseEvent<HTMLElement>): void => {
        const { id } = this.props;

        clearTimeout(this.mouseLeaveTimeoutId);
        this.mouseOverTimeoutId = setInterval(() => {
            //handleIdState(id);
            this.updateStyleMouseOver(e);
            clearTimeout(this.mouseOverTimeoutId);
        }, 500);
    };

    onMouseLeave = (e: React.MouseEvent<HTMLElement>): void => {
        clearTimeout(this.mouseOverTimeoutId);
        this.mouseLeaveTimeoutId = setInterval(() => {
            this.updateStyleMouseLeave(e);
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
                        <div className={styles.additionalInfo + (isMyId ? ` ${name}` : "")}>
                            {additionalInfo}
                        </div>
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.detail = document.querySelector<HTMLElement>(".homeWorkspaceContainer .detailContainer");
    }

    updateStyleMouseOver(e: React.MouseEvent<HTMLElement>): void {
        if(this.detail === null) return;

        const element: HTMLElement = e.target as HTMLElement;

        this.detail.style.display = "flex";
        this.detail.style.top = (element.offsetHeight + element.offsetTop) + "px";
        this.detail.style.left = element.offsetLeft + "px";
    }

    updateStyleMouseLeave(e: React.MouseEvent<HTMLElement>): void {
        if(this.detail === null) return;

        this.detail.style.display = "none";
    }
}

export default Profile;