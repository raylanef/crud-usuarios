import { config } from "../../core/database/config";
import { Mysql } from "../../core/database/connection";
import { FormatQuery } from "../../core/database/formatQuery";


export class UsersService {
    private database: Mysql = new Mysql(config);

    public async process(req: any, res:any): Promise<any> {
        try {
            let response = await this.database.executeQuery(new FormatQuery().methodHttp(req));

            if(response.protocol41){
                return res.json({
                    message: "Deu certo"
                });
            }
            return res.json(response);
        } catch (error) {
            return res.sendError('Hmmmm...parece que algo deu errado', error);
        }
    }

}