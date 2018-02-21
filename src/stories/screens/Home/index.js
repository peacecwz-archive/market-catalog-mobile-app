import * as React from "react";
import { Platform } from "react-native";

import {
  Container,
  Header,
  Footer,
  FooterTab,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Tabs,
  Tab
} from "native-base";
import AktuelItemList from "../../../globals/components/AktuelItemList";
import styles from "./styles";
import log from "../../../globals/logger";
import admob from "../../../globals/admob";

export interface Props {
  navigation: any;
  list: any;
  latest: any;
  search: Function;
}
export interface State {}
export default class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header hasTabs={Platform.OS === "android"}>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => {
                  log("Clicked Menu Button", { Page: "Home" });
                  this.props.navigation.navigate("DrawerOpen");
                }}
              />
            </Button>
          </Left>
          <Body>
            <Title>Aktuel Listesi</Title>
          </Body>
          <Right />
        </Header>
        <Tabs
          tabBarPosition={Platform.select({
            ios: "bottom",
            android: "top"
          })}
        >
          <Tab heading="Son Eklenenler">
            <Content>
              <AktuelItemList
                search={this.props.search}
                columnSize={1}
                dataArray={this.props.latest}
                onClick={item => {
                  log("Clicked Aktuel Item", {
                    Page: "Home",
                    AktuelItemName: item.name,
                    AktuelItemId: item.id
                  });
                  this.props.navigation.navigate("AktuelItems", {
                    aktuelId: item.id,
                    aktuelName: item.name
                  });
                }}
              />
            </Content>
          </Tab>
          <Tab heading="Kategoriler">
            <Content>
              <AktuelItemList
                search={this.props.search}
                columnSize={2}
                dataArray={this.props.list}
                onClick={item => {
                  log("Clicked Aktuel", {
                    Page: "Home",
                    AktuelName: item.name,
                    AktuelId: item.id
                  });
                  this.props.navigation.navigate("Aktuel", {
                    companyId: item.id,
                    companyName: item.name
                  });
                }}
              />
            </Content>
          </Tab>
        </Tabs>
        {admob.getBanner()}
      </Container>
    );
  }
}
