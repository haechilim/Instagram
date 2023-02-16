import { Component, ReactNode } from "react";
import { PageName } from "./AppNavigation";
import MainMenuItem from "./MainNavigationButton";

class HamburgerMenu extends Component {
    render(): ReactNode {
        const { selected, onClick } = this.props;

        return (
            <div className="hamburgerMenuContainer">
                <MainMenuItem
                    key="hamburger"
                    name={PageName.HAMBURGER}
                    text="더 보기"
                    path=""
                    selected={selected}
                    onClick={onClick}
                />
            </div>
        );
    }
}

export default HamburgerMenu;