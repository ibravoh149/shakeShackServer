import {
  controller,
  httpGet,
  httpHead,
  httpPost,
  httpPut,
  BaseHttpController,
  HttpResponseMessage,
  StringContent,
  requestBody,
} from "inversify-express-utils";
import { inject } from "inversify";
import Types from "../constant/types";
import { UserService } from "../services/user.srv";
import { UserSignUp } from "../utils/interfaces";

const { check, validationResult } = require('express-validator');


@controller("/user")
class UserController extends BaseHttpController {
  constructor(@inject(Types.UserService) private userService: UserService) {
    super();
  }

  @httpGet("/")
  public async getUsers(req: Request, res: Response): Promise<any> {
    let users = await this.userService.getUsers();
    return this.json(users, 200);
  }

  @httpPost("/register")
  public async createUser(
    @requestBody() email: String,
    @requestBody() password: String,
    @requestBody() firstName:String,
    @requestBody() lastName:String,
    @requestBody() zipCode:String,
    @requestBody() phone:String
  ) {

    let userData:UserSignUp={
        email,
        password,
        firstName, lastName, zipCode, phone
    }
    try {
        let user = await this.userService.newUser(userData);
        return this.json(user, 201);
    } catch (e) {
        return this.internalServerError()
    }
    
  }
}

export default UserController;
