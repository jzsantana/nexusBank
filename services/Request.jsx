import nexusAPI from "./api"

const createClient = (data) => nexusAPI.post(`auth/users`, data,{
    headers: {
        "Content-Type": "multipart/form-data",
      },
})

const loginToken = () => nexusAPI.post(`auth/users/`, data)

async function getAccount(token){
    try {
      const response = await nexusAPI.get('api/v1/account/', 
        {
            cpf: cpf,
            password: password
        },
        {
            headers: {
                Authorization: `Token ${token}`
              }
        }
      );
  
    } catch (error) {
      throw error;
    }
}

const getMyAccount = async (token, id)=>{
    try{
        const response = await nexusAPI.get(`api/v1/account/${id}/`,{
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
        const response = await nexusAPI.get(`api/v1/debit/${id}/`, {
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
        const response = await nexusAPI.get(`api/v1/credit/${id}/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        return response
    }catch(error){
        throw error
    }
}

const getTransaction = async (token, data) => {
    try{
        const response = await nexusAPI.post(`api/v1/transaction/`, data,{
            headers:{
                Authorization: `Token ${token}`
            }
        })
        return response
    }catch(error){
        throw error
    }
}


export const serviceClient = {
    createClient, loginToken,getAccount, getDebitCard, getCreditCard, getTransaction
}

