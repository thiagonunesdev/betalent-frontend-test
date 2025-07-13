import ChevronUpIcon from '@assets/icons/chevron-up.svg';

type IconProps = React.SVGProps<SVGSVGElement>;

const IconChevronUp = (props: IconProps): React.ReactElement => {
  return <ChevronUpIcon data-testeid="chevron-up-icon" {...props} />;
};

export default IconChevronUp;
