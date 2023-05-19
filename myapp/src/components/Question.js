import React from 'react';
import questions from '../data';
export default function Question(props) {
  console.log(props);
  let { Question, index, Options, ans } = props;

  // const [selectedOption, setSelectedOption] = React.useState(-1);

  // React.useEffect(() => {
  //   setSelectedOption(-1);
  // }, [Question]);

  const submitAnswer = (event, ind) => {
    // setSelectedOption(index);
    console.log(event.target.id, ind);
    if (ans.length < index + 1) {
      ans.push({ q: index, a: event.target.id, i: ind });
    } else {
      ans.pop();
      ans.push({ q: index, a: event.target.id, i: ind });
    }
  };

  return (
    <table className="table">
      <tr>Question ({index + 1})</tr>
      <tr>{Question}</tr>
      <tbody>
        {Options.map((opt, indx) => {
          return (
            <tr>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    checked={ans.length > 0 && ans[index]?.i ===indx}
                    name={index + 1}
                    id={opt}
                    onClick={(event) => submitAnswer(event, indx)}
                    value={index}
                  />
                  {opt}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
