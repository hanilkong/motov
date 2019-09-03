```bash
├── aseets
│   ├── js
│		│		├── index.js						// main javascript file
│		│		├── serviceWorkder.js		// pwa 적용하려 했으나 아직 안 함
│		├── lib
│		│		├── *.js								// cdn lib 파일 모음
│   └── styles
│				├── fonts
│				│		├── *.woff2					// 폰트 모음
│				├──	src
│				│		└── *.sass					// sass 설정에 필요한 파일들 (_hambuerger.sass는 설정파일 X)
│				├── index.css						// sass에서 converter 된 main css
│				└── *.sass							// 각 layout마다의 sass파일
├── img
│   ├── desktop
│		│		└── *.png, *.jpg				// 데스크탑 버전 이미지 파일들
│   └── mobile
│				└── *.png, *.jpg				// 모바일, 태블릿 버전 이미지 파일들
├── favicon.ico									// motov favicon
├── index.html									// main html file
└── README.md
```

- sass 파일은 각 레이아웃별로 분리해서 만들어져있음
- 웹에서 확인은 아래 쉘 실행 후 웹페이지에서 localhost:5500 접속

```bash
$ npm install -g live-server
$ live-server --port=5500
```