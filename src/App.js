// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import Aktuel from "./container/AktuelContainer";
import AktuelItems from "./container/AktuelItemsContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		Aktuel: { screen: Aktuel },
		AktuelItems: { screen: AktuelItems },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Home: { screen: Drawer },
		BlankPage: { screen: BlankPage },
		Favorites: { screen: BlankPage },
		AboutUs: { screen: BlankPage },
	},
	{
		initialRouteName: "Home",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
