import * as React from "react";
import { Dimensions } from "react-native";
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
  Right,
  Body
} from "native-base";
import PhotoView from "react-native-photo-view";
import Carousel from "react-native-looped-carousel";
import admob from "../../../globals/admob";
const { width, height } = Dimensions.get("window");
import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
  title: any;
}
export interface State {}
export default class AktuelItemsPage extends React.Component<Props, State> {
  render() {
    let images = [];
    this.props.list.map(item => {
      images.push(
        <PhotoView
          key={item.id}
          source={{ uri: item.pageImageUrl }}
          minimumZoomScale={1}
          maximumZoomScale={3}
          scale={1}
          androidScaleType="center"
          style={{ width: width, height: height - 50 }}
        />
      );
    });
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

        <Content scrollEnabled={false}>
          <Carousel
            style={{ flex: 1, width: width, height: height }}
            autoplay={false}
            pageInfo
          >
            {images}
          </Carousel>
        </Content>
        {admob.getBanner()}
      </Container>
    );
  }
}
