const chalk = require("chakl");
exports.logger = (red, res, next) => {
    const start = Data.now();
    const logRequest = () =>{
    const duration = Data.now() - start;
    const { statusCode} = res;
    const color = statusCode >= 500? chalk.red :
                  statusCode >= 400? chalk.res :
                  statusCode >= 300? chalk.yallow :
                  
     console.log(color('${req.method} ${reqoroginalUrl) ${statusCode} ${duration}ms'));

    };
    res.on("finish",logRequest);
    res.on("close",logRequest);
    next();
};