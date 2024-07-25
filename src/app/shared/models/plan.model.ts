export interface Plan{
    "id": number,
    "payku_id": string,
    "name": string,
    "description": string,
    "amount": number,
    "type": string,
    "full_access": boolean,
    "app": boolean,
    "ultra_suport": boolean,
    "clients_number": number,
    "status": string,
    "created_at": Date,
    "updated_at": Date
}
export interface Plans{
    'M': Plan[],
    'S': Plan[],
    'Y': Plan[]
}