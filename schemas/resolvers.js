const { PopData } = require("../models")

const resolvers = {
    Query: {
        popdatas: async() => {
            return await PopData.find({})
        },
        
        popdata: async (parent, {popId}) => {
            return await PopData.findOne({_id: popId})
        }
    },
    Mutation: {
        addPopData: async (parent, {country, year, population}) => {
            return await PopData.create({country, year, population});
        },

        updatePopData: async (parent, {id, population}) => {
            return await PopData.findOneAndUpdate({_id: id}, { population }, { new: true })
        },

        deletePopData: async (parent, {id}) => {
            return await PopData.findOneAndDelete({_id: id})
        }
    }
}

module.exports = resolvers;