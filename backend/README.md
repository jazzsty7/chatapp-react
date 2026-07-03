# Chat App React

이 저장소의 JavaScript 파일 역할은 다음과 같습니다.

## 파일별 목적

- `index.js`
  - HTTP 서버를 생성하고 `app.js`의 Express 앱을 연결합니다.
  - `socket.io` 서버를 생성해 실시간 채팅 기능을 위한 기반을 만듭니다.

- `app.js`
  - Express 애플리케이션을 초기화합니다.
  - `cors` 미들웨어를 적용합니다.
  - 환경 변수 `MONGODB_URI`를 사용해 MongoDB에 연결합니다.
  - 생성된 `app` 객체를 다른 파일에서 사용할 수 있도록 내보냅니다.

- `Models/user.js`
  - 사용자 정보를 저장하기 위한 Mongoose 스키마와 모델을 정의합니다.
  - `name`, `token`, `online` 상태를 관리합니다.

- `Models/chat.js`
  - 채팅 메시지를 저장하기 위한 Mongoose 스키마와 모델을 정의합니다.
  - 메시지 내용(`chat`)과 작성자 정보(`user`)를 저장하고, 생성/수정 시간을 자동 기록합니다.

## 전체 구조

- `app.js`가 서버 애플리케이션의 기본 설정을 담당합니다.
- `index.js`가 실제 서버와 실시간 소켓 연결을 담당합니다.
- `Models/user.js`와 `Models/chat.js`가 데이터 구조를 담당합니다.
