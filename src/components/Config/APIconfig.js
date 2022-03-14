import API from './API.js'

let requestOptions = {
	headers: { 'Content-Type': 'application/json' },
}

const setRequestOptions = (action, data) => {
	requestOptions.method = action
	requestOptions.body = JSON.stringify(data)
}

const APIcall = (path, action = '', data = {}) => {
	if (action || data) {
		setRequestOptions(action, data)
	}

	fetch(API + path, requestOptions = {})
		.then(results => results.json())
		.then(data => {
			console.log(data)
			return data
		})
		.catch((err) => console.log(err))
}

const CreateTile = (data) => {
	APIcall('tiles', 'POST', data)
}

const SearchTile = () => {
	APIcall('tiles')
}

const UpdateTile = (id, data) => {
	APIcall(`tiles/${id}`, 'PUT', data)
}

const DeleteTile = (id) => {
	APIcall(`tiles/${id}`, 'DELETE')
}

export { CreateTile, SearchTile, UpdateTile, DeleteTile }