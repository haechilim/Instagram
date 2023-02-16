import { Component, ReactNode } from "react"
import Logo from "@/components/icons/Logo"
import HamburgerMenu from "@/components/navigations/HamburgerMenu"
import MainNavigationItem from "@/components/navigations/MainNavigationItem"
import styles from "@/styles/MainNavigation.module.css"

export enum PageName {
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

interface Props {
    page: PageName
}

interface State {
    page: PageName,
    selectedHamburger: boolean
}

interface MainNavigationItemObject {
    name: PageName,
    text: string,
    path: string,
    selected: boolean,
    onClick: () => void
}

class MainNevigation extends Component<Props, State> {
    state: State = {
        page: this.props.page,
        selectedHamburger: false
    };

    setInitState = (): void => {
        this.setState({
            page: PageName.HOME,
            selectedHamburger: false
        })
    }

    render(): ReactNode {
        const { page: selectedIndex, selectedHamburger } = this.state;
        const { HOME, SEARCH, EXPLORE, REELS, MESSAGE, ALARM, CREATE, PROFILE } = PageName;
        const MainNavigationItems: MainNavigationItemObject[] = [
            {
                name: HOME,
                text: "홈",
                path: "/",
                selected: selectedIndex === HOME,
                onClick: this.setInitState
            },
            {
                name: SEARCH,
                text: "검색",
                path: "",
                selected: selectedIndex === SEARCH,
                onClick: (): void => {
                    this.setState({
                        page: SEARCH,
                        selectedHamburger: false
                    })
                }
            },
            {
                name: EXPLORE,
                text: "탐색 탭",
                path: "/explore",
                selected: selectedIndex === EXPLORE,
                onClick: (): void => {
                    this.setState({
                        page: EXPLORE,
                        selectedHamburger: false
                    })
                }
            },
            {
                name: REELS,
                text: "릴스",
                path: "/reels",
                selected: selectedIndex === REELS,
                onClick: (): void => {
                    this.setState({
                        page: REELS,
                        selectedHamburger: false
                    })
                }
            },
            {
                name: MESSAGE,
                text: "메시지",
                path: "/message",
                selected: selectedIndex === MESSAGE,
                onClick: (): void => {
                    this.setState({
                        page: MESSAGE,
                        selectedHamburger: false
                    })
                }
            },
            {
                name: ALARM,
                text: "알림",
                path: "",
                selected: selectedIndex === ALARM,
                onClick: (): void => {
                    this.setState({
                        page: ALARM,
                        selectedHamburger: false
                    })
                }
            },
            {
                name: CREATE,
                text: "만들기",
                path: "",
                selected: selectedIndex === CREATE,
                onClick: (): void => {
                    this.setState({
                        page: CREATE,
                        selectedHamburger: false
                    })
                }
            },
            {
                name: PROFILE,
                text: "프로필",
                path: "/haechilim",
                selected: selectedIndex === PROFILE,
                onClick: (): void => {
                    this.setState({
                        page: PROFILE,
                        selectedHamburger: false
                    })
                }
            },
        ];

        return (
            <div className={styles.mainMenuContainer}>
                <Logo onClick={this.setInitState}/>
                <div className={styles.menuList}>
                    {MainNavigationItems.map((item: MainNavigationItemObject, index: number) => (
                        <MainNavigationItem
                            key={"MainNavigationItem" + index}
                            name={item.name}
                            text={item.text}
                            path={item.path}
                            selected={item.selected}
                            onClick={item.onClick}
                        />
                    ))}
                </div>
                <HamburgerMenu
                    selected={selectedHamburger}
                    onClick={(): void => this.setState({ selectedHamburger: true })}
                />
            </div>
        );
    }
}

export default MainNevigation;