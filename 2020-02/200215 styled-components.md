# styled-components

- 설치
  - yarn add styled-components
  - VSCode를 사용하므로 vscode-styled-components 라는 extension 같이 설치함.
  
- 사용법

```javascript
import React from 'react'
import styled from 'styled-components'

const Styled = styled.div` // 컴포넌트 선언
    background-color: aqua;
    text-align: center;
    display: absoulte;
`

const CssPractice = () => {
    return (
        <Styled> // 스타일 적용
            <div>
                styled-components 사용
            </div>
        </Styled>
    )
}

export default CssPractice 

```
