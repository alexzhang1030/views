import './_Button.css'

export const Button = () => {
  let wave: HTMLDivElement
  const handleWaveEnd = () => {
    wave.classList.remove('button')
  }
  const handleClick = () => {
    handleWaveEnd()
    wave.classList.add('button')
  }
  return () => (
    <button class="
      px-3 py-1.5 bg-#E0EAFB color-#2080f0 rounded-1 transition-colors relative
      hover:bg-#D5E3FA active:bg-#CADBF9 focus-visible:bg-#D5E3FA focus-visible:outline-none
    " onClick={handleClick}>
      <span>Button With Wave</span>
      <div ref={wave} class="pointer-events-none absolute top-0 left-0 w-full h-full rounded-1" onAnimationEnd={handleWaveEnd}></div>
    </button>
  )
}
