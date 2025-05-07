const signup=(email,password)=>{
    if(!email || !password){
        throw new Error ('email and password are required')
    }
    return {success:true, message:'signup successful'}
};
module.exports={signup}