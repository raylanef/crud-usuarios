import { UsersService } from "./service";

export class UsersController {
    protected service: UsersService = new UsersService();

    public async execute(req: any, res: any): Promise<any> {
        try {
            return await this.service.process(req, res);
        } catch (error) {
            return error;
        }
    }

}
