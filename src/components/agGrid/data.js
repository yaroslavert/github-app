export const fields = [
	'name',
	'listingType',
	'asin',
	'sku',
	'sellPrice',
	'buyPrice',
	'roi',
	'amzFee',
	'profit',
	'qTity',
	// 'supplier',
	'amazonListingStatus',
	'handlingTime',
	'strategy',
]

export const settings = [
	{ id: 1, label: 'Export Listings', icon: 'download', func: 'export' },
	{ id: 2, label: 'Import Listings', icon: 'upload', func: 'import' },
	{
		id: 3,
		label: 'Add New Suppliers Column',
		icon: 'blockDistributeHorizontally',
		func: 'suppliers',
	},
	{ id: 4, label: 'Choose Pricing Strategy', icon: 'pulse', func: 'strategy' },
	{ id: 5, label: 'Set Default Quantity', icon: 'hash', func: 'quantity' },
	{ id: 6, label: 'Suppliers Settings', icon: 'tuner', func: 'settings' },
]
