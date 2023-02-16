import { Component, ReactNode } from "react"
import Progress from "@/components/Progress"
import AppNavigation, { PageName } from "@/components/navigations/AppNavigation"
import Post, { PostDirection } from "@/components/posts/Post"
import Workspace from "@/components/workspace/Workspace"
import FullScreenPopup from "@/components/popup/FullScreenPopup"
import Detail from "@/components/popup/Detail"
import styles from "@/styles/App.module.css"

interface Props {
    page: PageName,
    children: JSX.Element
};

class App extends Component<Props> {
    render(): ReactNode {
        const { page, children } = this.props;

        return (
            <div className={styles.appContainer}>
                <Progress/>
                <div className={styles.mainContainer}>
                    <AppNavigation currentPage={page}/>
                    <Workspace>{children}</Workspace>
                </div>
                <FullScreenPopup>
                    <Post direction={PostDirection.ROW}/>
                </FullScreenPopup>
                <Detail/>
            </div>
        );
    }
}

export default App;