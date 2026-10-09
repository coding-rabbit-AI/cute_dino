# 서버 명령어

## Docker 관리

아래 Compose 예시는 서비스 이름이 `mc`인 경우입니다. 다른 이름을 쓰면 `mc`를 실제 서비스 이름으로 바꾸세요.

| 작업 | 명령어 |
| --- | --- |
| Compose 서비스 이름 확인 | `docker compose config --services` |
| 컨테이너 상태 확인 | `docker compose ps` |
| 서버 로그 확인 | `docker compose logs -f --tail=100 mc` |
| 서버 컨테이너 재시작 | `docker compose restart mc` |
| 서버 중지 | `docker compose stop mc` |
| 서버 시작 | `docker compose up -d mc` |

### Docker에서 Minecraft 콘솔 명령 실행

`itzg/minecraft-server` 이미지 기준으로, Compose 서비스 이름이 `mc`이고 기본 RCON 설정을 사용할 때의 예시입니다. 이 저장소에는 서버 Docker 설정이 포함되어 있지 않으므로 실제 이미지와 서비스 이름은 운영 환경에서 확인하세요.

| 작업 | 명령어 |
| --- | --- |
| 온라인 플레이어 확인 | `docker compose exec mc rcon-cli list` |
| 서버에 공지 | `docker compose exec mc rcon-cli say "점검이 곧 시작됩니다"` |
| 월드 저장 | `docker compose exec mc rcon-cli save-all` |
| 안전하게 서버 종료 | `docker compose exec mc rcon-cli stop` |
| 콘솔 대화형 입력 | `docker compose exec mc rcon-cli` |

`rcon-cli` 명령은 `itzg/minecraft-server` 이미지와 기본 RCON 설정 기준입니다. Compose를 쓰지 않고 컨테이너를 직접 실행했다면 `docker compose exec <서비스명> ...` 대신 `docker exec <컨테이너명> ...`을 사용합니다. 자세한 내용은 [itzg Minecraft Server의 Docker 명령 안내](https://docker-minecraft-server.readthedocs.io/en/latest/sending-commands/commands/)와 [Docker Compose 안내](https://docker-minecraft-server.readthedocs.io/en/latest/)를 참고하세요.

## 게임 내 자주 쓰는 명령어

게임 채팅창에 `/`를 포함해 입력합니다. 서버 설정과 권한에 따라 사용할 수 있는 명령어가 다를 수 있습니다.

| 명령어 | 설명 |
| --- | --- |
| `/help` | 사용 가능한 명령어 보기 |
| `/list` | 접속 중인 플레이어 보기 |
| `/msg 닉네임 내용` | 플레이어에게 귓속말 보내기 |
| `/r 내용` | 마지막 귓속말에 답장하기 |
| `/invsort sort` | 인벤토리 정렬 (Inventory Sorting 모드 설치 시) |
| `/spawn` | 스폰 지점으로 이동 (서버에서 제공하는 경우) |
| `/home` | 저장한 집으로 이동 (서버에서 제공하는 경우) |
| `/tpa 닉네임` | 플레이어에게 이동 요청 (서버에서 제공하는 경우) |

`/spawn`, `/home`, `/tpa`는 기본 Minecraft 명령어가 아닙니다. 서버에 해당 기능을 추가하는 모드나 플러그인이 없으면 사용할 수 없습니다. 지원 명령은 `/help`에서 확인하세요.

## 운영자 명령어

권한이 있는 운영자가 게임 내 채팅 또는 Docker 콘솔에서 사용합니다. 콘솔에서는 명령어 앞의 `/`를 빼세요.

| 명령어 | 설명 |
| --- | --- |
| `/whitelist list` | 화이트리스트 확인 |
| `/whitelist add 닉네임` | 화이트리스트에 플레이어 추가 |
| `/whitelist remove 닉네임` | 화이트리스트에서 플레이어 제거 |
| `/op 닉네임` | 운영자 권한 부여 |
| `/deop 닉네임` | 운영자 권한 해제 |
| `/gamemode survival 닉네임` | 생존 모드로 변경 |
| `/tp 닉네임 대상` | 플레이어를 다른 플레이어 위치로 이동 |
| `/kick 닉네임 사유` | 플레이어를 서버에서 내보내기 |
| `/ban 닉네임 사유` | 플레이어 접속 차단 |
| `/pardon 닉네임` | 플레이어 차단 해제 |
| `/time set day` | 시간을 낮으로 변경 |
| `/weather clear` | 날씨를 맑게 변경 |
| `/seed` | 월드 시드 확인 |
