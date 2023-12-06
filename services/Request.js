import nexusAPI from "./api"

const createClient = (data) => nexusAPI.post(`auth/users`, data,{
    headers: {
        "Content-Type": "multipart/form-data",
      },
})

const getToken =()=> nexusAPI.post(`auth/users`, data)

const getInfoClient = async (token) => {
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

const myAccount = async (token, id)=>{
    try{
        const response = await nexusAPI.get(`api/v1/account/${id}`,
        {
            
        });
    }
}