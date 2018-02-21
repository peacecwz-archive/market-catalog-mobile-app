import * as React from "react";

import {
  List,
  View,
  Card,
  CardItem,
  Body,
  Left,
  Text,
  Col,
  Row
} from "native-base";
import { CachedImage } from "react-native-img-cache";

import Search from "react-native-search-box";

import { TouchableOpacity } from "react-native";
export interface Props {
  dataArray: any;
  onClick: any;
  columnSize: any;
  search: any;
}
export interface State {}

export default class AktuelItemList extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  renderRow(item, j, i) {
    if (this.props.columnSize == 2) {
      var cols = [];
      if (i % 2 === 0) {
        let nextIndex = parseInt(i) + 1;
        console.log(nextIndex);
        let item2 = this.props.dataArray[nextIndex];
        cols.push(
          <Col key={1}>
            <TouchableOpacity
              onPress={() => {
                this.props.onClick(item);
              }}
            >
              <Card>
                <CardItem>
                  <Left>
                    <CachedImage
                      mutable
                      style={{ width: 60, height: 60 }}
                      source={{ uri: item.imageUrl }}
                    />
                  </Left>
                  <Body
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      alignContent: "center"
                    }}
                  >
                    <Text>{item.name}</Text>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </Col>
        );
        if (item2 !== undefined) {
          cols.push(
            <Col key={2}>
              <TouchableOpacity
                onPress={() => {
                  this.props.onClick(item2);
                }}
              >
                <Card>
                  <CardItem>
                    <Left>
                      <CachedImage
                        mutable
                        style={{ width: 60, height: 60 }}
                        source={{ uri: item2.imageUrl }}
                      />
                    </Left>
                    <Body
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        alignContent: "center"
                      }}
                    >
                      <Text>{item2.name}</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </Col>
          );
        } else {
          cols.push(<Col key={2} />);
        }
      } else {
        if (this.props.dataArray.length === parseInt(i) + 1) {
          cols.push(
            <Col key={1}>
              <TouchableOpacity
                onPress={() => {
                  this.props.onClick(item);
                }}
              >
                <Card>
                  <CardItem>
                    <Left>
                      <CachedImage
                        mutable
                        style={{ width: 60, height: 60 }}
                        source={{ uri: item.imageUrl }}
                      />
                    </Left>
                    <Body
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        alignContent: "center"
                      }}
                    >
                      <Text>{item.name}</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </Col>
          );
          cols.push(<Col key={2} />);
        }
      }
      return <Row key={i}>{cols}</Row>;
    } else {
      return (
        <Row key={i}>
          <Col key={1}>
            <TouchableOpacity
              onPress={() => {
                this.props.onClick(item);
              }}
            >
              <Card>
                <CardItem>
                  <Left>
                    <CachedImage
                      mutable
                      style={{ width: 80, height: 80 }}
                      source={{ uri: item.imageUrl }}
                    />
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Text>{item.name}</Text>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </Col>
        </Row>
      );
    }
  }

  render() {
    return (
      <List
        dataArray={this.props.dataArray}
        renderHeader={() =>
          this.props.columnSize == 1 ? (
            <Search
              onChangeText={async text => this.props.search(text)}
              placeholder={"Ara..."}
            />
          ) : (
            <View />
          )
        }
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}
