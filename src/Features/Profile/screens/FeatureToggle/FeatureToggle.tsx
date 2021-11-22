import * as React from "react";
import {
  Container,
  Divider,
  Stack,
  Switch,
  Text,
  ScrollView,
} from "native-base";
import {
  FeatureAction,
  Feature,
  useFeatureAdvanced,
} from "../../../../Utils/features";

export const FeatureToggle: React.FC = () => {
  const { state, dispatch } = useFeatureAdvanced();
  const toggle = (feature: Feature) => () =>
    state[feature].active
      ? dispatch({ action: FeatureAction.Deactivate, feature })
      : dispatch({ action: FeatureAction.Activate, feature });

  const stateArray = Object.entries(state);
  return (
    <Container centerContent={true}>
      <ScrollView>
        <Stack direction="column" space={3} divider={<Divider my={2} />}>
          {stateArray.map(([key, value]) => (
            <Stack key={key} direction="row" justifyContent="space-between">
              <Stack direction="column">
                <Text>
                  {key.charAt(0).toLocaleUpperCase()}
                  {key.slice(1).toLocaleLowerCase()}
                </Text>
                <Text sub={true} color="grey">
                  [{value.dependencies.join(", ")}]
                </Text>
              </Stack>
              <Switch
                onToggle={toggle(key as Feature)}
                isChecked={value.active}
                isDisabled={value.isDependency}
              />
            </Stack>
          ))}
        </Stack>
      </ScrollView>
    </Container>
  );
};
