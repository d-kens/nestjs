import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUSerDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Leane Graham",
            "email": "sincere@april.biz",
            "role": "INTERN"
        },
        {
            "id": 2,
            "name": "Onyango Dickens",
            "email": "omondikens1@gmail.com",
            "role": "ADMIN"
        },
        {
            "id": 3,
            "name": "Ervin Howell",
            "email": "ervin@howell.tv",
            "role": "INTERN"
        },
        
        {
            "id": 4,
            "name": "Kimberly Moraa",
            "email": "kimk@gmail.com",
            "role": "ENGINEER"
        },
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if(role) {
            return this.users.filter(user => user.role = role)
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)

        return user
    }

    create(createUserDto: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id) 

        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }

        this.users.push(newUser)
        return newUser
    }


    update(id: number, updateUserDto: UpdateUSerDto) {
        this.users = this.users.map(user => {
            if(user.id === id) {
                return {...user, ...updateUserDto}
            }

            return user
        })

        return this.findOne(id)
    }

    delete(id: number) {
        const removedUSer = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUSer
    }

}
