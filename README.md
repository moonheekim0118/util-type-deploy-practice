### 배포하는 방법

- 배포할 타입을 적는다. 
- 위와 같이 기본 셋팅을 해준다. (package.json 에 type 경로 적고 prepare 명령어 적기)
- npmignores 를 적어서 배포하지 않아도 될 파일들을 명시한다. 


1. npm login

2. npm publish --access=public


- Bad Request 와 같은 에러가 뜨는 이유는 대부분

1. 이메일 인증이 안 된 유저이거나
2. 옳지 않은 형식의 패키지 이름 일 경우 (중복)

