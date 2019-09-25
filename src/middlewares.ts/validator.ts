import { BaseMiddleware } from "inversify-express-utils";
import { injectable } from "inversify";
import express from "express";

const { check, validationResult } = require('express-validator');


@injectable()
class ValidateSignup extends BaseMiddleware {

    public handler(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        return [check("email").isEmail(), check("password").isLength({min:3})]
    }
}


