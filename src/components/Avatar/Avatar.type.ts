export type AvatarSize = 'small' | 'medium' | 'large';

export interface AvatarProps {
  /**
   * Person's name. In case image is not loaded it will render person's initials.
   */
  readonly name: string;

  /**
   * Person's id to render the Person's photo
   */
  readonly id: number;

  /**
   * DataTestId to support tests
   */
  readonly dataTestId?: string;

  /**
   * Size of avatar
   */
  readonly size?: AvatarSize;
}
