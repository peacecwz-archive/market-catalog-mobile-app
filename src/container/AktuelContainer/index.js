// @flow
import * as React from "react";
import { connect } from "react-redux";
import Aktuel from "../../stories/screens/Aktuel";
import Loading from "../../globals/components/Loading";
import { fetchList } from "./action";
export interface Props {
	navigation: any,
	fetchList: Function,
	list: Object,
	isLoading: boolean,
}
export interface State {
	companyId: any;
	companyName: any;
}
class AktuelContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			companyId: '',//param.companyId,
			companyName: ''//param.companyName
		};
	}

	componentDidMount() {
		const param = this.props.navigation.state.params;
		this.setState({
			companyId: param.companyId,
			companyName: param.companyName
		})
		this.props.fetchList(param.companyId);
	}
     
	render() {
		if (this.props.isLoading) {
			return <Loading />
		}
		return <Aktuel navigation={this.props.navigation} title={this.state.companyName} list={this.props.list} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: (companyId) => dispatch(fetchList(companyId))
	};
}

const mapStateToProps = state => ({
	list: state.aktuelReducer.list,
	isLoading: state.aktuelReducer.isLoading
});

export default connect(mapStateToProps, bindAction)(AktuelContainer);