import { TabNavigator, StackNavigator } from "react-navigation";
import { Platform } from "react-native";
import { colors } from "styles";

import Home from "pages/home";

const navigationOptions = {
  headerStyle: {
    height: Platform.OS === "ios" ? 74 : 54,
    paddingTop: Platform.OS === "ios" ? 40 : 20,
    backgroundColor: colors.white,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.secondary
  },
  headerTintColor: colors.regular,
  headerBackTitle: null
};

const createNavigator = () =>
  TabNavigator({
    Main: StackNavigator(
      {
        Home: { screen: Home }
      },
      {
        initialRouteName: "Home",
        navigationOptions
      }
    )
  });

export default createNavigator;
