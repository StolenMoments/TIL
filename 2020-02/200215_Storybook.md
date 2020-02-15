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

### 4. 스토리북에서 확인 - yarn storybook
- components 그룹의 basic/hello 를 보면 standart, big 두 가지 화면을 확인할 수 있다.


### 5. knobs 애드온 적용하기
https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78

- 5.3 버전 부터 설정파일은 main.js 하나로 통일됨.
- 컴포넌트의 props 를 바로 스토리북 화면에 반영해서 볼 수 있게 해주는 애드온.
- knobs 설치
```sh
$ yarn add --dev @storybook/addon-knobs
```
- .storybook/main.js 수정
```javascript
module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register', // 추가할 애드온을 적어주면 된다.
  ],
};
```
- Hello.stories.js 에서 사용해보자.
```javascript
import React from 'react';
import Hello from '../components/Hello'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
    title: 'components|basic/Hello', // 스토리북에서 보여질 그룹과 경로를 명시
    component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
    decorators: [withKnobs] // withKnobs 함수를 적용. 데코레이터라 부른다.
};

export const hello = () => {
    // knobs 만들기
    const big = boolean('big', false);
    const name = text('name', '기본값');
    return <Hello name={name} big={big} />;
};
hello.story = {
    name: 'Default 상태' // 스토리북에서 보여지는 이름 (standard, big 같이)
};

export const standard = () => <Hello name="Storybook" />;
export const big = () => <Hello name="Storybook" big />;
```

- 자세한 스펙 : https://www.npmjs.com/package/@storybook/addon-knobs#available-knobs

### 6. Action 애드온 적용하기

- Action 애드온은 컴포넌트를 통해 호출된 특정 함수와 파라미터 정보를 확인할 수 있게 해준다.
- 별도 설치 필요없음.

```javascript
import React from 'react';
import Hello from '../components/Hello'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
    title: 'components|basic/Hello', // 스토리북에서 보여질 그룹과 경로를 명시
    component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
    decorators: [withKnobs] // withKnobs 함수를 적용. 데코레이터라 부른다.
};

export const hello = () => {
    // knobs 만들기
    const big = boolean('big', false);
    const name = text('name', '기본값');
    return <Hello 
    name={name} 
    big={big} 
    onClick1={action('onClick1 액션')}
    onClick2={action('onClick2 액션')}
    />;
};

hello.story = {
    name: 'Default 상태',// 스토리북에서 보여지는 이름 (standard, big 같이)

};

export const standard = () => <Hello name="Storybook" />;
export const big = () => <Hello name="Storybook" big />;
```
