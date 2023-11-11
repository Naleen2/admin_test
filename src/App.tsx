import '@mantine/core/styles.css';

import {MantineProvider} from '@mantine/core';
import MyApp from './components/MyAppShell.tsx';
import {Provider} from "react-redux";
import {store} from './store/store.ts';

export default function App() {

    return (
        <Provider store={store}>
            <MantineProvider defaultColorScheme={"dark"}>
                <MyApp></MyApp>
            </MantineProvider>)
        </Provider>);
}