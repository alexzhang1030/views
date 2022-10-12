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
          bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
          onClick={() => window.open('https://astro.build/')}>
      Astro
    </span>
  )
}
