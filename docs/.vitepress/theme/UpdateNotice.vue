<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const latestVersion = ref('')
const dismissedVersion = ref('')
let pollInterval: ReturnType<typeof setInterval> | undefined

const isVisible = () =>
  latestVersion.value !== '' &&
  latestVersion.value !== __WIKI_VERSION__ &&
  latestVersion.value !== dismissedVersion.value

async function checkForUpdate() {
  try {
    const response = await fetch(
      `${import.meta.env.BASE_URL}version.txt?check=${Date.now()}`,
      { cache: 'no-store' }
    )
    if (!response.ok) {
      throw new Error(`Version check failed: ${response.status}`)
    }

    const version = (await response.text()).trim()
    if (version) {
      latestVersion.value = version
    }
  } catch (error) {
    console.warn('위키 새 버전을 확인하지 못했습니다.', error)
  }
}

function reloadLatestVersion() {
  const url = new URL(window.location.href)
  url.searchParams.set('__wiki_version', latestVersion.value)
  window.location.replace(url.toString())
}

onMounted(() => {
  if (__WIKI_VERSION__ === 'development') {
    return
  }

  void checkForUpdate()
  pollInterval = setInterval(() => void checkForUpdate(), 60_000)
})

onUnmounted(() => {
  if (pollInterval) {
    clearInterval(pollInterval)
  }
})
</script>

<template>
  <Transition name="update-notice">
    <aside v-if="isVisible()" class="update-notice" role="status" aria-live="polite">
      <span>위키 새 버전이 배포되었습니다.</span>
      <button class="update-notice__reload" type="button" @click="reloadLatestVersion">
        최신 버전 보기
      </button>
      <button
        class="update-notice__dismiss"
        type="button"
        aria-label="알림 닫기"
        @click="dismissedVersion = latestVersion"
      >
        닫기
      </button>
    </aside>
  </Transition>
</template>
