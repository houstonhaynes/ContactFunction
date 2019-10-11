module.exports = async function (context, req) {
    if (req.body.email) {
        context.bindings.message = {
            subject: 'Message from ' + req.body.name + ' via h3tech.io',
            from: { 
                name: req.body.name, 
                email: req.body.email 
            },
            content: [{
                type: 'text/plain',
                value: req.body.message
            }]
        };
    return {
            res: {
                status: 200
            },
        };
    } else {
        return {
            res: {
                status: 400
            }
        };
    }
};