import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// Начальное значение состояния Redux для корневого редюсера,

const initialState = {
  tasks: [{ id: 0, name: 'test', number: '23145563' }],
  filters: '',
};

// Пока что используем редюсер который
// только возвращает полученное состояние

export const rootReducer = (state = initialState, action) => {
  // Редюсер различает экшены по значению свойства type
  switch (action.type) {
    // В зависимости от типа экшена будет выполняться разная логика
    case 'tasks/addTask': {
      // Нужно вернуть новый объект состояния
      return {
        // в котором есть все данные существующего состояния
        ...state,
        // и новый массив задач
        tasks: [
          // в котором есть все существующие задачи
          ...state.tasks,
          // и объект новой задачи
          action.payload,
        ],
      };
    }
    default:
      // Каждый редюсер получает все экшены отправленные в стор.
      // Если редюсер не должен обрабатывать какой-то тип экшена,
      // необходимо вернуть существующее состояние без изменений.
      return state;
  }
};

