class ApiResponse {
    constructor(statusCode, message = 'Success', data, stack = '') {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode < 400;
    }
}
