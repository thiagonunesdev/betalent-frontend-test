import ChevronDownIcon from '@assets/icons/chevron-down.svg';

type IconProps = React.SVGProps<SVGSVGElement>;

const IconChevronDown = (props: IconProps): React.ReactElement => {
  return <ChevronDownIcon data-testeid="chevron-down-icon" {...props} />;
};

export default IconChevronDown;
