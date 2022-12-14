import { useDark } from '@colid/core'

export function ToggleDark() {
  const { setIsDark } = useDark()
  const toggleDark = () => {
    setIsDark(d => !d)
  }
  return (
    <button class="icon-btn mx-2 !outline-none" onclick={() => toggleDark()}>
      <div class="i-carbon-sun dark:i-carbon-moon" />
    </button>
  )
}

export function Github() {
  return (
    <div
      class="i-line-md:github-loop w-30px h-30px cursor-pointer"
      onClick={() => window.open('https://github.com/alexzhang1030/views')}
    >
    </div>
  )
}

export function AstroIcon() {
  return (
      <span
      class="cursor-pointer
          bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent
          dark:from-green-500 dark:to-yellow-500
          "
          onClick={() => window.open('https://astro.build/')}>
      Astro
    </span>
  )
}
