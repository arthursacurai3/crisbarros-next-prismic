import { ActionsItensContainer, HeaderContainer, MenuContainer, MenuDropList, SearchContainer } from "./style";
import { useEffect, useState } from "react";
import { SignInButton } from "../SignInButton";

type MenuItensFirstLevel = 'shop' | 'explore' | null

const MenuEnabledCategories = [28, 8, 50, 16]

export function Header() {
  const [menuDrop, setMenuDrop] = useState<MenuItensFirstLevel>(null)
  const [menuList, setMenuList] = useState([])

  useEffect(()=> {

    //call api custom menu list

    async function getCategoriesTree(){
      const response = await fetch(`/api/categories`, {
        method: 'GET'
      })
      const data = await response.json()
      console.log(data)
      setMenuList(data)
    }

    getCategoriesTree()
  },[])

  return (
    <HeaderContainer>
      <nav>
        <MenuContainer>
          <img className="logo-img" src="/images/logo.svg" alt="" />
          <div>
            <div className="menu-first-level" onMouseOver={e => {
              e.stopPropagation()
              setMenuDrop('shop')
            }} onMouseLeave={e => {
              setMenuDrop(null)
            }}>
              <h2>Shop</h2>
              <MenuDropList className={menuDrop === 'shop' ? 'showMenu' : 'close'} >
                {
                  menuList && MenuEnabledCategories.map((enableCategory) => {
                    return (
                      menuList.map(itemSecondLevel => {
                        console.log('here')
                        if(itemSecondLevel.id === enableCategory){
                          return(
                            <ul className="menu-second-level">
                              <li key={`${itemSecondLevel.name}-${enableCategory}`} className="item-second-level"><a href={itemSecondLevel.url}>{itemSecondLevel.name}</a></li>
                              {
                                itemSecondLevel.children.map(itemThirdLevel => {
                                  let nameArr = itemThirdLevel.name.toLowerCase().split(" ")
                                  let newNameArr = []
                                  nameArr.forEach(name => {
                                    if(name.length > 2){
                                      name = name.charAt(0).toUpperCase() + name.slice(1)
                                    }
                                    newNameArr.push(name)
                                  })
                                  const nameCapitalize = newNameArr.join(" ")
                                  return (
                                    <li key={`${itemThirdLevel.name}-${enableCategory}`} className="item-third-level"><a href={itemThirdLevel.url}>{nameCapitalize}</a></li>
                                  )
                                })
                              }
                            </ul> 
                          )
                        }
                      })
                    )
                  })
                }
                {
                  MenuEnabledCategories.map(enableCategory => {
                  })
                }
              </ MenuDropList>

            </div>
            <div className="menu-first-level">
              <h2>Explore</h2>
            </div>
          </div>
        </MenuContainer>
        <ActionsItensContainer>
          <SearchContainer>
              <img className="search-icon" src="/images/icon-search.svg" alt="" />
              <div>
              <i id="principal-voice-icone" className="fa fa-microphone principal-voice-icone"></i>
              <span>Busca</span>
            </div>
          </SearchContainer>
          <SignInButton />
          <button className="icon-btn icon-wishlist">
            <img src="/images/icon-wishlist.svg" alt="" />
          </button >
          <button className="icon-btn icon-minicart">
            <img src="/images/icon-bag.svg" alt="" />
          </button>
        </ActionsItensContainer>
      </nav>
    </HeaderContainer>
  )
}