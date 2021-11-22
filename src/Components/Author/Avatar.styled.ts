import styled from "@emotion/native";

const avatar_size = 75;
const maxSize = 10;
const minSize = 5;

interface Props {
  size?: number;
}

export const Avatar = styled.Image<Props>(
  {
    borderWidth: 0.1,
    borderColor: "#000000",
  },
  ({ size }: Props) => ({
    borderRadius: getBorderRadius(size || avatar_size),
    height: size || avatar_size,
    width: size || avatar_size,
  })
);

function getBorderRadius(size: number): number {
  const computedSize = size / 5;

  return computedSize > maxSize
    ? maxSize
    : computedSize < minSize
    ? minSize
    : computedSize;
}
