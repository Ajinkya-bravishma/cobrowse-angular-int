import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CobrowseAPI from 'cobrowse-agent-sdk';
import * as jose from 'jose';
declare var require: any;
// const CobrowseIO = require('cobrowse-sdk-js');
// import CobrowseIO from "cobrowse-sdk-js"


@Component({
  selector: 'app-agent-present',
  templateUrl: './agent-present.component.html',
  styleUrls: ['./agent-present.component.css'],
})
export class AgentPresentComponent {
  cobrowse = new CobrowseAPI();
  // CobrowseIO: any;
  frameEl = document.getElementById('myIframe');
  selectedTool: string = 'laser';
  jwtToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTI5MjE0MDk1MTEsImV4cCI6MTc0Nzk2NDk3OSwiYXVkIjoiaHR0cHM6Ly9jb2Jyb3dzZS5pbyIsImlzcyI6Img1VTlPNjFTMERHMDVRIiwic3ViIjoibmlraGlsZ0BicmF2aXNobWEuY29tIiwiZGlzcGxheU5hbWUiOiJOaWtoaWwgVmlzaHZhcyBHaG9ycGFkZSJ9.jItCm8OrkPkz_ciaNjatnjwRkJfBqa8EExzjhi99lbHh_-NZhuv4bk6jQrc5SgBNj61pA1idDO8JysxVlG_L-zSMXuYDy2N8QZ_1uJNpDJu-HWRGZ7vqE2ZDCSFEFCK1SyGuZv3MIDpaKoixxpDdEwxkQcbc5vkZaZ3uC37WerIaze2H3odhL6PJPRSYxZ6OvPK00eJk2s-N6tteCHerr49FwL4GNg39kzJ3xAXksse0NVDB2d-yveWomaLV54GsePhxn-2QWorHgW4iwElmDUBH1JcDk5xVyBDncHWvMY9reiawqF5hDLxN7rkLaLoSfRsH7BKl9O3h8XbshMXncZ3yROiz4hAI76RSM3KiTvr430iIq2VHTlWq0OS0QXUeaJ8ESgzgflxE9C-9J4gVhM5JY2SfWEfA6GL4XL-OMjlzsnq0ByJT8jzH9j9UdL9kSe86iu1QEszHeGU54RBD-mXGRkucGTRin8mqRzzctaddHOCA_mx6y5GWSH8wPSGZqQeli6MOqwW_5lxQZv97l5Zy40pI7rdaxmjkCU8sKm9SwwyForFXHg9UoXdFeXgOiy1q6LO0-cKF3ciWecvCSJc0Zn-lq8LqrMHhqQgIvDuml9E0Gw28Xd3rNfDUjMY_qTyfK0YagMLC32ZE4jT4nBnjowwsTJ7TSXArYy2tNyU`;
  //iframeurl="https://cobrowse.io/dashboard";
  session: any;
  suggestionForm!: FormGroup;
  viewerToken: any;
  presentURL: any;
  sessionID: any;
  //adding for agent preview
  licenseKey = 'h5U9O61S0DG05Q';
  agentToken =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTI5MjE0MDk1MTEsImV4cCI6MTc0Nzk2NDk3OSwiYXVkIjoiaHR0cHM6Ly9jb2Jyb3dzZS5pbyIsImlzcyI6Img1VTlPNjFTMERHMDVRIiwic3ViIjoibmlraGlsZ0BicmF2aXNobWEuY29tIiwiZGlzcGxheU5hbWUiOiJOaWtoaWwgVmlzaHZhcyBHaG9ycGFkZSJ9.jItCm8OrkPkz_ciaNjatnjwRkJfBqa8EExzjhi99lbHh_-NZhuv4bk6jQrc5SgBNj61pA1idDO8JysxVlG_L-zSMXuYDy2N8QZ_1uJNpDJu-HWRGZ7vqE2ZDCSFEFCK1SyGuZv3MIDpaKoixxpDdEwxkQcbc5vkZaZ3uC37WerIaze2H3odhL6PJPRSYxZ6OvPK00eJk2s-N6tteCHerr49FwL4GNg39kzJ3xAXksse0NVDB2d-yveWomaLV54GsePhxn-2QWorHgW4iwElmDUBH1JcDk5xVyBDncHWvMY9reiawqF5hDLxN7rkLaLoSfRsH7BKl9O3h8XbshMXncZ3yROiz4hAI76RSM3KiTvr430iIq2VHTlWq0OS0QXUeaJ8ESgzgflxE9C-9J4gVhM5JY2SfWEfA6GL4XL-OMjlzsnq0ByJT8jzH9j9UdL9kSe86iu1QEszHeGU54RBD-mXGRkucGTRin8mqRzzctaddHOCA_mx6y5GWSH8wPSGZqQeli6MOqwW_5lxQZv97l5Zy40pI7rdaxmjkCU8sKm9SwwyForFXHg9UoXdFeXgOiy1q6LO0-cKF3ciWecvCSJc0Zn-lq8LqrMHhqQgIvDuml9E0Gw28Xd3rNfDUjMY_qTyfK0YagMLC32ZE4jT4nBnjowwsTJ7TSXArYy2tNyU';
  cobrowseAgent = new CobrowseAPI(this.agentToken);
  require: any;

  pkcs8 = `-----BEGIN PRIVATE KEY-----
  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
  O+/PnbOvdUhahqZxBJXSbPow4vl7xg==
  -----END PRIVATE KEY-----
  `;
  public isShareScreen: boolean = true;
  public isEnd: boolean = false;

  ngOnInit() {
    this.createPresentSession();
  }

  constructor(private formBuilder: FormBuilder) {
    this.suggestionForm = this.formBuilder.group({
      presentURL: [''],
    });
  }

  //**** agent screen sharing ****//

  createPresentSession = async () => {
    this.session = await this.cobrowseAgent.sessions.create({
      full_device: 'requested',
    });
    // console.log("session:",this.session);
    this.sessionID = this.session.id;
    console.log('sessionId:', this.sessionID);

    this.viewerToken = await this.generateViewerJWT(
      this.licenseKey,
      this.sessionID
    );
    console.log('viewerToken:', this.viewerToken);
    // Generate the present URL for the session with the viewer token all query parameters to hide agent tools from the viewer
    this.presentURL = `https://cobrowse.io/session/${this.session.id}?token=${this.viewerToken}&agent_tools=none&device_controls=none&end_action=none&popout=none&session_details=none`;
    console.log('presentURL', this.presentURL);
    this.suggestionForm.controls['presentURL'].setValue(this.presentURL);
  };

  generateViewerJWT = async (licenseKey: any, id: any) => {
    const alg = 'RS256';

    // WE DO NOT RECOMMEND COMMITING YOUR PRIVATE KEY. THIS IS ONLY FOR DEMO PURPOSES.
    // Replace with your private key in PKCS8 format
    const pkcs8 = this.pkcs8;

    const privateKey = await jose.importPKCS8(pkcs8, alg);

    // Generate a viewer JWT token scoped to a single session
    const jwt = await new jose.SignJWT({
      displayName: 'Viewer',
      policy: {
        version: 2,
        sessions: {
          id: id,
        },
      },
    })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setIssuer(this.licenseKey)
      .setSubject('viewer@cobrowse.io')
      .setAudience('https://cobrowse.io')
      .setExpirationTime('30m') // Choose your own expiration time
      .sign(privateKey);

    return jwt;
  };

  startPresentSession = async () => {
    const media = await navigator.mediaDevices.getDisplayMedia({
      video: {
        // cursor: 'always',
        width: { ideal: 1400 },
        height: { ideal: 1000 },
        frameRate: { max: 10 },
      },
      audio: false,
    });

    // await CobrowseIO.client(); // client

    // CobrowseIO.license = this.licenseKey;
    // CobrowseIO.redactedViews = ['.container'];
    // CobrowseIO.capabilities = ['full_device'];
    // CobrowseIO.showSessionControls = () => {};
    // CobrowseIO.hideSessionControls = () => {};
    // CobrowseIO.confirmSession = async () => true;
    // CobrowseIO.confirmFullDevice = async () => media;
    // CobrowseIO.confirmRemoteControl = async () => false;

    // CobrowseIO.on('session.updated', (presentSession: any) => {
    //   if (presentSession.isActive()) {
    //     this.isShareScreen = false;
    //     this.isEnd = true;

    //     if (!presentSession.fullDevice()) {
    //       this.session.end();
    //     }
    //   }
    // });

    // CobrowseIO.on('session.ended', async (presentSession: any) => {
    //   if (media) media.getTracks().forEach((track) => track.stop());
    //   this.resetPresentSession();
    // });

    // await CobrowseIO.start({
    //   allowIFrameStart: true,
    //   register: false,
    // });

    // // Use the Client SDK to join the session
    // await CobrowseIO.getSession(this.session.id);
  };

  resetPresentSession = async () => {
    // await CobrowseIO.stop();
    this.isShareScreen = true;
    this.isEnd = false;

    // this.isPreview = false

    await this.createPresentSession();
  };
}
