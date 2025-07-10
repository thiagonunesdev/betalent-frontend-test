import SearchIcon from '@assets/icons/search.svg'
import type { JSX } from 'react'

type IconProps = React.SVGProps<SVGSVGElement>

const IconSearch = (props: IconProps): JSX.Element => {
  return <SearchIcon data-testeid="search-icon" {...props} />
}

export default IconSearch
