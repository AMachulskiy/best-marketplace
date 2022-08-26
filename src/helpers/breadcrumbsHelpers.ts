import { IMenuCategory } from '@src/interfaces/menuCategories'
import categories from '@src/data/menuCategoriesData'
import IBreadcrumb from '@src/interfaces/breadcrumb'
import ICategoriesParams from '@src/interfaces/params'

interface IOptions {
  categories: IMenuCategory[]
  path: string
  params: string[]
  i: number
}

const breadcrumbsHelpers = {
  getCategoriesBreadcrumbsData: (
    paramsObj: ICategoriesParams
  ): IBreadcrumb[] => {
    const { category, subCategory, innerSubCategory } = paramsObj
    const paramsArr = [category, subCategory, innerSubCategory]
    const breadcrumbsData: IBreadcrumb[] = []
    const options: IOptions = {
      categories,
      params: paramsArr,
      path: '/catalog',
      i: 0,
    }

    const getCategory = (data: IOptions): IMenuCategory => {
      for (let i = 0; i < data.categories.length; i++) {
        if (data.categories[i].link === data.path) {
          const { link, title } = data.categories[i]
          breadcrumbsData.push({ label: title, link })
          return data.categories[i]
        }
      }
      return null
    }

    const buildBreadcrumbs = (data: IOptions) => {
      const { i } = data
      data.path += `/${data.params[i]}`
      const matchCategory = getCategory(data)
      if (data.params[i + 1] && matchCategory.subCategories) {
        data.i += 1
        data.categories = matchCategory.subCategories
        buildBreadcrumbs(data)
      }
    }
    buildBreadcrumbs(options)
    return breadcrumbsData
  },
}

export default breadcrumbsHelpers
