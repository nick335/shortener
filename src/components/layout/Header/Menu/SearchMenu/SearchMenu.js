import { useSelector } from "react-redux";
import Menu from "../Menu"
import SearchMenuItem from "./SearchMenuItem"


export default function SearchMenu({ searchField }) {
  const admins = useSelector(state => state.admins)
  const new_urls = useSelector(state => state.user.data.links)
      
  const allAdminsAndLinks = [...new_urls]
  .map(link => {
    return {variant: 'link', ...link}
  })
  .concat(
    [...admins].map(admin => {
      return {variant: 'user', ...admin}
    })
    )

    
  return (
    <Menu className="search-menu gap-6">
      {
        allAdminsAndLinks
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
