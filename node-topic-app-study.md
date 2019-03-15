# Node.js로 TODO 앱 만들기 스터디

#### Node.js 설치
터미널에 아래의 명령어를 입력한다.
```
sudo apt-get update
sudo apt-get install nodejs
```

#### NPM(Node Package Manager)이란?
나에게 필요한 기능을 다른 사람이 이미 모듈(Node.js와 연동되는 라이브러리)로 만들어 공유한 적이 있다면, 직접 만들 필요 없이 가져와서 쓸 수 있다. 


npm은 Node.js를 위한 `기본 패키지 관리자`이다. 인터넷 상에 공유된 수많은 패키지를 npm을 통해 편리하게 설치하거나 업데이트할 수 있다.

#### NPM의 사용법
- 현재 프로젝트에 설치 (로컬 설치)
```
npm install [모듈명]
```
- 모든 프로젝트에 설치 (전역 설치) : -g라는 옵션을 추가한다.

```
npm install -g [모듈명]
```
- 설치된 패키지의 목록 확인
```
npm ls
```

#### Express란?
Node.js로 웹 어플리케이션을 만들 때, 일반적으로 Express.js라는 프레임워크를 사용한다. Express.js를 사용하면 프로젝트의 구조를 자동으로 잡아주기 때문에 간편하게 웹 서버를 구축할 수 있다.

#### Express 설치하기
```
npm install express -g
express <프로젝트명>
```
명령어를 실행하고 나면 <프로젝트명> 폴더가 생성되고 서버 구동에 필요한 각종 파일이 자동으로 생성됩니다.
이때 기본적으로 생성된 프로젝트의 구조는 다음과 같습니다.

#### 프로젝트 구조
```
/<project name>
  ⌊ /bin
      ⌊ www
  ⌊ /public
      ⌊ /images
      ⌊ /javascripts
      ⌊ /stylesheets
  ⌊ /routes
      ⌊ index.js
      ⌊ users.js
  ⌊ /views
      ⌊ index.jade
  ⌊ app.js
  ⌊ package.json
  ```
- bin/www : 서버 구동을 위한 코드입니다.
- public : 이미지, 자바스크립트, CSS 등 정적인 리소스를 가지고 있습니다.
- views : 템플릿 (페이지)
- routes : 요청을 처리하는 핸들러
- node_modules : Node.js 확장 모듈
- app.js : 메인 웹 서버, 익스프레스 설정 파일
- package.json : 이름, 버전, 사용된 모듈 등 프로젝트의 정보를 가지고 있는 파일입니다.

#### 참고
구름EDU - [TODO 앱을 만들면서 배우는 node.js / express / bootstarap / jquery](http://edu.goorm.io/lecture/332/todo-%EC%95%B1%EC%9D%84-%EC%A7%81%EC%A0%91-%EB%A7%8C%EB%93%A4%EB%A9%B4%EC%84%9C-%EB%B0%B0%EC%9A%B0%EB%8A%94-node-js-express-bootstrap-jquery)