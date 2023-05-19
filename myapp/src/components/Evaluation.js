import React from 'react';

export default function Evaluation(props) {
  console.log('Evaluation compo', props.questions, props.ans);
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    let total = 0;
    for (let i = 0; i <= props.ans.length - 1; i++) {
      let { q, a } = props.ans[i];

      // console.log({q,a})
      if (props.questions[q].CorrectAnswer === a) {
        total += 2;
      }
    }
    console.log(total);
    setTotal(total);
  }, []);
  return (
    <div style={{ margin: '20px' }}>
      <p>Evaluation Results</p>
      <p> Total Marks:{props.questions.length * 2}</p>
      <p>Marks Obtained:{total}</p>
    </div>
  );
}
