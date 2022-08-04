import IconsEnum from './icons'

export interface IMenuCategory {
  id: number
  link: string
  title: string
  icon?: IconsEnum
  img?: string
  subCategories?: IMenuCategory[]
}
