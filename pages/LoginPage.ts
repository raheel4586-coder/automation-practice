import { Page } from '@playwright/test'

export class LoginPage{

    constructor(private page : Page){}

    async navigate(){
        await this.page.goto('https://www.amazon.ae');

    }


    async login(username:string, password:string){

        await this.page.getByRole('link', {name: 'signin'}).click();
        await this.page.getByLabel('Enter mobile number or email').fill(username);
        await this.page.getByRole('button', {name:'Continue'});

    }


}
