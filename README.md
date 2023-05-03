# React Modal

간단한 모달을 구현할 수 있는 리액트 라이브러리입니다.

## 설치 방법

```sh
$ npm install @ashleysyheo/react-modal
$ yarn add @ashleysyheo/react-modal
```

## API Documentation

`ModalProvider`: 모달 컨텍스트를 제공하는 컴포넌트

`Modal`: 모달 창을 보여주기 위한 모달 컴포넌트

`useModalContext`: 모달 컨텍스트를 가져오는 커스텀 훅

- `isModalOpen`: 모달의 열림 상태를 알려주는 `boolean` 값

- `isModalClosed`: 모달의 닫힘(한번 열린 후 닫힌) 상태를 알려주는 `boolean` 값

- `openModal`: 모달을 여는 함수

- `closeModal`: 모달을 닫는 함수

## 사용 방법

### Setup

라이브러리를 사용하기 위해서 다음과 같이 `ModalProvider`로 앱을 감싸주세요:

```tsx
import { ModalProvider } from '@ashleysyheo/react-test-modal';

const App = () => {
  return (
    <ModalProvider>
      <div className="App">{/* ... Rest of your app */}</div>
    </ModalProvider>
  );
};
```

### Modal 사용 방법

```js
import { Modal } from '@ashleysyheo/react-test-modal';

<Modal>{/* ReactNode 형태의 children을 전달 */}</Modal>;
```

## Props

#### children

- 모달 내부에 들어갈 내용입니다.
- React Node 형태로 전달합니다.

## Modal 사용 예시

```tsx
import { useEffect, useState } from 'react';
import { Modal, useModalContext } from '@ashleysyheo/react-test-modal';

const MyComponent = () => {
  const { isModalOpen, isModalClosed, openModal, closeModal } = useModalContext();
  const [value, setValue] = useState('클릭해서 모달을 열어 보세요!');

  useEffect(() => {
    if (isModalClosed) setValue('모달이 좀 전에 닫혔어요');

    if (isModalOpen) setValue('모달이 열려있어요');
  }, [isModalOpen, isModalClosed]);

  return (
    <div className="App">
      <h3>{value}</h3>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <Modal>
          <h3>용비어천가</h3>
          <div>
            해동의 여섯 용이 날으사, 일마다 천복이시니,
            옛 성인들과 부절을 합친 듯 꼭 맞으시니.
            뿌리 깊은 나무는 바람에 아니 흔들리므로, 꽃 좋고 열매 많으니
            샘이 깊은 물은 가뭄에 아니 그치므로, 내가 되어 바다에 가나니.
          </div>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
}
</MyModal>
```
