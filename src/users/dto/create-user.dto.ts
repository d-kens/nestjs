// DTO for the data we will be receiving in the request
export class CreateUserDto {
    name: string;
    email: string;
    role: "INTERN" | "ENGINEER" | "ADMIN";
}