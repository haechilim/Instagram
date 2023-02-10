import Button from "@/components/buttons/Button";
import CoverImage, { CoverImageSize } from "@/components/coverImage/CoverImage";
import Activity from "@/components/profile/Activity";
import Avatar, { AvatarSize } from "@/components/profile/Avatar";
import { ProfilePopUpState, changeDisplay } from "@/modules/profilePopUp";
import styles from "@/styles/Detail.module.css";
import { Component, ReactNode } from "react";
import { connect } from "react-redux";

interface User {
    id: string,
    name: string,
    link?: string,
    recentPosts: string[],
    postCount: number,
    follow: number,
    follower: number
}

interface Props {
    profilePopUpId?: string,
    display?: string,
    top?: string,
    left?: string,
    changeDisplay?: (display: string) => void,
}

class Detail extends Component<Props> {
    mouseOverTimeoutId: NodeJS.Timer | undefined = undefined;
    mouseLeaveTimeoutId: NodeJS.Timer | undefined = undefined;
    users: User[] = [
        {
            id: "haechilim",
            name: "임준형",
            recentPosts: [ "image1", "image2", "image3" ],
            postCount: 747,
            follow: 364000,
            follower: 16
        },
        {
            id: "mintistration_04",
            name: "김규원",
            recentPosts: [ "image1", "image2", "image3" ],
            postCount: 747,
            follow: 364000,
            follower: 16
        },
        {
            id: "sketcherysk",
            name: "김연서",
            recentPosts: [ "image1", "image2", "image3" ],
            postCount: 747,
            follow: 364000,
            follower: 16
        },
        {
            id: "jaehuggiesmagickpanty",
            name: "이재하",
            recentPosts: [ "image1", "image2", "image3" ],
            postCount: 747,
            follow: 364000,
            follower: 16
        },
        {
            id: "lilyiu_",
            name: "",
            recentPosts: [ "image1", "image2", "image3" ],
            postCount: 747,
            follow: 364000,
            follower: 16
        },
        {
            id: "i_am_young22",
            name: "",
            recentPosts: [ "image1", "image2", "image3" ],
            postCount: 747,
            follow: 364000,
            follower: 16
        },
        {
            id: "coolkidnoname_",
            name: "COOMO",
            recentPosts: [ "image1", "image2", "image3" ],
            postCount: 747,
            follow: 364000,
            follower: 16
        },
        {
            id: "winter.aespa",
            name: "aespa 에스파 WINTER 윈터",
            link: "https://youtube.com/watch?v=likYKQXBLbw",
            recentPosts: [ "image1", "image2", "image3" ],
            postCount: 747,
            follow: 364699,
            follower: 16
        },
        {
            id: "friendshiping94",
            name: "우정잉",
            recentPosts: [ "image1", "image2", "image3" ],
            postCount: 747,
            follow: 364000,
            follower: 16
        },
        {
            id: "yangazi025",
            name: "양아지",
            link: "https://youtube.com/channel/UCmMxEFwIOMGGoThkmtZZOvQ",
            recentPosts: [ "image4", "image5", "image6" ],
            postCount: 29,
            follow: 84999,
            follower: 73
        }
    ];

    onMouseOver = (): void => {
        const { changeDisplay } = this.props;

        this.clearTimeoutAll();
        this.mouseOverTimeoutId = setInterval(() => {
            if(changeDisplay !== undefined) changeDisplay("flex");
            clearTimeout(this.mouseOverTimeoutId);
        }, 500);
    }

    onMouseLeave = (): void => {
        const { changeDisplay } = this.props;
        
        clearTimeout(this.mouseOverTimeoutId);
        this.mouseLeaveTimeoutId = setInterval(() => {
            if(changeDisplay !== undefined) changeDisplay("none");
            clearTimeout(this.mouseLeaveTimeoutId);
        }, 500);
    }

    clearTimeoutAll(): void {
        if(this.mouseOverTimeoutId === undefined) return;

        for (let i: number = 0 ; i < 99999; i++) {
            clearInterval(i);
        }
    }

    render(): ReactNode {
        let { profilePopUpId, display, top, left } = this.props;

        if(profilePopUpId === undefined) profilePopUpId = "haechilim";

        const user: User | undefined = this.getUser(profilePopUpId)

        if(user === undefined) return;

        const { id, name, link, recentPosts, postCount, follow, follower } = user;
        const style = (display !== undefined && top !== undefined && left !== undefined) ? { display, top, left } : {};

        return (
            <div 
                id="detailContainer"
                className={styles.detailContainer}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave} 
                style={style}>
                <div className={styles.profile}>
                    <Avatar size={AvatarSize.SIZE_56} id={id}/>
                    <div className={styles.info}>
                        <div>
                            <div className={styles.id}>{id}</div>
                            <div className={styles.name}>{name}</div>
                        </div>
                        <div className={styles.additionalInfo}>
                            <div className={styles.link}>{link || ""}</div>
                            <div className={styles.message}>flo.pin59님 외 2명이 팔로우합니다</div>{/* db쓸때 처리 */}
                        </div>
                    </div>
                </div>
                <Activity postCount={postCount} follow={follow} follower={follower}/>
                <div className={styles.images}>
                    {recentPosts.map((post, index) => (
                        <div key={"recentPost" + index} className={styles.image}>
                            <CoverImage image={post} type={CoverImageSize.SMALL}/>
                            <div className={styles.mask}/>
                        </div>
                    ))}
                </div>
                <div className={styles.buttons}>
                    <Button name="메시지 보내기" marginRight={true}/>
                    <Button name="팔로잉"/>
                </div>
            </div>
        );
    }

    getUser(id: string): User | undefined {
        for(let i: number = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if(user.id === id) return user;
        }

        return undefined;
    }
}

const mapStateToProps = (state: any): ProfilePopUpState => ({
    profilePopUpId: state.profilePopUp.profilePopUpId,
    display: state.profilePopUp.display,
    top: state.profilePopUp.top,
    left: state.profilePopUp.left
});

const mapDispatchToProps = (dispatch: any): any => ({
    changeDisplay: (display: string) => dispatch(changeDisplay(display)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);