import React from 'react';
import { store } from '../redux/store';
const { Grid }: any = require('fancygrid-react');

export default class GridTest extends React.Component {
	private test: any;
	private grid: any;
	private gridData = {};
	constructor(props: any) {
		super(props);
		this.test = React.createRef();
	}
	componentDidMount() {
		this.grid = this.test.current.widget;
	}
	getColumns() {
		return [
			{
				index: 'userid',
				locked: true,
				title: 'userid'
			},
			{
				index: 'username',
				title: 'username'
			},
			{
				index: 'locale',
				title: 'locale'
			}
		];
	}

	getData() {
		const loginInfo: any = store.getState().loginReducer.loginInfo;
		return {
			proxy: {
				beforeRequest: function(o: any) {
					//o.type - hint of request.
					//Possible values: create/read/update/delete

					//o.params - server request params
					//o.headers - server request headers
					o.params.page = parseInt(o.params.page) + 1;

					return o;
				},
				api: {
					create: 'new.php',
					read: 'http://localhost:8080/Boot/api/suser/test',
					update: 'update.php',
					destroy: 'destroy_action.php'
				},
				methods: {
					create: 'POST',
					read: 'POST',
					update: 'POST',
					destroy: 'POST'
				},
				headers: {
					Authorization: 'Bearer '.concat(loginInfo.token)
				},
				writer: {
					type: 'json'
				},
				params: {
					page: -1,
					limit: 5
				}
			}
		};
	}
	getEvents = () => {
		return [
			{
				init: this.onGridInit
			},
			{ changepage: this.onchangepage },
			{
				changepagesize: this.onchangepagesize
			}
		];
	};
	getDefault() {
		return {
			type: 'string',
			width: '100',
			editable: true,
			resizable: true,
			sortable: false
		};
	}
	getPagingConfig() {
		return {
			pageSize: 5,
			pageSizeData: [ 2, 5, 10 ]
		};
	}
	onchangepage = (grid: any, page: any) => {
		this.grid.setParams({
			page: page + 1,
			limit: 5
		});
		this.grid.load();
	};
	onchangepagesize = (grid: any, pagesize: any) => {
		this.grid.setParams({
			page: 0,
			limit: pagesize
		});
		this.grid.load();
	};
	onGridInit = (grid: any) => {
		setTimeout(function() {
			grid.setTitle('New Title');
		}, 1000);
	};
	render() {
		return (
			<div>
				<Grid
					title='Server Paging and Sorting'
					id='myGrid'
					selModel='rows'
					theme='gray'
					height={400}
					width={700}
					data={this.getData()}
					paging={this.getPagingConfig()}
					defaults={this.getDefault()}
					trackOver={true}
					events={this.getEvents()}
					columns={this.getColumns()}
					ref={this.test}
				/>
			</div>
		);
	}
}
