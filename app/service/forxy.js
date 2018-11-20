const Service = require('egg').Service;
class Forxy extends Service {
    async insert(model) {
        const status = await this.ctx.model.Forxy.create(model)
        return status;
    }
}
module.exports = Forxy;