import * as React from "react";
import { Avatar } from "./Avatar.styled";

export const Author: React.FC<Props> = ({ avatar }) => {
  return <Avatar size={45} source={{ uri: avatar }} />;
};

interface Props {
  avatar: string;
}
