import categories from '@src/data/menuCategoriesData'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { IMenuCategory } from '@src/interfaces/menuCategories'
import { ReactFC } from '@src/interfaces/react'
import menuSlice from '@src/store/menu/menuSlice'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './menu.scss'

interface IHandleData {
  category: IMenuCategory
  isMain?: boolean
  isSubLevel?: boolean
}

const Menu: ReactFC = () => {
  const [category, setCategory] = useState<IMenuCategory>(null)
  const [subCategory, setSubCategory] = useState<IMenuCategory>(null)
  const { isOpen } = useAppSelector((state) => state.menu)
  const dispatch = useAppDispatch()
  const { setIsOpen } = menuSlice.actions

  const closeMenu = () => {
    dispatch(setIsOpen(false))
  }

  const handleCategory = (data: IHandleData) => {
    if (data.isMain) {
      setCategory(data.category)
      setSubCategory(null)
    }
    if (data.isSubLevel) {
      setSubCategory(data.category)
    }
  }

  const renderMenuCategories = (
    childrenCategories: IMenuCategory[],
    parentCategory?: IMenuCategory
  ) => {
    const menuItemClass = parentCategory
      ? 'menu__dropcategory'
      : 'menu__category'
    const categoriesList = childrenCategories?.map((item) => {
      const { id, link, title, icon, subCategories } = item
      const text = <span className='menu-item-title'>{title}</span>
      if (parentCategory && subCategories) {
        return (
          <span
            key={title}
            onClick={() => handleCategory({ category: item, isSubLevel: true })}
            className={menuItemClass}
          >
            {text}
            <strong>{'>'}</strong>
          </span>
        )
      }
      return (
        <Link
          onMouseOver={() => handleCategory({ category: item, isMain: !!icon })}
          onClick={closeMenu}
          key={id}
          to={link}
          className={menuItemClass}
        >
          {!parentCategory && <i className={icon} />}
          <div>{text}</div>
        </Link>
      )
    })
    return (
      <>
        {parentCategory && (
          <Link to={parentCategory.link} onClick={closeMenu}>
            <h3 className='menu__title'>{parentCategory.title}</h3>
          </Link>
        )}
        {categoriesList}
      </>
    )
  }

  return (
    <div className={`menu__wrap ${isOpen ? 'open' : ''}`}>
      <nav
        className='menu'
        style={{ gridTemplateColumns: `repeat(${!category ? 1 : 3}, 300px)` }}
      >
        <div className='menu__list'>{renderMenuCategories(categories)}</div>
        {category && (
          <>
            <div className='menu__list'>
              {renderMenuCategories(category.subCategories, category)}
            </div>
            <div className='menu__list'>
              {subCategory &&
                renderMenuCategories(subCategory.subCategories, subCategory)}
              {!subCategory && category?.img && (
                <img
                  className='menu__img'
                  src={category.img}
                  alt={category.title}
                />
              )}
            </div>
          </>
        )}
        <i className='ic_close menu__close' onClick={closeMenu} />
      </nav>
    </div>
  )
}

export default Menu
