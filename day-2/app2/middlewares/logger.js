


module.exports = (req, res, next) => {
    const start = +Date.now();
    const { method, url } = req;
    const stdout = process.stdout;
    res.on('finish', () => {
        const duration = +Date.now() - start;
        const { statusCode } = res;
        const log = `${method} ${url} ${statusCode} ${duration}ms`;
        stdout.write(log + '\n');
    });
    next();
};