# 서버 접속 방법

Minecraft **26.2**, Fabric 기준입니다. 아래 순서대로 설치한 뒤 접속하세요.

## 1. Fabric Loader 설치

1. [Fabric Installer](https://fabricmc.net/use/installer/)에 접속해 **Download for Windows**를 받고 실행합니다.
2. **Client** 탭에서 Minecraft 버전 **26.2**를 선택하고 **Install**을 누릅니다.

![Fabric Installer에서 Minecraft 26.2를 선택한 화면](/fabric-installer.webp)

## 2. 클라이언트 모드 설치

1. 서버 운영자가 전달한 압축 파일을 풀고 `client_mod.zip`을 찾습니다.
2. `Win + R`을 누르고 아래 경로를 입력해 mods 폴더를 엽니다.

   ```text
   %appdata%\.minecraft\mods
   ```

   `mods` 폴더가 없으면 직접 만듭니다.

   ![실행 창에 mods 폴더 경로를 입력한 화면](/open-mods-folder.webp)

3. `client_mod.zip`을 압축 해제해 안의 다섯 `.jar` 파일을 `mods` 폴더에 넣습니다. ZIP 파일이나 압축 해제된 하위 폴더가 아니라, `.jar` 파일이 `mods` 폴더 바로 안에 있어야 합니다.

   ![mods 폴더 안에 있는 다섯 개의 모드 파일](/extract-client-mod.webp)

## 3. 게임 실행 및 접속

1. Minecraft 런처를 실행하고 플레이 버튼 왼쪽에서 **Fabric Loader 26.2** 프로필을 선택한 뒤 실행합니다.
2. **멀티플레이**에서 **서버 추가** 또는 **직접 연결**을 선택합니다.
3. 서버 주소를 입력해 접속합니다.

   ```text
   fried-holidays.tun.ply.gg
   ```

![서버 주소 입력 화면](/add-server.png)

## 접속 문제 확인

- Minecraft 버전이 **26.2**인지, 실행 프로필이 **Fabric Loader**인지 확인합니다.
- 다섯 `.jar` 파일이 `%appdata%\.minecraft\mods` 폴더 바로 안에 있는지 확인합니다.
- 서버가 온라인인지 [실시간 서버 상태](https://mcstatus.io/)를 확인합니다.
