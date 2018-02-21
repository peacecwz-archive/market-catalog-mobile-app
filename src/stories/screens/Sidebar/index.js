import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import { Platform, Linking } from "react-native";

const routes = [
  {
    route: "Home",
    caption: "Ana Sayfa"
  },
  {
    caption: "Oy Ver",
    click: () => {
      let url =
        Platform.OS === "ios"
          ? "https://itunes.apple.com/us/app/aktuel-listesi/id1337592773?"
          : "https://play.google.com/store/apps/details?id=com.peacecwz.aktuellistesi";
      Linking.openURL(url);
    }
  },
  {
    caption: "Diğer Uygulamalar",
    click: () => {
      let url =
        Platform.OS === "ios"
          ? ""
          : "https://play.google.com/store/apps/developer?id=Baris+Ceviz";
      Linking.openURL(url);
    }
  }
];

export interface Props {
  navigation: any;
}
export interface State {}

export default class Sidebar extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Content>
          <List
            style={{ marginTop: 40 }}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => {
                    if (data.click === undefined) {
                      this.props.navigation.navigate(data.route);
                    } else {
                      data.click();
                    }
                  }}
                >
                  <Text>{data.caption}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
