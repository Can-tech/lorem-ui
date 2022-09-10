# lorem-ui

> lorem-ui is a basic UI library. You can use this library to get **dummy text(lorem ipsum)** and many other componnets. Create a web site in minutes! An Example website provided below.

[![NPM](https://img.shields.io/npm/v/lorem-ui.svg)](https://www.npmjs.com/package/lorem-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i lorem-ui
```

## Document

## Components

### LoremText
* Use the component to get lorem ipsum text.
* Encapsulation: Yes
```jsx
<LoremText/> //You will get full paragraph of lorem ipsum text.
<LoremText words='5'/> //You will get 5 words of lorem ipsum text.
<LoremText words='220' font='fancy'/> //You will get 220 words of lorem ipsum with having fancy font-family.
<LoremText>Some Text !</LoremText> // You will get full paragraph of dummy lorem ipsum and the output: 'Some Text!' at the end.
```

### LoremContainer
* Use this component to wrap all other components.
* Encapsulation: Yes
```jsx
<LoremContainer></LoremContainer>
```

### LoremDiv
* Use the component to get a div with having rounded border.
* Encapsulation: Yes
```jsx
<LoremDiv>
 <LoremText word='40' font='fancy'/>
</LoremDiv>
```


### LoremHeader
* Use the component to get a fancy header.
* If you use center prop it will show header at the center.
-Encapsulation: Yes
```jsx
<LoremHeader center='true'>Lorem Ipsum</LoremHeader>
```

### LoremColumn
* Use the component to adjust the number of columns in a row of text.
* Encapsulation: Yes
```jsx
<LoremColumn column='1 | 2 | 3 | 4'> // give values 1-4.
  <LoremText word='140' font=''/>
</LoremColumn>
```

### LoremButton
* Use the component to get a button. 
* If 'type' prop is empty, it works as a default button.
* Encapsulation: Yes
```jsx
<LoremButton type='default | primary | primary-bold | primary-long | text | link'></LoremButton>

<LoremButton type='primary-long'>Get More İnformation</LoremButton> // example use case
```

### LoremFooter
* Use the component to create a footer div by encapulating other footer components.
* Encapsulation: Yes

```jsx
<LoremFooter></LoremFooter>
```

### LoremFooterLeft
* Use the components as a child coponnet of the ```<LoremFooter>```
* This component wraps list elements and shows them at the left side. 
* Encapsulation: Yes
```jsx
<LoremFooterLeft></LoremFooterLeft>
```

### LoremFooterRight
* Use the components as a child coponnet of the ```<LoremFooter>```
* This component wraps list elements and shows them at the left side. 
* Encapsulation: Yes
```jsx
<LoremFooterRight></LoremFooterRight>
```


## Example WebSite

![3](https://user-images.githubusercontent.com/61757250/189442751-01dd68e1-85d5-4333-909d-bc4247c61e45.PNG)
![4](https://user-images.githubusercontent.com/61757250/189442757-111c55e7-de76-4472-ba4d-225d2889f70f.PNG)


```jsx
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
          <LoremText words='140' />
          <br />
          <LoremButton type='primary-long'>Get More İnformation</LoremButton>
        </LoremColumn>
        <br /><br />
        <LoremDiv><LoremText words='40' font='fancy' /></LoremDiv>
        <br /><br />
        <LoremText words='120' />
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

```

## License

MIT © [Can-tech](https://github.com/Can-tech)
