import Axios from 'axios'

const defaultMutationHeaders = {
	'Content-Type': 'application/json',
}

function createAxiosAdapter() {
	const axios = Axios.create({
		baseURL: 'https://api.github.com',
	})

	axios.interceptors.response.use(
		response => response.data,
		err => {
			// if (!err || !err.response) return err
			return Promise.reject(err.response)
		}
	)

	return {
		get(url, params, config) {
			return axios.get(url, { params, ...config })
		},
		post(url, body, headers = defaultMutationHeaders, config) {
			return axios.post(url, body, { headers, ...config })
		},
		put(url, body, headers = defaultMutationHeaders, config) {
			return axios.put(url, body, { headers, ...config })
		},
		patch(url, body, headers = defaultMutationHeaders, config) {
			return axios.patch(url, body, { headers, ...config })
		},
		delete(url, body, headers = defaultMutationHeaders, config) {
			return axios.delete(url, { data: body }, { headers, ...config })
		},
	}
}
export default createAxiosAdapter()
