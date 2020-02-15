# Storybook

참고자료 : https://velog.io/@velopert/start-storybook#2


### 1. 설치 및 실행 (npm init or yarn init 된 상태)
- npx -p @storybook/cli sb init --type react
- yarn storybook


### 2. 설정
- .storybook 폴더에 main.js 설정 파일을 볼 수 있음. 경로 수정 가능.


### 3. 컴포넌트, 스토리 파일 추가해보기

Hello.js
```Javascript
import React from 'react'

const Hello = ({big}) => {
    if (big){
        return (
            <h1>HELLO BOOKSTORY</h1>
        )
    }
    return (
        <p>Hello Bookstory</p>
    )
}
export default Hello
```

Hello.stories.js
```javascript
import React from 'react';
import Hello from '../components/Hello'

export default {
  title: 'components|basic/Hello', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello // 어떤 컴포넌트를 문서화 할지 명시
};

export const standard = () => <Hello />; // 기본 화면을 보여줌
export const big = () => <Hello big />; // big 값이 들어갈 경우에 화면을 보여줌
```

### 4. 스토리북에서 확인
- yarn storybook 실행해서 확인.
