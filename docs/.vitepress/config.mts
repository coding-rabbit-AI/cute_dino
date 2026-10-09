import { defineConfig } from 'vitepress'

// GitHub Pages 주소: https://<계정>.github.io/cute_dino/
// 저장소 이름을 바꾸거나 커스텀 도메인을 쓰면 base를 '/'로 수정하세요.
export default defineConfig({
  lang: 'ko-KR',
  title: 'Cute Dino 서버 위키',
  description: '마인크래프트 개인 서버 안내 위키',
  base: '/cute_dino/',
  cleanUrls: true,
  lastUpdated: true,

  head: [['link', { rel: 'icon', href: '/cute_dino/favicon.svg' }]],

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: '🦖 Cute Dino',

    nav: [
      { text: '시작하기', link: '/connect' },
      { text: '가이드', link: '/guide/survival' },
      { text: '규칙', link: '/rules' },
      { text: 'FAQ', link: '/faq' }
    ],

    sidebar: [
      {
        text: '시작하기',
        items: [
          { text: '서버 접속 방법', link: '/connect' },
          { text: '서버 규칙', link: '/rules' }
        ]
      },
      {
        text: '플레이 가이드',
        items: [
          { text: '생존 기본 가이드', link: '/guide/survival' },
          { text: '영역 보호 · 홈 · 텔레포트', link: '/guide/protection' },
          { text: '모드 · 리소스팩', link: '/guide/mods' }
        ]
      },
      {
        text: '참고',
        items: [
          { text: '명령어 모음', link: '/commands' },
          { text: '자주 묻는 질문', link: '/faq' }
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
