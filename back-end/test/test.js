import axios from "axios"

const pruebaServidorGetRewards = async () => {
    const url = `http://localhost:3000/comercio/6677380b7268ff5253d38198/available-rewards/?clientId=6677361a79ac3cbb1fb92a23`
    try {
        console.log("soy el test del getReward()")
        const {data:body, status} = await axios(url)
        console.log('status code', status)
        console.log('body', body)

    }
    catch(error) {
        console.log('error', error.message)
    }
}


pruebaServidorGetRewards()