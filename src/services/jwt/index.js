import apiClient from 'services/axios'
import store from 'store'

export async function login(email, password) {
  return apiClient
    .post('/login', {
      email,
      password
    })
    .then(res => {
      if(!res) return false
      const { token } = res.data
      console.log('token', token)
      store.set('accessToken', token.token)
      return token
    })
    .catch(err => {
      console.warn(err.message)
      alert('Ocurrió un error en el proceso de registro')
    })
}

export async function currentAccount() {
  return apiClient
    .get('/api/admin/me')
    .then(response => {
      if (response) {
        const { token } = response.data
        console.log('There was a response')
        if (token) {
          store.set('accessToken', token)
        }
        console.log(' user data', response.data)
        // Inside response.data user object defines all the relevant user info
        return response.data ? response.data : false
      }
      return false
    })
    .catch(err => {
      console.warn('Error: ', err)
      return false
    })
}



export async function logout(){
  const accessToken = store.get('accessToken')
  store.remove('accessToken')
  return apiClient
    .post('/logout',{
      user: accessToken
    })
    .then(res => res)
    .catch(err => {
      console.warn('Error during logout')
    })
}
