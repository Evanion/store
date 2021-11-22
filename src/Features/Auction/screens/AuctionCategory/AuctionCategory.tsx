import * as React from "react";
import { Text } from "react-native";
import { Container } from "native-base";
import {
  useFeature,
  Feature,
} from "../../../../Utils/features";

export const AuctionCategory: React.FC = () => {
  const { active } = useFeature(Feature.AuctionView);
  return (
    <Container>
      <Text>Auction Category</Text>
      <Text>Profile: {active ? "true" : "false"}</Text>
    </Container>
  );
};
