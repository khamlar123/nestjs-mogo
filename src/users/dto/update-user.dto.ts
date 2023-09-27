export class UpdateUserDto {
    name: string;
    userName: string;
    password: string;
    status: number; //0 not active, 1 active, 2 ban
    updatedAt: string;
}