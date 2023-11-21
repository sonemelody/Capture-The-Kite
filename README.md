# Capture The Kite

## 🧑‍💻 온라인 워게임 사이트 💻

### 1. Description
참가자가 의도적으로 취약한 프로그램이나 웹사이트에 비밀리에 숨겨져 있는 플래그라고 불리는 텍스트 문자열을 찾는 CTF(Capture The Flag)에서 착안한, Kite를 찾고 정답을 제출할 수 있는 온라인 사이트
<br/>  

### 2. Develop Language
React.js (Django, SQL과 협업)
<br/>  

### 3. Web Contents  
**1. MAIN**

- 상단 가장 좌측에 프로젝트 이름 표시
- CHALLENGE, RANK 메뉴 표시
- LOGIN 메뉴 표시

![FireShot Capture 004 - React App - localhost](https://github.com/sonemelody/Capture-The-Kite/assets/49124725/3f247440-ad3b-43eb-8fe2-c48c8c6e5c7e)<br/>   
<br/>  

**2. LOGIN**

- 이메일과 비밀번호로 로그인
- 정확한 이메일 형식을 입력해야만 로그인 버튼 활성화
- 비밀번호 재설정 페이지와 연결 텍스트
- 회원가입 페이지와 연결 텍스트
- 로그인 성공 시 팝업 등장 후 메인 페이지로 자동 이동
- 로그인 성공 시 상단 헤더에 MY PAGE와 LOGOUT 버튼 표시

<p align="center" width="100%">
<img src="https://github.com/sonemelody/Capture-The-Kite/assets/49124725/1c030a2b-b8c6-4f64-b238-b3db0b689864" width="45%">
<img src="https://github.com/sonemelody/Capture-The-Kite/assets/49124725/9be725af-9039-4d1e-a050-a5ceaa5f2999" width="45%"></p><br/>  
<br/>  

**3. JOIN**

- 이메일, 이름, 닉네임, 비밀번호, 비밀번호 확인의 다섯가지 항목
- 이메일, 이름, 닉네임은 중복 불가
- 중복 이메일, 이름, 닉네임으로 회원가입 시도 시 팝업 등장하며 입력 내용 초기화
- 정확한 이메일 형식을 입력해야만 회원가입 버튼 활성화
- 회원가입 성공 시 팝업 등장 후 로그인 페이지로 자동 이동


<p align="center" width="100%">
<img src="https://github.com/sonemelody/Capture-The-Kite/assets/49124725/5a952d2e-8329-4a56-bc98-b232154f50e6" width="45%">
<img src="https://github.com/sonemelody/Capture-The-Kite/assets/49124725/a3c302d4-c1cb-4a85-b0e3-11a4dabe3b09" width="45%"></p><br/>  
<br/>  

**4. LOGOUT**

- 현재 로그인된 계정에서 로그아웃
- 로그아웃 성공 시 상단 헤더에 다시 LOGIN 버튼 표시
<br/>  

**5. Password Reset**

- 비밀번호 재설정 페이지
- 회원가입한 이메일을 입력하면 해당 이메일로 비밀번호 재설정 링크 전송

![스크린샷 2023-11-12 232449](https://github.com/sonemelody/Capture-The-Kite/assets/49124725/be7452da-5478-484d-a37b-33dc02696207)<br/>  <br/>  

- 링크 클릭 시 새로 변경할 비밀번호와 비밀번호 확인 입력하는 페이지 등장
- 비밀번호 변경 이후 새 비밀번호로 로그인 가능

![스크린샷 2023-11-14 014400](https://github.com/sonemelody/Capture-The-Kite/assets/49124725/bdaa31b0-9930-4774-8f18-763a7fc96fa8)<br/>  
<br/>  


**6. CHALLENGE**  

- 문제 표시 페이지
- 기본 값은 전체 문제 표시
- 시스템, 리눅스, 웹, 암호학으로 필터링 가능
- 현재 표시하고 있는 카테고리만 다른 색 글씨
- 각 문제의 번호, 제목, 배점, 분야 어떤 것을 눌러도 해당 문제로 이동 가능


![FireShot Capture 005 - React App - localhost](https://github.com/sonemelody/Capture-The-Kite/assets/49124725/38795e6f-858b-4c19-ad24-0bd2a8bd910b)
![FireShot Capture 006 - React App - localhost](https://github.com/sonemelody/Capture-The-Kite/assets/49124725/3d796c94-1402-4fe0-8950-7aaceea6ff07)<br/>  
<br/>  


**7. Submit**  

- 문제 제출 페이지
- 문제 제목, 배점, 분야, 문제 정보, ssh_path 표시
- 웹 문제의 경우 접속 정보와 접속 정보 불러오기 버튼 표시, 버튼 누르면 할당된 주소 팝업 등장

![FireShot Capture 009 - React App - localhost](https://github.com/sonemelody/Capture-The-Kite/assets/49124725/10e934cf-2346-487e-b5a7-210015ad51df)
![KakaoTalk_20231112_215344089_01](https://github.com/sonemelody/Capture-The-Kite/assets/49124725/c6b268e3-2d66-440f-b0d4-add8b650b7e8)<br/>  <br/>  

- 제출한 답안이 정답인 경우 정답 팝업과 함께 실시간으로 점수 증가
- 오답인 경우 오답 팝업 표시
- 이미 정답을 맞힌 문제 재제출 방지, 점수 미증가

![FireShot Capture 011 - React App - localhost](https://github.com/sonemelody/Capture-The-Kite/assets/49124725/45dbebd9-088f-4dbe-8282-a2c9dddf0c84)
![FireShot Capture 010 - React App - localhost](https://github.com/sonemelody/Capture-The-Kite/assets/49124725/992e33f1-46bc-4a4a-83e0-05876724f80e)
![FireShot Capture 012 - React App - localhost](https://github.com/sonemelody/Capture-The-Kite/assets/49124725/90b20d8d-b839-4ac1-b179-6e859bb4dba0)<br/>  
<br/>  


**8. RANK**  

- 랭킹 페이지
- 사이트 내 모든 유저의 닉네임과 점수를 순위로 표시
- 1~3위는 랭킹 페이지 상단에 따로 표시
- 누군가의 점수가 증가한 경우, 랭킹 실시간 업데이트


![FireShot Capture 014 - React App - localhost](https://github.com/sonemelody/Capture-The-Kite/assets/49124725/61057ca4-34d0-49f4-b160-c5dbaf98f243)<br/>  
<br/>  



**9. MY PAGE**  

- 개인 정보 확인 페이지
- 로그인이 된 상태에서만 접근 가능
- 회원가입 시 등록한 이메일과 닉네임 표시
- 획득한 점수 표시
- 시스템, 웹, 리눅스, 암호학 각 분야별 점수 확인 가능

![스크린샷 2023-11-12 232533](https://github.com/sonemelody/Capture-The-Kite/assets/49124725/2e26df7e-6716-439e-96f8-291b54969bfd)
<br/>  
<br/>  




### 4. Icon Attributuions
<a href="https://www.flaticon.com/free-icons/medal" title="medal icons">Medal icons created by Freepik - Flaticon</a><br/>  
<a href="https://www.flaticon.com/free-icons/kite" title="kite icons">Kite icons created by Freepik - Flaticon</a><br/>  
<a href="https://www.flaticon.com/free-icons/unlock" title="unlock icons">Unlock icons created by surang - Flaticon</a><br/>  
<a href="https://www.flaticon.com/free-icons/victory" title="victory icons">Victory icons created by Freepik - Flaticon</a><br/>  
<br/>  
