import { useEffect } from "react"
import { ADMINS, URLS_CREATED } from "@/constants/tempData"
import SearchMenuItem from "./SearchMenuItem"


export default function SearchMenu({ searchField }) {
  const allUsersAndLinks = [
    ...ADMINS.map(link => {
      return {variant: 'user', name: link.name}
    }),
    ...URLS_CREATED.map(user => {
      return {variant: 'link', name: user.name}
    }),
  ]

  useEffect(() => {
    document.body.style.overflow='hidden'

    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [])
  
  return (
    <div className="search-menu">
      {
        allUsersAndLinks
        .filter(({ name }) => {
          if (searchField) {
            return name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
          }
        })
        .sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
        .map(({...props}, index) => (
          <SearchMenuItem key={index} searchField={searchField} {...props} />
        ))
      }
    </div>
  )
}
