// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from '../redux/sliseContacts';
import { filterReducer } from "../redux/sliseFilter"

// Создаем расширение стора чтобы добавить инструменты разработчика
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});