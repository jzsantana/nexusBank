import nexusAPI from "./api"

const createClient = (data) => nexusAPI.post(`auth/users`, data,{
    headers: {
        "Content-Type": "multipart/form-data",
      },
})

// const getToken =()=> nexusAPI.post(`auth/users`, data)

const getAccount = async (token) => {
    try {
      const response = await nexusAPI.get('api/v1/account/', {
        headers: {
          Authorization: `Token ${token}`
        }
      });
  
      return response;
    } catch (error) {
      throw error;
    }
}

const getMyAccount = async (token, id)=>{
    try{
        const response = await nexusAPI.get(`api/v1/account/${id}`, data, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        return response
       }
    catch(error){
        throw error;
    }
}

const getDebitCard = async (token, id) => {
    try{
        const response = await nexusAPI.get(`api/v1/debit/${id}`, data, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        return response
       }
    catch(error){
        throw error;
    }
}

const getCreditCard = async (token, id) =>{
    try{
        const response = await nexusAPI.get(`api/v1/credit/${id}`, data, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        return response
    }catch(error){
        throw error
    }
}

