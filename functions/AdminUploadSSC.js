'use strict';
const AdminUpload = require('../models/uploaded');

exports.GetDocumentsSSC = () => {
	return new Promise(function (resolve, reject) {
        
		AdminUpload.find({"DocumentType":"SSC Marksheet"})
			.then(function (result) {
                return resolve({
                    result:result,
                    filehash:result.filesHash
                })
				
			})


	});
}