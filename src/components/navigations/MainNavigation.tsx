import { Component, ReactNode } from "react"
import { PageName } from "@/components/navigations/AppNavigation"
import MainNavigationButton from "@/components/navigations/MainNavigationButton"
import styles from "@/styles/MainNavigation.module.css"

enum AppNavigationButtonName {
    HOME,
    SEARCH,
    EXPLORE,
    REELS,
    MESSAGE,
    ALARM,
    CREATE,
    PROFILE,
    HAMBURGER
}

export interface MainNavigationItem {
    name: AppNavigationButtonName,
    text: string,
    path?: string,
    selected: boolean,
    onClick: () => void
}

interface Props {
    currentPage: PageName
}

interface State {
    currentButton: AppNavigationButtonName | PageName,
}

class MainNavigation extends Component<Props, State> {
    initState: State = { currentButton: this.props.currentPage };
    state: State = this.initState;
    setInitState = (): void => this.setState(this.initState)

    render(): ReactNode {
        const { currentButton } = this.state;
        const { HOME, SEARCH, EXPLORE, REELS, MESSAGE, ALARM, CREATE, PROFILE } = AppNavigationButtonName;
        const mainNavigationItems: MainNavigationItem[] = [
            {
                name: HOME,
                text: "홈",
                path: "/",
                selected: currentButton === HOME,
                onClick: this.setInitState
            },
            {
                name: SEARCH,
                text: "검색",
                selected: currentButton === SEARCH,
                onClick: (): void => this.setState({ currentButton: SEARCH })
            },
            {
                name: EXPLORE,
                text: "탐색 탭",
                path: "/explore",
                selected: currentButton === EXPLORE,
                onClick: (): void => this.setState({ currentButton: EXPLORE })
            },
            {
                name: REELS,
                text: "릴스",
                path: "/reels",
                selected: currentButton === REELS,
                onClick: (): void => this.setState({ currentButton: REELS })
            },
            {
                name: MESSAGE,
                text: "메시지",
                path: "/message",
                selected: currentButton === MESSAGE,
                onClick: (): void => this.setState({ currentButton: MESSAGE })
            },
            {
                name: ALARM,
                text: "알림",
                selected: currentButton === ALARM,
                onClick: (): void => this.setState({ currentButton: ALARM })
            },
            {
                name: CREATE,
                text: "만들기",
                selected: currentButton === CREATE,
                onClick: (): void => this.setState({ currentButton: CREATE })
            },
            {
                name: PROFILE,
                text: "프로필",
                path: "/haechilim",
                selected: currentButton === PROFILE,
                onClick: (): void => this.setState({ currentButton: PROFILE })
            },
        ];

        return (
            <div className={styles.container}>
                {mainNavigationItems.map((item: MainNavigationItem, index: number): JSX.Element => (
                    <MainNavigationButton
                        key={"MainNavigationButton" + index}
                        item={item}
                    />
                ))}
            </div>
        );
    }
}

export default MainNavigation;