import { useEmployeeById } from 'hooks/useEmployees';
import { AvatarImg, Container, SkeletonLoader, UserInitials } from './Avatar.style';
import type { AvatarProps } from './Avatar.type';
import { getUserInitials } from './Avatar.helper';

const Avatar = ({
  dataTestId = 'Avatar',
  id,
  name,
  size = 'medium'
}: AvatarProps): React.ReactElement => {
  const { data: user, isLoading } = useEmployeeById(id);

  if (isLoading) {
    return (
      <Container avatarSize={size} data-testid={dataTestId}>
        <SkeletonLoader />
      </Container>
    );
  }

  const children = user?.image ? (
    <AvatarImg alt={name} src={user.image} />
  ) : (
    <UserInitials>{!id ? 'NA' : getUserInitials(name)}</UserInitials>
  );
  return (
    <Container avatarSize={size} data-testid={dataTestId}>
      {children}
    </Container>
  );
};

export default Avatar;
