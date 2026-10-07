import { useState } from 'react';
import { Container, Content, Row } from './styles';
import Input from './Components/Input';
import Button from './Components/Button';
import { FiDelete } from "react-icons/fi";
import {
  TbPercentage, TbLetterC, TbNumber0, TbNumber1, TbNumber2, TbNumber3,
  TbNumber4, TbNumber5, TbNumber6, TbNumber7, TbNumber8, TbNumber9,
} from "react-icons/tb";
import { FaDivide, FaXmark, FaMinus, FaPlus, FaPlusMinus, FaEquals } from "react-icons/fa6";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumber, setNewNumber] = useState(false);

  const calculate = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b === 0 ? null : a / b;
      default: return b;
    }
  };

  const compute = () => {
    const result = calculate(firstNumber, parseFloat(currentNumber), operation);
    return result === null ? 'Erro' : String(parseFloat(result.toFixed(10)));
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev =>
      prev === '0' || prev === 'Erro' || newNumber ? num : prev + num
    );
    setNewNumber(false);
  };

  const handleDecimal = () => {
    if (newNumber || currentNumber === 'Erro') {
      setCurrentNumber('0.');
      setNewNumber(false);
    } else if (!currentNumber.includes('.')) {
      setCurrentNumber(currentNumber + '.');
    }
  };

  const handleOperation = (op) => {
    if (currentNumber === 'Erro') return;

    if (firstNumber !== null && operation && !newNumber) {
      const result = compute();
      setCurrentNumber(result);
      if (result === 'Erro') {
        setFirstNumber(null);
        setOperation(null);
        setNewNumber(true);
        return;
      }
      setFirstNumber(parseFloat(result));
    } else {
      setFirstNumber(parseFloat(currentNumber));
    }
    setOperation(op);
    setNewNumber(true);
  };

  const handleEquals = () => {
    if (firstNumber === null || !operation) return;
    setCurrentNumber(compute());
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(false);
  };

  const handleBackspace = () => {
    if (currentNumber === 'Erro' || newNumber) return;
    setCurrentNumber(prev =>
      prev.length === 1 || (prev.length === 2 && prev.startsWith('-'))
        ? '0'
        : prev.slice(0, -1)
    );
  };

  const handleToggleSign = () => {
    if (currentNumber === '0' || currentNumber === 'Erro') return;
    setCurrentNumber(prev => prev.startsWith('-') ? prev.slice(1) : '-' + prev);
  };

  const handlePercent = () => {
    if (currentNumber === 'Erro') return;
    setCurrentNumber(String(parseFloat((parseFloat(currentNumber) / 100).toFixed(10))));
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber.replace('.', ',')} />
        <Row>
          <Button label={<TbPercentage size={24} />} onClick={handlePercent} />
          <Button label={<TbLetterC size={24} />} onClick={handleClear} />
          <Button label={<FiDelete size={24} />} onClick={handleBackspace} />
          <Button label={<FaDivide size={20} />} onClick={() => handleOperation('/')} />
        </Row>
        <Row>
          <Button label={<TbNumber7 size={24} />} onClick={() => handleAddNumber('7')} />
          <Button label={<TbNumber8 size={24} />} onClick={() => handleAddNumber('8')} />
          <Button label={<TbNumber9 size={24} />} onClick={() => handleAddNumber('9')} />
          <Button label={<FaXmark size={22} />} onClick={() => handleOperation('*')} />
        </Row>
        <Row>
          <Button label={<TbNumber4 size={24} />} onClick={() => handleAddNumber('4')} />
          <Button label={<TbNumber5 size={24} />} onClick={() => handleAddNumber('5')} />
          <Button label={<TbNumber6 size={24} />} onClick={() => handleAddNumber('6')} />
          <Button label={<FaMinus size={20} />} onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label={<TbNumber1 size={24} />} onClick={() => handleAddNumber('1')} />
          <Button label={<TbNumber2 size={24} />} onClick={() => handleAddNumber('2')} />
          <Button label={<TbNumber3 size={24} />} onClick={() => handleAddNumber('3')} />
          <Button label={<FaPlus size={20} />} onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label={<FaPlusMinus size={20} />} onClick={handleToggleSign} />
          <Button label={<TbNumber0 size={24} />} onClick={() => handleAddNumber('0')} />
          <Button label="," onClick={handleDecimal} />
          <Button label={<FaEquals size={20} />} onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;