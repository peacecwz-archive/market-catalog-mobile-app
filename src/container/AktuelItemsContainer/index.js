// @flow
import * as React from "react";
import AktuelItems from "../../stories/screens/AktuelItems";
import Loading from "../../globals/components/Loading";
import { fetchList } from "./action";
import { connect } from "react-redux";

export interface Props {
	navigation: any;
	fetchList: Function;
	list: Object;
	isLoading: boolean;
}
export interface State {
	aktuelId: any;
	aktuelName: any;
}

class AktuelItemsContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const param = this.props.navigation.state.params;
		this.props.fetchList(param.aktuelId);
	}

	render() {
		const param = this.props.navigation.state.params;
		if (this.props.isLoading) {
			return <Loading />;
		}
		return <AktuelItems navigation={this.props.navigation} list={this.props.list} title={param.aktuelName} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: (aktuelId) => dispatch(fetchList(aktuelId))
	};
}

const mapStateToProps = state => ({
	list: state.aktuelItemsReducer.list,
	isLoading: state.aktuelItemsReducer.isLoading
});

export default connect(mapStateToProps, bindAction)(AktuelItemsContainer);