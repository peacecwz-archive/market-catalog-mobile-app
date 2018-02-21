import * as React from "react";
import {
  Container,
  Header,
  Footer,
  FooterTab,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import AktuelList from "../../../globals/components/AktuelList";
import log from "../../../globals/logger";
import admob from "../../../globals/admob";
import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
  title: any;
}
export interface State {}
export default class AktuelPage extends React.Component<Props, State> {
  render() {
    const param = this.props.navigation.state.params;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>{this.props.title}</Title>
          </Body>

          <Right />
        </Header>

        <Content padder>
          <AktuelList
            columnSize={1}
            dataArray={this.props.list}
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
        {admob.getBanner()}
      </Container>
    );
  }
}
