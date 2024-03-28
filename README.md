# 웹 접근성 비교 실습

aria 유무에 따라 스크린 리더가 어떻게 읽는지 비교해 본 레포지토리입니다.

## aria-expanded
> aria-expanded 없는 버전

![no-library](https://github.com/gs0428/web-accessibility-comparison/assets/114225974/30840ceb-fcf0-4bbb-bc1d-453c3e5f6bd5)

스크린리더: *‘Edit Profile’, ‘버튼’*

> aria-expanded 있는 버전

![radix](https://github.com/gs0428/web-accessibility-comparison/assets/114225974/1635cf6d-cc12-43f8-89e0-65d51b2e80cd)

스크린리더: *‘Edit Profile’, ‘버튼 접힘’*

## aria-labelledby와 aria-describedby
> aria-labelledby, aria-describedby 없는 버전

![no-library-dialog](https://github.com/gs0428/web-accessibility-comparison/assets/114225974/f34c5302-e52e-444a-8b85-cf48f090a727)

스크린리더: *‘Edit Profile’, ‘Make changes to your profile’, ‘Name’, ‘Enter your full name’ …*

> aria-labelledby, aria-describedby 있는 버전

![radix-dialog](https://github.com/gs0428/web-accessibility-comparison/assets/114225974/d0813cb5-7916-4a68-9951-d6bf9d9e9918)

스크린리더: *‘Edit Profile’, ‘대화 상자’, ‘Make changes to your profile’*
