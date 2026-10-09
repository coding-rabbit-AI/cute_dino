---
layout: home

hero:
  name: 배려와 존중
  text: 소규모 마인크래프트 서버
  tagline: 서버 주소와 모드 목록
  actions:
    - theme: brand
      text: 접속 방법
      link: /#connect
    - theme: alt
      text: 모드 목록
      link: /#mods

features:
  - icon: 🔌
    title: 서버 접속
    details: 주소와 게임 버전을 확인하세요.
    link: /#connect
  - icon: 🧩
    title: 설치 모드
    details: 설치 위치와 Modrinth 링크를 확인하세요.
    link: /#mods
  - icon: ⌨️
    title: 명령어
    details: 모드에서 사용하는 명령어
    link: /#commands
---

<a id="connect"></a>

## 서버 정보

<a href="https://mcstatus.io/" title="mcstatus.io에서 서버 상태 조회">
  <img src="https://api.mcstatus.io/v2/widget/java/fried-holidays.tun.ply.gg?dark=true" alt="Minecraft 서버 온라인 상태와 접속 인원" />
</a>

| 항목 | 정보 |
| --- | --- |
| 서버 주소 | **fried-holidays.tun.ply.gg** (포트를 별도로 안내받았다면 주소 뒤에 `:포트` 추가) |
| 에디션 | Java Edition |
| 게임 버전 | **26.2** |
| 모드 로더 | Fabric |

## 접속 방법

1. 서버와 같은 Minecraft 버전 및 Fabric Loader를 실행합니다.
2. [모드 목록](#mods)을 확인하고 클라이언트 설치가 필요한 모드를 설치합니다.
3. 멀티플레이에서 서버 주소를 입력해 접속합니다.

## 서버 규칙

- 우리 모두 배려와 존중하는 마음을 가집시다.
- 상자 정리를 꾸준히 합시다.
- 서버를 터트리지 맙시다.
- 치트를 남용하지 맙시다.

<a id="mods"></a>

## 모드 목록

Fabric 26.2 모드 목록입니다. 라이브러리는 의존 모드가 요구할 때만 설치하세요. 자세한 설치 안내는 [모드 안내](/guide/mods)를 확인하세요.

| 모드 | 서버 | 클라이언트 | 설명 |
| --- | --- | --- | --- |
| [AppleSkin](https://modrinth.com/mod/appleskin) | 선택 | 필수 | 음식 회복량·포만감 HUD |
| [Architectury API](https://modrinth.com/mod/architectury-api) | 필요 시 | 필요 시 | 모드 기반 API |
| [Balm](https://modrinth.com/mod/balm) | 필요 | 필요 | Waystones 라이브러리 |
| [C2ME](https://modrinth.com/mod/c2me-fabric) | 필수 | — | 청크 최적화 |
| [Cloth Config API](https://modrinth.com/mod/cloth-config) | — | 필요 시 | 모드 설정 화면 |
| [Collective](https://modrinth.com/mod/collective) | 필요 시 | 필요 시 | 편의 모드 라이브러리 |
| [Crate Delight](https://modrinth.com/mod/crate-delight) | 필수 | 필수 | 음식·작물 보관 상자 |
| [My Nether's Delight Refabricated](https://modrinth.com/mod/my-nethers-delight-refabricated) | 필수 | 필수 | 네더 요리 콘텐츠 |
| [Fabric API](https://modrinth.com/mod/fabric-api) | 필수 | 필수 | Fabric 모드 기반 |
| [Farmer's Delight Refabricated](https://modrinth.com/mod/farmers-delight-refabricated) | 필수 | 필수 | 농사·요리 콘텐츠 |
| [FerriteCore](https://modrinth.com/mod/ferrite-core) | 필수 | 선택 | 메모리 최적화 |
| [Forge Config API Port](https://modrinth.com/mod/forge-config-api-port) | 필요 시 | 필요 시 | 설정 호환 라이브러리 |
| [Inventory Sorting](https://modrinth.com/mod/inventory-sorting) | 필수 | 선택 | 인벤토리 정렬 |
| [Krypton](https://modrinth.com/mod/krypton) | 필수 | 선택 | 네트워크 최적화 |
| [Lithium](https://modrinth.com/mod/lithium) | 필수 | 선택 | 게임 로직 최적화 |
| [More Delight](https://modrinth.com/mod/more-delight) | 필수 | 필수 | 추가 요리 |
| [Replanting Crops](https://modrinth.com/mod/replanting-crops) | 필수 | — | 작물 자동 재심기 |
| [Roughly Enough Items (REI)](https://modrinth.com/mod/rei) | 선택 | 필수 | 아이템·조합법 검색 |
| [Rustic Delight](https://modrinth.com/mod/rustic-delight) | 필수 | 필수 | 요리·작물 확장 |
| [Shogi](https://modrinth.com/mod/shogi) | 필요 | 필요 | Waystones 라이브러리 |
| [spark](https://modrinth.com/mod/spark) | 필수 | — | 서버 성능 진단 |
| [Traveler's Backpack](https://modrinth.com/mod/travelersbackpack) | 필수 | 필수 | 배낭 콘텐츠 |
| [Waystones](https://modrinth.com/mod/waystones) | 필수 | 필수 | 웨이스톤 이동 |

<a id="commands"></a>

## 자주 쓰는 명령어

| 명령어 | 설명 |
| --- | --- |
| `/help` | 사용 가능한 명령어 보기 |
| `/list` | 접속 중인 플레이어 보기 |
| `/msg 닉네임 내용` | 플레이어에게 귓속말 보내기 |
| `/invsort sort` | 인벤토리 정렬 (Inventory Sorting 모드 설치 시) |

더 많은 명령어는 [명령어 안내](/commands)에서 확인하세요.
