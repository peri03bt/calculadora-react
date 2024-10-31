import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row, Column } from './styles';
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => (prev === '0' ? number : `${prev}${number}`));
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber(null);
    setOperation(null);
  }

  const handleOperation = (op) => {
    if (firstNumber === null) {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    } else if (operation) {
      const result = calculate();
      setFirstNumber(result);
      setCurrentNumber('0');
    }
    setOperation(op);
  }

  const calculate = () => {
    let result;
    switch (operation) {
      case '+':
        result = Number(firstNumber) + Number(currentNumber);
        break;
      case '-':
        result = Number(firstNumber) - Number(currentNumber);
        break;
      case '*':
        result = Number(firstNumber) * Number(currentNumber);
        break;
      case '/':
        result = Number(firstNumber) / Number(currentNumber);
        break;
      default:
        return currentNumber;
    }
    return String(result);
  }

  const handleEqual = () => {
    if (operation && firstNumber !== null) {
      const result = calculate();
      setCurrentNumber(result);
      setFirstNumber(null);
      setOperation(null);
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} readOnly />
        <Row>
          <Button label='C' onClick={handleOnClear}>C</Button>
          <Button label='=' onClick={handleEqual}>=</Button>
          <Button label='/' onClick={() => handleOperation('/')}>/</Button>
          <Button label='*' onClick={() => handleOperation('*')}>*</Button>
        </Row>
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')}>7</Button>
          <Button label='8' onClick={() => handleAddNumber('8')}>8</Button>
          <Button label='9' onClick={() => handleAddNumber('9')}>9</Button>
          <Button label='-' onClick={() => handleOperation('-')}>-</Button>
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')}>4</Button>
          <Button label='5' onClick={() => handleAddNumber('5')}>5</Button>
          <Button label='6' onClick={() => handleAddNumber('6')}>6</Button>
          <Button label='+' onClick={() => handleOperation('+')}>+</Button>
        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')}>1</Button>
          <Button label='2' onClick={() => handleAddNumber('2')}>2</Button>
          <Button label='3' onClick={() => handleAddNumber('3')}>3</Button>
          <Button label='0' onClick={() => handleAddNumber('0')}>0</Button>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
