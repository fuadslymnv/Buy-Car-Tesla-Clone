import React from 'react'
import styled from 'styled-components'
function Form() {
  return (
    <div >
        <Wrapper>

        <ModelName>
           Tesla Model S
        </ModelName>

      
        <form>
            <label for="username" className='labelInput' >
                Username:   <br/>
                <input type="text" name="username" id="username" class="input" />
            </label>

            <label for="password" className='labelInput' >
                Password:  <br/>
                <input type="password" name="password" id="password" class="input" />
            </label>

            <div className='checkbox'>
            <input type="checkbox" name="checkbox" id="accept" />
            <label for="checkbox" className="checkboxLabel" >I Accept Agreements and terms of services</label>
            </div>
        
            <Button> 

              BUY CAR
            </Button>
        </form>
        </Wrapper>
    </div>
  )
}

export default Form;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
height:722px;
width: 500px;

@media (max-width: 768px) {
justify-content: flex-start;
width: 100%;

}
`;

const ModelName = styled.h1`
color: black;
font-size: 40px;

@media (max-width: 768px) {
  margin-top: 20px;
  font-size: 30px;
}
`;

const Button = styled.button`
background-color: #0469FF;
color: white;
width: 100%;
height: 50px;
font-size: 20px;
border-radius: 10.5339px;
border: none;



`;