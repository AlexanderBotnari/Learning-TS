interface IPayment{
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus{
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface IPaymentRequest extends IPayment{}

interface IDataSuccess extends IPayment{
    databaseId: number;
}

interface IDataFailed{
    errorMessage: string;
    errorCode: number;
}

/////////BAD Aproach
// interface IResponse{
//     status: PaymentStatus;
//     data: IDataSuccess | IDataFailed;
// }

////////GOOD Aproach
interface IResponseSuccess{
    status: PaymentStatus.SUCCESS;
    data: IDataSuccess;
}

interface IResponseFailed{
    status: PaymentStatus.FAILED;
    data: IDataFailed;
}

function get(req: IResponseSuccess): IResponseSuccess | IResponseFailed{return req}
