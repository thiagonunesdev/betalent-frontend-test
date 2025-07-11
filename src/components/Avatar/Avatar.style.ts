import styled, { css } from 'styled-components';

import type { AvatarSize } from './Avatar.type';
import { Theme } from '@theme/Theme';

const { colors } = Theme;

export const getAvatarSize = {
  small: () => css`
    height: 2.4rem;
    min-height: 2.4rem;
    min-width: 2.4rem;
    width: 2.4rem;
  `,
  medium: () => css`
    height: 3.4rem;
    min-height: 3.2rem;
    min-width: 3.4rem;
    width: 3.4rem;
  `,
  large: () => css`
    height: 5.6rem;
    min-height: 5.6rem;
    min-width: 5.6rem;
    width: 5.6rem;
  `
};

export const SkeletonLoader = styled.div`
  animation: shimmer 1.2s infinite;
  background: linear-gradient(
    90deg,
    ${colors.gray20} 25%,
    ${colors.gray10} 50%,
    ${colors.gray20} 75%
  );
  background-size: 200% 100%;
  height: 100%;
  width: 100%;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const Container = styled.div<{ avatarSize?: AvatarSize }>`
  align-items: center;
  background-color: ${colors.gray10};
  border-radius: 50%;
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
  min-height: 2.4rem;
  min-width: 2.4rem;
  overflow: hidden;

  ${(props) => getAvatarSize[props?.avatarSize || 'small']}
`;

const AvatarImg = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const UserInitials = styled.span`
  color: ${colors.black};
  text-transform: uppercase;
`;

export { Container, AvatarImg, UserInitials };
