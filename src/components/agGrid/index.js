import React, { Component } from 'react'
import { AgGridReact } from '@ag-grid-community/react'
import { AllCommunityModules } from '@ag-grid-community/all-modules'
import {
	GridRenderer,
	PopupEditor,
	CustomFilter,
	Dropdown,
	ModalToggle,
} from './components'
import { ExportListing, ImportListing } from './modals-contain'
import { Preloader } from 'components/preloader'
import Checkbox from 'components/checkboxButton'
import { fields, settings } from './data'
import Icon from 'components/icon'
import { Rotate, Header } from './style'

class AgGrid extends Component {
	state = {
		modules: AllCommunityModules,
		columnDefs: [
			{
				headerName: 'Name',
				field: 'name',
				checkboxSelection: true,
			},
			{
				headerName: 'Listing Type',
				field: 'listingType',
				width: 70,
				filter: false,
			},
			{
				headerName: 'Asin#',
				field: 'asin',
				editable: false,
			},
			{
				headerName: 'SKU#',
				field: 'sku',
				editable: false,
			},
			{
				headerName: 'Sell Price',
				field: 'sellPrice',
			},
			{
				headerName: 'Buy Price',
				field: 'buyPrice',
			},
			{
				headerName: 'ROI%',
				field: 'roi',
			},
			{
				headerName: 'AMZ Fee',
				field: 'amzFee',
			},
			{
				headerName: 'Profit',
				field: 'profit',
			},
			{
				headerName: 'Q-tity',
				field: 'qTity',
			},
			{
				headerName: 'Supplier',
				field: 'supplier',
				cellEditor: 'PopupEditor',
				cellRenderer: 'GridRenderer',
				singleClickEdit: true,
				hide: true,
				cellEditorParams: {
					values: [
						{
							id: 1,
							name: 'Choose product variations',
							icon: 'number',
						},
						{
							id: 2,
							name: 'Set purchase quantity',
							icon: 'items',
						},
						{
							id: 3,
							name: 'Edit',
							icon: 'pencilEdit',
						},
					],
				},
			},
			{
				headerName: 'Extra Supplier',
				field: 'extraSupplier',
				hide: true,
			},
			{
				headerName: 'Bundle Supplier',
				field: 'bundleSupplier',
				hide: true,
			},
			{
				headerName: 'Listing Status',
				field: 'amazonListingStatus',
			},
			{
				headerName: 'Handling Time',
				field: 'handlingTime',
			},
			{
				headerName: 'Strategy',
				field: 'strategy',
				floatingFilterComponent: false,
				filter: false,
			},
			{
				headerName: '⋮',
				field: 'settings',
				filter: false,
				sortable: false,
				resizable: false,
				width: 30,
			},
		],
		defaultColDef: {
			width: 150,
			editable: true,
			resizable: true,
			sortable: true,
			hide: true,
			filter: 'agTextColumnFilter',
			floatingFilterComponent: 'CustomFilter',
			menuTabs: [],
		},
		defaultColGroupDef: { marryChildren: true },
		autoGroupColumnDef: {
			headerName: 'Group',
			field: 'name',
			headerCheckboxSelection: true,
			cellRenderer: 'agGroupCellRenderer',
			cellRendererParams: { checkbox: true },
		},
		rowData: [],
		frameworkComponents: {
			GridRenderer: GridRenderer,
			PopupEditor: PopupEditor,
			CustomFilter: CustomFilter,
		},
		modal: null,
	}

	componentDidMount() {
		if (!JSON.parse(localStorage.getItem('visibleColumn'))) {
			localStorage.setItem('visibleColumn', JSON.stringify(fields))
		}
		const visibleColumn = JSON.parse(localStorage.getItem('visibleColumn'))
		setTimeout(() => {
			this.gridColumnApi.setColumnsVisible(visibleColumn, true)
		}, 0) // without setTimeout function gridColumnApi is undefined
	}

	componentDidUpdate(prevProps) {
		if (prevProps.rowData !== this.props.rowData) {
			this.setState({ rowData: this.props.rowData })
		}
	}

	onCellClickedFunc = e => {
		console.log('e', e)
	}

	toggleAll = e => {
		this.gridApi.forEachNode(function(node) {
			node.setSelected(e.target.checked)
		})
	}

	toggleColumnVisible = () => {
		this.gridColumnApi.setColumnsVisible(['name'], false)
		const visibleColumn = JSON.parse(localStorage.getItem('visibleColumn'))

		visibleColumn.push('name')
		localStorage.setItem('visibleColumn', JSON.stringify(visibleColumn))
	}

	toggleSettingModal = modal => {
		this.setState({
			modal,
		})
	}

	render() {
		const { rowData, modal } = this.state
		return (
			<div
				className='ag-theme-balham'
				style={{
					height: '90vh',
					width: '100%',
				}}
			>
				{rowData.length <= 0 && <Preloader />}
				<Header className='header d-flex justify-content-between align-items-center'>
					<Checkbox onChange={e => this.toggleAll(e)} theme='grid'>
						Mark all
					</Checkbox>
					<div className='d-flex mr-3'>
						<Rotate className='d-flex mr-3'>
							<Icon component='rotateCw' />
							Refresh
						</Rotate>
						<Dropdown
							list={settings}
							labelItem={<Icon component='settings' />}
							toggleSettingModal={this.toggleSettingModal}
						/>
					</div>
				</Header>
				<AgGridReact
					modules={this.state.modules}
					groupSelectsChildren={true}
					autoGroupColumnDef={this.state.autoGroupColumnDef}
					onGridReady={params => {
						this.gridApi = params.api
						this.gridColumnApi = params.columnApi
					}}
					rowSelection='multiple'
					rowMultiSelectWithClick='true'
					pagination={true}
					defaultColDef={this.state.defaultColDef}
					defaultColGroupDef={this.state.defaultColGroupDef}
					columnDefs={this.state.columnDefs}
					floatingFilter={true}
					rowData={this.state.rowData}
					frameworkComponents={this.state.frameworkComponents}
				></AgGridReact>
				{modal === 'export' && (
					<ModalToggle
						mode='small'
						title='Export Listing'
						content={<ExportListing />}
						isOpen
					/>
				)}
				{modal === 'import' && (
					<ModalToggle
						isOpen
						mode='small'
						title='Import Listing'
						content={<ImportListing />}
					/>
				)}
			</div>
		)
	}
}

export default AgGrid
