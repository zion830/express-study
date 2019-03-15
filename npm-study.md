# how-to-npm 스터디

STEP 1
```
how-to-npm verify
```

STEP 2
```
npm init
how-to-npm verify
```

STEP 3
```
npm adduser
npm whoami // 확인
how-to-npm verify
```

STEP 4
```
npm init --scope=zion830
how-to-npm verify

// 추가 과제 : git 프로젝트로 만들기
git init
how-to-npm verify extra credit
```

STEP 5
- 외부 패키지가 저장되는 곳 : `node_modules`
- 모듈 설치 방법 : `npm install <모듈명>`
```
npm install @linclark/pkg
how-to-npm verify
```

STEP 6
```
npm ls
how-to-npm verify OK
```

STEP 7
- package.json 변경
```
{
  "name": "howtonpm",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "@linclark/pkg": "^1.0.2",
    "how-to-npm": "^2.5.1"
  },
  "devDependencies": {},
  "scripts": {
    "test": "node test.js"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```

STEP 8
```
npm install
```
- README.md 생성
- package.json 변경
```
{
  "name": "howtonpm",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "@linclark/pkg": "^1.0.2",
    "how-to-npm": "^2.5.1"
  },
  "devDependencies": {},
  "scripts": {
    "test": "node test.js"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "repository": {
    "url": "https://github.com/zion830"
  }
}
```

STEP 9
```
npm publish
how-to-npm verify

npm view <패키지 이름> // 확인
```

STEP 10
```
npm version
how-to-npm verify
```

STEP 11
- npm 버전 변경
```
npm publish
how-to-npm verify
```

STEP 12
```
npm dist-tag add <패키지 이름>@1.0.1 beta
how-to-npm verify
```

STEP 13
```
// 새로운 태그 생성
npm dist-tag add <패키지 이름>@<버전> <태그 이름>

// 태그 목록 확인
npm dist-tag ls <패키지 이름>

// 태그 삭제
npm dist-tag rm <패키지 이름> latest
```

STEP 14
```
```

STEP 15
```
```

STEP 16
```
```
