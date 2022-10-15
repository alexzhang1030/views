export type Framework = 'react' | 'vue' | 'svelte' | 'solid'

export interface Data {
  name: string
  // framework shorthand
  fw: Framework[]
}

export const data: Data[] = [
  {
    name: 'Button',
    fw: ['solid'],
  },
]
