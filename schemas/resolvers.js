const { PopData } = require("../models")

const resolvers = {
    Query: {
        popdatas: async() => {
            return await PopData.find({})
        },
        
        popdata: async (parent, {popId}) => {
            return PopData.findOne({_id: popId})
        }
    }
}

module.exports = resolvers;