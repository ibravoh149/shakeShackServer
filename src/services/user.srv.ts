import {injectable} from 'inversify';
import { User } from "../models";
import { UserSignUp } from "../utils/interfaces";

/**
 *
 *
 * @export
 * @class UserService
 */
@injectable()
export class UserService {

    /**
     *
     *
     * @returns
     * @memberof UserService
     */
    public async getUsers(){
        return await User.find({})
    }



    /**
     *
     *
     * @param {UserSignUp} data
     * @returns
     * @memberof UserService
     */
    public async newUser(data:UserSignUp){
        const { email, password, phone, lastName, zipCode, firstName}= data
        let userData:any={
            email, password, phone, lastName, zipCode, firstName
        }
        try {
            let newUser =  await new User(userData).save();
            return newUser;
        } catch (e) {
            throw new Error(e)
        }
        
    }


}