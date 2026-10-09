import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: 'Cute Dino 소규모 서버 위키',
  description: '서버 접속, 설치 모드, 명령어를 안내합니다.',
  base: '/cute_dino/',
  cleanUrls: true,
  lastUpdated: true,

  head: [['link', { rel: 'icon', href: '/cute_dino/favicon.svg' }]],

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: '🦖 Cute Dino',
    nav: [
      { text: '접속', link: '/connect' },
      { text: '모드', link: '/guide/mods' },
      { text: '명령어', link: '/commands' },
      { text: '규칙', link: '/rules' }
    ],
    sidebar: [
      {
        text: '서버 안내',
        items: [
          { text: '서버 접속', link: '/connect' },
          { text: '설치 모드', link: '/guide/mods' },
          { text: '명령어', link: '/commands' },
          { text: '서버 규칙', link: '/rules' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/coding-rabbit-AI/cute_dino' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '검색', buttonAriaLabel: '검색' },
          modal: {
            noResultsText: '결과가 없습니다',
            resetButtonTitle: '지우기',
            footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' }
          }
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/coding-rabbit-AI/cute_dino/edit/main/docs/:path',
      text: '이 페이지 수정 제안하기'
    },
    lastUpdated: { text: '마지막 수정' },
    outline: { label: '이 페이지 목차', level: [2, 3] },
    docFooter: { prev: '이전', next: '다음' },
    darkModeSwitchLabel: '다크 모드',
    sidebarMenuLabel: '메뉴',
    returnToTopLabel: '맨 위로'
  }
})
