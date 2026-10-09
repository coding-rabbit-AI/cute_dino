# 설치 모드

아래 목록은 운영자가 알려 준 모드 기준입니다. 서버의 정확한 Minecraft 패치 버전과 모드 파일 버전은 이 위키에 기록되어 있지 않습니다. Modrinth에서 서버와 같은 게임 버전 및 Fabric용 파일을 선택하세요.

**서버 전용**은 서버에만 설치합니다. **양쪽**은 서버와 접속하는 사람의 클라이언트에 모두 설치합니다. 라이브러리는 필요한 모드가 요구하는 경우에만 설치하세요.

## 콘텐츠 모드

| 모드 | 설치 위치 | 설명 |
| --- | --- | --- |
| [Crate Delight](https://modrinth.com/mod/crate-delight) | 양쪽 | 음식과 농작물을 상자·자루 형태로 보관 |
| [My Nether's Delight Refabricated](https://modrinth.com/mod/my-nethers-delight-refabricated) | 양쪽 | Farmer's Delight 계열의 네더 요리 콘텐츠 |
| [Farmer's Delight Refabricated](https://modrinth.com/mod/farmers-delight-refabricated) | 양쪽 | 농사와 요리 콘텐츠 추가 |
| [More Delight](https://modrinth.com/mod/more-delight) | 양쪽 | Farmer's Delight 추가 음식과 재료 |
| [Rustic Delight](https://modrinth.com/mod/rustic-delight) | 양쪽 | Farmer's Delight 확장 요리와 작물 |
| [Traveler's Backpack](https://modrinth.com/mod/travelersbackpack) | 양쪽 | 추가 수납공간과 휴대 기능이 있는 배낭 |
| [Waystones](https://modrinth.com/mod/waystones) | 양쪽 | 웨이스톤 사이를 이동 |

## 서버 성능 · 편의 모드

| 모드 | 설치 위치 | 설명 |
| --- | --- | --- |
| [C2ME](https://modrinth.com/mod/c2me-fabric) | 서버 전용 | 청크 생성과 로딩 최적화 |
| [FerriteCore](https://modrinth.com/mod/ferrite-core) | 서버 설치, 클라이언트는 선택 | 메모리 사용량 절감 |
| [Krypton](https://modrinth.com/mod/krypton) | 서버 설치, 클라이언트는 선택 | 네트워크 처리 최적화 |
| [Lithium](https://modrinth.com/mod/lithium) | 서버 설치, 클라이언트는 선택 | 게임 로직 최적화 |
| [Replanting Crops](https://modrinth.com/mod/replanting-crops) | 서버 전용 | 수확한 작물 자동 재심기 |
| [spark](https://modrinth.com/mod/spark) | 서버 전용 | 서버 성능 진단 |
| [Inventory Sorting](https://modrinth.com/mod/inventory-sorting) | 서버 설치, 클라이언트는 선택 | 인벤토리 정렬. 클라이언트 모드는 버튼과 키 설정용 |

## 클라이언트 편의 모드

| 모드 | 설치 위치 | 설명 |
| --- | --- | --- |
| [AppleSkin](https://modrinth.com/mod/appleskin) | 클라이언트 필수, 서버 권장 | 음식 회복량과 포만감 표시. 서버 설치 시 포만감 정보가 더 정확합니다. |
| [Cloth Config API](https://modrinth.com/mod/cloth-config) | 클라이언트¹ | 일부 모드의 설정 화면 라이브러리 |
| [Roughly Enough Items (REI)](https://modrinth.com/mod/rei) | 클라이언트 필수, 서버 선택 | 아이템과 조합법 검색 |

## 공통 라이브러리

라이브러리는 독립 기능을 추가하는 모드가 아니라 다른 모드의 실행에 필요한 구성 요소입니다. 필요한 모드가 지정한 쪽에 설치하세요.

| 모드 | 설치 위치 | 설명 |
| --- | --- | --- |
| [Architectury API](https://modrinth.com/mod/architectury-api) | 의존 모드에 따라, 보통 양쪽 | 여러 모드가 쓰는 기반 API |
| [Balm](https://modrinth.com/mod/balm) | 의존 모드에 따라, 보통 양쪽 | Waystones 등에서 사용하는 기반 라이브러리 |
| [Collective](https://modrinth.com/mod/collective) | 의존 모드에 따라 | 일부 편의 모드의 공통 라이브러리 |
| [Fabric API](https://modrinth.com/mod/fabric-api) | 서버·클라이언트 | Fabric 모드의 핵심 라이브러리 |
| [Forge Config API Port](https://modrinth.com/mod/forge-config-api-port) | 의존 모드에 따라 | 일부 모드의 설정 호환 라이브러리 |
| [Shogi](https://modrinth.com/mod/shogi) | 버전 확인 필요 | Waystones 등의 규칙 설정 라이브러리 |

¹ Cloth Config는 설정 화면을 제공하는 클라이언트 모드가 요구할 때 설치합니다.

## 설치 전 확인

- 서버 안내 문서에는 Minecraft **1.20.x**로 적혀 있지만 정확한 패치 버전은 없습니다. 클라이언트와 서버 버전을 먼저 맞추세요.
- 모드 링크는 프로젝트 페이지입니다. 파일을 받을 때는 게임 버전과 Fabric 지원 여부를 확인하세요.
- 서버의 실제 모드 폴더와 클라이언트 모드팩 파일은 이 저장소에 포함되어 있지 않습니다. 표의 위치는 일반 설치 기준이므로 서버 운영자의 모드팩 설정을 우선하세요.
- 제공된 Cloth Config, Farmer's Delight, FerriteCore, Rustic Delight 링크는 Fabric 서버용 프로젝트 링크로 바로 연결되지 않아 Fabric용 페이지로 정리했습니다.
- Shogi 페이지는 현재 Minecraft 26.1 이상 중심으로 안내됩니다. 서버가 1.20.x라면 설치 파일이 맞는지, Waystones가 해당 버전에서 요구하는지 운영자가 확인해 주세요.
