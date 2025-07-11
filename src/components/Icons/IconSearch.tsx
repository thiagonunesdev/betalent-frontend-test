import SearchIcon from '@assets/icons/search.svg';

type IconProps = React.SVGProps<SVGSVGElement>;

const IconSearch = (props: IconProps): React.ReactElement => {
  return <SearchIcon data-testeid="search-icon" {...props} />;
};

export default IconSearch;
