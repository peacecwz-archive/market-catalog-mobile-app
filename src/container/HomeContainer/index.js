// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import Loading from "../../globals/components/Loading";
import { fetchList, search } from "./actions";
export interface Props {
  navigation: any;
  fetchList: Function;
  search: Function; 
  list: Object;
  latest: Object;
  isLoading: any;
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    if (this.props.isLoading) {
      return <Loading />;
    }
    return (
      <Home
        navigation={this.props.navigation}
        latest={this.props.latest}
        list={this.props.list}
		search={this.props.search}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchList: () => dispatch(fetchList()),
    search: query => dispatch(search(query))
  };
}

const mapStateToProps = state => ({
  list: state.homeReducer.list,
  latest: state.homeReducer.latest,
  isLoading: state.homeReducer.isLoading
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
