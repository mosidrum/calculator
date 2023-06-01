const NumButtons = ({calculate}) => {
  const digits = [];

  for (let i = 1; i < 10; i++) {
    digits.push(
      <button onClick={() => calculate(i.toString())} key={i}> {i} </button>
    );
  }
  return <>{digits}</>
}

export default NumButtons