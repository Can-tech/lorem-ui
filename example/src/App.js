import React from 'react'
import { ExampleComponent, LoremButton, LoremText, LoremDiv, LoremContainer, LoremColumn, LoremHeader, LoremFooter, LoremFooterLeft, LoremFooterRight } from 'lorem-ui'
import 'lorem-ui/dist/index.css'

const App = () => {
  return (
    <div>
      <LoremContainer>
        <LoremHeader center='true'>Lorem Ipsum</LoremHeader>
        <hr />
        <br /><br />
        <LoremColumn column='4'>
          <LoremText words='140'>fffffffffffffffffffff</LoremText>
          <br />
          <LoremButton type='primary-long'>Get More İnformation</LoremButton>
        </LoremColumn>
        <br /><br />
        <LoremDiv><LoremText words='40' font='fancy' /></LoremDiv>
        <br /><br />
        <LoremText word='120' />
        <br /><br />
        <LoremDiv><LoremText words='40' font='fancy' /></LoremDiv>
        <br /><br />
        <LoremText words='120' />
        <LoremFooter>
          <LoremFooterLeft>
            <li><LoremButton type='text'><h3>Lorem Ipsum</h3></LoremButton></li>
            <li><LoremButton type='text'>dolor sit amet</LoremButton></li>
            <li><LoremButton type='text'>consectetur adipiscing elit</LoremButton></li>
            <li><LoremButton type='text'>sed do eiusmod tempor incididunt</LoremButton></li>
          </LoremFooterLeft>
          <LoremFooterRight>
            <li><LoremButton type='text'><h3>Lorem Ipsum</h3></LoremButton></li>
            <li><LoremButton type='text'>dolor sit amet</LoremButton></li>
            <li><LoremButton type='text'>consectetur adipiscing elit</LoremButton></li>
            <li><LoremButton type='text'>sed do eiusmod tempor incididunt</LoremButton></li>
          </LoremFooterRight>
          <LoremFooterRight>
            <li><LoremButton type='text'><h3>Lorem Ipsum</h3></LoremButton></li>
            <li><LoremButton type='text'>dolor sit amet</LoremButton></li>
            <li><LoremButton type='text'>consectetur adipiscing elit</LoremButton></li>
            <li><LoremButton type='text'>sed do eiusmod tempor incididunt</LoremButton></li>
          </LoremFooterRight>
        </LoremFooter>
      </LoremContainer>

    </div>
  )
}

export default App
