import { Component, ReactNode } from "react";
import MainNevigation from "@/components/navigations/MainNavigation";
import styles from "@/styles/App.module.css";
import Progress from "@/components/Progress";
import FullScreenPopup from "@/components/popup/FullScreenPopup";
import Post, { PostDirection } from "@/components/posts/Post";

interface Props {
    selectedIndex: number,
    children?: JSX.Element
};

class App extends Component<Props> {
    render(): ReactNode {
        const { selectedIndex, children } = this.props;

        return (
            <div className={styles.container}>
                <Progress/>
                <div className={styles.navigationContainer}>
                    <MainNevigation selectedIndex={selectedIndex}/>
                    <div className={styles.workspaceContainer}>
                        {children}
                    </div>
                </div>
                <FullScreenPopup>
                    <Post direction={PostDirection.ROW}/>
                </FullScreenPopup>
            </div>
        );
    }
}

export default App;