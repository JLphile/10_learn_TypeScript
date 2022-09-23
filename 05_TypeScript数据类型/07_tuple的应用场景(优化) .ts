// 泛型优化
function useState<T>(state: T) {
  let currentState = state;

  let changeState = (newState: T) => {
    currentState = newState;
  };
  const tuple: [T, (nweState: T) => void] = [currentState, changeState];
  return tuple;
}

const [counter, setCounter] = useState(10);
const [title, setTitle] = useState('abc');
const [flag, setFlag] = useState(true);

export {};
