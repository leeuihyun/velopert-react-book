const IterationSample = () => {
  const names = ["눈", "사람", "얼음", "겨울"];
  const arr = names.map((item, idx) => <li key={idx}>{item}</li>);
  return <ul>{arr}</ul>;
};

export default IterationSample;
