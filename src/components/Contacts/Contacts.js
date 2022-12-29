import { useSelector } from 'react-redux';
import css from 'components/Contacts/Contacts.module.css';
const Contacts = () => {
  // Получаем массив задач из состояния Redux
  const tasks = useSelector(state => state.tasks);
  console.log('tasks', tasks);

  return (
    <ul className={css.list}>
      {tasks.map(item => {
        return (
          <li className={css.item} key={item.id} id={item.id}>
            <div className={css.itemContent}>
              {item.name}: {item.number}
            </div>

            {/* <button
              className={css.buttonDelete}
              onClick={() => onDelete(item.id)}
            >
              Delete
            </button> */}
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
