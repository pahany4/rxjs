import {useDispatch, useSelector} from "react-redux";
import {set_selected_category} from "../reducers/categories";
import {messageService} from "../services/_services";

const Categories = () => {
  const dispatch = useDispatch();
  const selected_category = useSelector((state) => state.categories.selected_category);

  function sendMessage() {
    messageService.sendMessage('change category');
  }

  const change_category = (e) => {
    dispatch(set_selected_category(Number(e.target.value)));
    sendMessage();
  }
  return (
    <div style={{marginBottom: 30}}>
      <input
        type={"radio"}
        id={"category_benzine"}
        value={0}
        checked={selected_category === 0}
        name={"category"}
        onChange={change_category}
      />
      <label htmlFor={"category_benzine"}>Бензин</label>
      <input
        type={"radio"}
        id={"category_diesel"}
        value={1}
        checked={selected_category === 1}
        name={"category"}
        onChange={change_category}
      />
      <label htmlFor={"category_diesel"}>Дизельное топливо</label>
      <input
        type={"radio"}
        id={"category_NP"}
        value={2}
        checked={selected_category === 2}
        name={"category"}
        onChange={change_category}
      />
      <label htmlFor={"category_NP"}>Тёмные НП и масла</label>
      <input
        type={"radio"}
        id={"category_other"}
        value={3}
        checked={selected_category === 3}
        name={"category"}
        onChange={change_category}
      />
      <label htmlFor={"category_other"}>Другое</label>
    </div>
  )
}

export default Categories