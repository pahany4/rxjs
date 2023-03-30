import {useDispatch, useSelector} from "react-redux";
import {add_selected_analysis, del_selected_analysis, set_selected_analysis} from "../reducers/analysis";
import {useEffect} from "react";
import {messageService} from "../services/_services";

const Analysis = () => {
  const dispatch = useDispatch();
  const selected_analysis = useSelector((state) => state.analysis.selected_analysis);
  const change_analysis = (e, analysis) => {
    if (e.target.checked) {
      dispatch(add_selected_analysis(analysis))
    } else {
      dispatch(del_selected_analysis(analysis.id))
    }
  }
  const analysis = [
    {
      id: 1,
      title: "Кинематическая вязкость при 40°С"
    },
    {
      id: 2,
      title: "Смолы (в бензинах, фактические, промытые)"
    },
    {
      id: 3,
      title: "Давление насыщенных паров"
    },
  ]

  useEffect(() => {
    const subscription = messageService.onMessage().subscribe(message => {
      if (message) {
        dispatch(set_selected_analysis([]))
        console.log(message)
      }
    });
    function unsubscribe () {
      subscription.unsubscribe()
    }
      return unsubscribe;
  }, []);

  return (
    <div style={{display: "flex", gap: 20}}>
      {analysis.map(analysis => (
        <div>
          <input
            type={"checkbox"}
            id={analysis.id}
            checked={selected_analysis.some((item) => item.id === analysis.id)}
            name={"analysis"}
            onChange={(e) => change_analysis(e, analysis)}
          />
          <label htmlFor={analysis.id}>{analysis.title}</label>
        </div>
      ))}
    </div>
  )
}

export default Analysis