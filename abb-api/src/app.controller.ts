import { Controller, Get, UseGuards, Post, Request, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service'

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) { }

    //Default Route
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    // get All Users
    @Get('users')
    getUsers() {
        return this.userService.findAll();
    }

    // Add User
    @Post('users')
    addUser(@Request() req) {  
        return this.userService.addOne(req.body.username, req.body.password, req.body.roles); // Return JWT
    }

    // Add User
    @Delete('users/id/:id')
    removeUser(@Param() params) {  
        return this.userService.removeOneById(params.id); // Return JWT
    }

    // Get User by ID
    @Get('users/id/:id')
    getUserById(@Param() params) {
        return this.userService.findOneById(params.id);
    }

    // Get User by name
    @Get('users/username/:username')
    getUserByName(@Param() params) {
        return this.userService.findOneByName(params.username);
    }

    
    //Route to check login and get JWT
    @UseGuards(AuthGuard('local')) // Check if credentials match
    @Post('auth/login')
    login(@Request() req) {  
        return this.authService.login(req.user, true); // Return JWT
    }

    //Route only accessible via JWT
    // @UseGuards(AuthGuard('jwt')) // Verify signature and decode JWT
    // @Get('profile')
    // getProfile(@Request() req) {
    //     return req.user; // Get User infos
    // }
}
