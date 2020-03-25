import moment from 'moment'

export function formatedDate(date, format = 'YYYY-MM-DD h:mm:ss') {
	return moment(date).format(format)
}
