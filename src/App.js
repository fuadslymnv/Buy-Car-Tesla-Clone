import styled from 'styled-components';
import './App.css';
import React from 'react';
import Image from './components/Image';
import Form from './components/Form';
function App() {
  return (
    <div >
      <Container>
        <Image />
        <Form/>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
  flex-direction: column;
};

`;
