export class CreateConentDto {
    title: string;
    conent: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    coments: {
        uId: string;
        comment: string;
        comentDate: string;
        comentUpdate: string;
    }
}
