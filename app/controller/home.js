'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        await this.ctx.service.forxy.insert(this.ctx.query)
        this.ctx.body = {
            status: 'ok'
        };
        this.ctx.status = 200;
    }
}

module.exports = HomeController;