import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vueaxios-30a34.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance