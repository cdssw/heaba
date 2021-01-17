import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./theme/heaba-theme.json";
import Screens from "./src/components/screens";

function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
