export default class BaseResponse{
    data = null;
    constructor(object){
        this.data = object;
        this.isSuccess = object.isSuccess;
        this.data = object.data;
        this.messages = object.messages;
    }

    isSuccess: boolean = false;
    data: Object = null;
    messages: Object = null;
}