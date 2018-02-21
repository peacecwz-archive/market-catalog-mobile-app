import * as React from "react";
import {
    TouchableOpacity
} from "react-native";
import {
    List,
    Card,
    CardItem,
    Left,
    Body,
    Text,
    Col,
    Row
} from "native-base";
import { CachedImage } from "react-native-img-cache";

export interface Props {
    dataArray: any;
    onClick: any;
    columnSize: any;
}
export interface State { }

export default class AktuelList extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    renderRow(item, i) {
        return (
            <Row>
                <Col>
                    <TouchableOpacity onPress={() => {
                        this.props.onClick(item);
                    }}>
                        <Card>
                            <CardItem>
                                <Left>
                                    <CachedImage mutable style={{
                                        width: 80,
                                        height: 80
                                    }} source={{ uri: item.imageUrl }} />
                                </Left>
                                <Body style={{
                                    flex: 3,
                                    alignItems: "center",
                                    alignSelf: "center",
                                    justifyContent: "center",
                                    alignContent: "center"
                                }}>
                                    <Text style={{
                                        flex: 1,
                                        alignItems: "center",
                                        alignSelf: "center",
                                        justifyContent: "center",
                                        alignContent: "center"
                                    }}>{item.name}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </Col>
            </Row>
        );
    }

    render() {
        return (
            <List dataArray={this.props.dataArray}
                renderRow={this.renderRow.bind(this)} />
        );
    }
}
