function validateRequest(request) {
    let allowedMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let allowedVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!request.hasOwnProperty('method') || allowedMethods.indexOf(request.method) === -1) {
        throw new Error('Invalid request header: Invalid Method')
    }

    let uriMatcher = /^(\*|[a-zA-Z0-9\.]+)$/g
    if (!request.hasOwnProperty('uri') || !uriMatcher.exec(request.uri)) {
        throw new Error('Invalid request header: Invalid URI')
    }

    if (!request.hasOwnProperty('version') || allowedVersions.indexOf(request.version) === -1) {
        throw new Error('Invalid request header: Invalid Version')
    }

    let messageMatcher = /^([^\<\>\\\&\'\"]*)$/g
    if (!request.hasOwnProperty('message') || !messageMatcher.exec(request.message)) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return request
}

console.log(validateRequest({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}));