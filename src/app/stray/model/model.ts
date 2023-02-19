export interface StrayQuery{
    mcremarks:string;
    mcfromdate:string;
    mctodate:string;
    mregion:string;
    mcstrayloc:string;
    mcvehicleorigin:string;
    mcroute:string;
    mcommodity:string;
    mcpackdesc:string;
    mcvehicleno:string;
    mcawbno:string;
}

export interface AddNewStray{
    dstraydate:string;
    cstrayloc:string;
    cpackdesc:string;
    cvehicleno:string;
    cvehicleorigin:string;
    croute:string;
    commodity:string;
    centemplcode:string;
    cstrayno:string;
}

export interface StrayUpdate {
    mcstrayno : string;
    mdstraydate : string;
    mcstrayloc : string;
    mcpackdesc : string;
    mcvehicleno : string;
    mcroute : string;
    mcawbno : string;
    mcremarks : string;
    mc2remarks : string;
    mcstatus : string;
    mcsubmit : string;
    mcemplcode: string;
}