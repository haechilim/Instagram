import { Component, ReactNode } from "react";
import styles from "@/styles/Avatar.module.css"
import Image from "next/image";

class NoExistUserForId extends Error {
    constructor(message: string) {
        super(message);
        this.message = "NoExistUserForId";
    }
}

export enum AvatarSize {
    SIZE_24 = 24,
    SIZE_32 = 32,
    SIZE_44 = 44,
    SIZE_56 = 56
}

interface Props {
    size: AvatarSize,
    id: string,
    selected?: boolean,
    story?: boolean,
    onMouseOver?: () => void,
    onMouseLeave?: () => void,
}

interface User {
    id: string,
    name: string,
    image: string,
    checked?: boolean
}

class Avatar extends Component<Props> {
    users: User[] = [
        {
            id: "haechilim",
            name: "임준형",
            image: "defaultProfile"
        },
        {
            id: "mintistration_04",
            name: "김규원",
            image: "user1"
        },
        {
            id: "sketcherysk",
            name: "김연서",
            image: "defaultProfile"
        },
        {
            id: "jaehuggiesmagickpanty",
            name: "이재하",
            image: "user2",
        },
        {
            id: "lilyiu_",
            name: "",
            image: "user4",
        },
        {
            id: "i_am_young22",
            name: "",
            image: "user3",
            checked: true
        },
        {
            id: "coolkidnoname_",
            name: "COOMO",
            image: "user5"
        },
        {
            id: "winter.aespa",
            name: "aespa 에스파 WINTER 윈터",
            image: "user6",
            checked: false
        },
        {
            id: "friendshiping94",
            name: "우정잉",
            image: "user7",
            checked: false
        },
        {
            id: "yangazi025",
            name: "양아지",
            image: "user8"
        }
    ];

    render(): ReactNode {
        try {
            const { size, id, selected, story, onMouseOver, onMouseLeave} = this.props;
            const { image, checked } = this.getUserById(id);
            const borderSize: number = this.getBorderSize(checked, size, story);
            const className: string = this.getClassName(checked, story);

            const borderSizeStyle = {
                width: borderSize,
                height: borderSize
            };
            const imgStyle = {
                borderRadius: "100px",
                border: "none",
                cursor: "pointer"
            };
    
            return (
                <div className={className} style={borderSizeStyle}>
                    <Image
                        className={size + (selected ? ` ${selected}` : "")} 
                        alt={id + "님의 프로필 사진"} 
                        src={"/res/avatar/" + image + ".jpeg"} 
                        width={size}
                        height={size}
                        style={imgStyle}
                        onMouseOver={onMouseOver}
                        onMouseLeave={onMouseLeave}
                    />
                </div>
            );
        } catch(e: any) {
            console.log(e.massage);
        }
    }

    getUserById(id: string): User {
        const users = this.users;

        for(let i: number = 0; i < users.length; i++) {
            if(users[i].id === id) return users[i];
        }

        throw new NoExistUserForId("NoExistUserForId");
    }

    getBorderSize(checked: boolean | undefined, initSize: number, story?: boolean): number {
        if(checked === undefined || story === false) return initSize;
        else if(checked) return initSize + 2;
        else return initSize + 4;
    }

    getClassName(checked: boolean | undefined, story?: boolean): string {
        if(checked === undefined || story === false) return "";
        else if(checked) return ` ${styles.largeAvatar} ${styles.checkedBorder}`;
        else return ` ${styles.largeAvatar} ${styles.uncheckedBorder}`;
    }
}

export default Avatar;