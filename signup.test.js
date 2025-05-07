const { signup } = require("./signup");


describe('signup',()=>{
    it('should successfully sign up with valid credentials', ()=>{
      const result=signup('newuser@example.com', 'newpassword')
      expect (result.success).toBe(true)
      expect (result.message).toBe('signup successful')
    })
    it('should throw an erro if email or password is not provided', ()=>{
        expect (()=>signup('',password)).toThrow('email and password are required')
        expect(()=>signup('email','')).toThrow('email and password are required')
    })
}) expect(()=>login('email','')).toThrow('email and password are required') expect(()=>login('email','')).toThrow('email and password are required')