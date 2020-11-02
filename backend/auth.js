export function login(data) {

    const endpoint = 'http://127.0.0.1:8000/api/auth/jwt/'
    const csrfToken = cookie.load('csrftoken')
    let thisComp = this
    if (csrfToken !== undefined) {
      let lookupOptions = {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
    
          },
          body: JSON.stringify(data),
          credentials: 'include'
      }
    
      fetch(endpoint, lookupOptions)
      .then(function(response){
          return response.json()
      }).then(function(responseData){
          console.log(responseData)
          localStorage.token = responseData.token
          localStorage.expires = responseData.expires // Store the token
          console.log("Token Stored", localStorage.token)
          console.log("Token Expires", responseData.expires)
          refreshToken(localStorage.token)
    
    
    
        }).catch(function(error){
    
          console.log("error", error)
      })
     }
    
    }