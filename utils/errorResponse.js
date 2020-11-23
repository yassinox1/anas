class ErrorResponse extends Error{
    constructor(message,Error, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = ErrorResponse;