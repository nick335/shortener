import { useSelector } from "react-redux";
import Menu from "../Menu"
import SearchMenuItem from "./SearchMenuItem"


export default function SearchMenu({ searchField }) {
  const admins = useSelector(state => state.admins)
  const urlsCreated = useSelector(state => state.urls.urlsCreated)

  const allUsersAndLinks = [...admins]
    .map(link => {
      return {variant: 'user', name: link.name}
    })
    .concat(
      [...urlsCreated].map(user => {
        return {variant: 'link', name: user.name}
      })
    )

  
  return (
    <Menu className="search-menu gap-6">
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
    </Menu>
  )
}
