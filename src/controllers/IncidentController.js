const connection = require("../database/connection");

module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body;
        request.headers;
        const ong_id = request.headers.authorization;

        await connection('incidentes').insert({
            title,
            description,
            value,
            ong_id,
        })
    }
};