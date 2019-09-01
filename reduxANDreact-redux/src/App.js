import React from "react";
import { Provider } from "react-redux";

import store from "./store/index";

import Counter from "./Counter/Counter";

import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

const App = () => (
    <AppProvider i18n={enTranslations}>
        <Provider store={store}>
            <Counter />
        </Provider>
    </AppProvider>
);

export default App;