import React, { useState } from 'react';
import Button from '../Button/Button';
import Screen from '../Screen/Screen';

const CalculatorWrapper = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearInput();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      setOutput(result.toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className='calculator-wrapper'>
      <h2 className='title'>Calculator App</h2>
      <Screen value={output || input} />
      <div className='calculator-buttons'>
        <Button value='7' onClick={handleButtonClick} />
        <Button value='8' onClick={handleButtonClick} />
        <Button value='9' onClick={handleButtonClick} />
        <Button value='+' onClick={handleButtonClick} isAccent />
        <Button value='4' onClick={handleButtonClick} />
        <Button value='5' onClick={handleButtonClick} />
        <Button value='6' onClick={handleButtonClick} />
        <Button value='-' onClick={handleButtonClick} isAccent />
        <Button value='1' onClick={handleButtonClick} />
        <Button value='2' onClick={handleButtonClick} />
        <Button value='3' onClick={handleButtonClick} />
        <Button value='*' onClick={handleButtonClick} isAccent />
        <Button value='0' onClick={handleButtonClick} />
        <Button value='.' onClick={handleButtonClick} />
        <Button value='%' onClick={handleButtonClick} isAccent />
        <Button value='/' onClick={handleButtonClick} isAccent />
        <Button value='C' onClick={handleButtonClick} isAccent />
        <Button value='=' onClick={handleButtonClick} isAccent />
      </div>
    </div>
  );
};

export default CalculatorWrapper;
