import { Component, ReactNode } from "react"
import { MainNavigationItemName } from "@/components/navigations/MainNavigation"
import Link from "next/link"
import AlarmIcon from "@/components/icons/AlarmIcon"
import CreateIcon from "@/components/icons/CreateIcon"
import ExploreIcon from "@/components/icons/ExploreIcon"
import HomeIcon from "@/components/icons/HomeIcon"
import MessageIcon from "@/components/icons/MessageIcon"
import ReelsIcon from "@/components/icons/ReelsIcon"
import SearchIcon from "@/components/icons/SearchIcon"
import HamburgerMenuIcon from "@/components/icons/HamburgerIcon"
import styles from "@/styles/MainNavigationItem.module.css"
import SmallAvatar from "../profile/SmallAvatar"

interface Props {
    name: MainNavigationItemName,
    text: string,
    path: string,
    selected: boolean,
    onClick: () => void
}

class MainNavigationItem extends Component<Props> {
    render(): ReactNode {
        const { name, text, path, selected, onClick } = this.props;
        const icons: JSX.Element[] = [
            <HomeIcon key="homeIcon" selected={selected}/>,
            <SearchIcon key="searchIcon" selected={selected}/>,
            <ExploreIcon key="exploreIcon" selected={selected}/>,
            <ReelsIcon key="reelsIcon" selected={selected}/>,
            <MessageIcon key="messageIcon" selected={selected}/>,
            <AlarmIcon key="alarmIcon" selected={selected}/>,
            <CreateIcon key="createIcon" selected={selected}/>,
            <SmallAvatar key="profile" id="haechilim" selected={selected}/>,
            <HamburgerMenuIcon key="hamburger" selected={selected}/>
        ];

        const item: JSX.Element = 
        <>
            {icons[name]}
            <div className={styles.text + (selected ? ` ${styles.bold}` : "")}>{text}</div>
        </>;
        

        return (
            <>
                { path !== "" ? 
                    <Link href={`${path}`} className={styles.mainMenuItem} onClick={onClick}>
                        {item}
                    </Link> :
                    <div className={styles.mainMenuItem} onClick={onClick}> 
                        {item}
                    </div>
                } 
            </>
        );
    }
}

export default MainNavigationItem;