'use strict';
const { sanitizeEntity } = require('strapi-utils');
const mime = require('mime-types'); //used to detect file's mime type
const fs = require('fs');
const fileName = 'abc.png';
const filePath = `C:/Users/Admin/Pictures/Screenshots/${fileName}`
// const stats = fs.statSync(filePath);


/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    uploadImg: async (ctx) =>{

        let data = ctx.request.body
        let stats = fs.statSync(data.filePath)

        await strapi.plugins.upload.services.upload.upload({
            data:{
                ref: 'product',
                refId: data.productId,
                field: 'image'
            }, //mandatory declare the data(can be empty), otherwise it will give you an undefined error.
            files: {
                path: data.filePath,
                name: data.fileName,
                type: mime.lookup(data.filePath), // mime type of the file
                size: stats.size,
            },
        });
        

        return [1,2,3];
    }
};
