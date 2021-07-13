import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment.prod";


import {App} from "@slack/bolt";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  username: string = 'username';
  messages:string[] = [];
  message:string= '';

  constructor() {

  }



  ngOnInit(): void {

    const app = new App({
      token: environment.SLACK_BOT_TOKEN,
      signingSecret: environment.SLACK_SIGNING_SECRET
    });



  // Initializes your app with your bot token and signing secret
      (async () => {
        // Start your app
        await app.start(3000 || process.env.PORT);

        console.log('⚡️ Bolt app is running!');
      })();
  }


  submit(): void{

  }


}
