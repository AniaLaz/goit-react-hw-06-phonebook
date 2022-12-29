// Импортируем хук
import { useDispatch } from 'react-redux';
// Импортируем генератор экшена
import { addTask } from '../../redux/actions';
import css from 'components/Form/Form.module.css';

const Form = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target;
    const number = event.target;
    const contact = {
      name:name.elements.name.value,
      number:number.elements.number.value,
    };
    console.log(name.elements.name.value);
    console.log(number.elements.number.value);
    console.log(contact);

    // Вызываем генератор экшена и передаем текст задачи для поля payload
    // Отправляем результат - экшен создания задачи
    dispatch(addTask(contact));
    event.target.reset();


    // onSubmit(name.value, number.value);
    // name.value = '';
    // number.value = '';
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.labelName}>
        <span className={css.spanName}>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.labelNamber}>
        <span className={css.spanNamber}>Namber</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.buttonAdd}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
