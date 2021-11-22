import * as React from "react";
import { Button, Text } from "react-native";
import { Container } from "native-base";
import {
  useFeatureAdvanced,
  FeatureAction,
  Feature,
} from "../../../../Utils/features";

export const AuctionCategory: React.FC = () => {
  const { state, dispatch } = useFeatureAdvanced();
  const onPress = (feature: Feature) => () =>
    state[feature].active
      ? dispatch({ action: FeatureAction.Deactivate, feature })
      : dispatch({ action: FeatureAction.Activate, feature });
  return (
    <Container>
      <Text>Auction Category</Text>
      <Text>Profile: {state[Feature.Profile]?.active ? "true" : "false"}</Text>
      <Button onPress={onPress(Feature.Profile)} title="Toggle" />
    </Container>
  );
};
