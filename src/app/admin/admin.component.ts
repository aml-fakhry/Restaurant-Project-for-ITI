import { Component, OnInit } from '@angular/core';
import { User } from 'src/services/user';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserServicesService } from 'src/services/user-services.service';


@Component({
  selector: 'app-admin',
  template: `
  <div class="container">

 
  <div class="block-1"></div>
  <div class="block-2"></div>
  <div class="block-3"></div>
  <div class="loader">
      <ul>
          <li>S</li>
          <li>O</li>
          <li>M</li>
          <li>D</li>
          <li>I</li>
          <li>N</li>
          <li>G</li>
      </ul>
  </div>
  <div class="login-page">
      <div class="container">
          <div class="log-card">
              <div class="log-box">
                  <div class="form-logo">
                      <img src="">
                  </div>
                  <div class="form-title">
                      <h4>Admin Login Page</h4>
                  </div>
                  <div class="form-group">
  <label for="username">user name:</label>
  <input type="text" class="form-control" [(ngModel)]="userModel.userName" #usr placeholder="user name" >
</div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" placeholder="password" id="password" #pwd>
</div>

                  <div class="form-group" id="btn">
                <button  class="btn btn-primary" (click)="login(usr.value,pwd.value)">Login</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

    
  `,
  styles: [`*{
    box-sizing: border-box;
}
body{
    padding: 0;
    margin: 0;
}
.login-page{
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(-135deg,#c850c0,#4158d0);
    width: 0%;
    height: 100vh;
    animation: log-page 4s cubic-bezier(0.19,1,0.22,1)forwards;
    animation-delay: 5s;
    opacity: 0.2;
}
@keyframes log-page{
    0%{
        opacity: 0;
        width: 0%;
    }
    100%{
        opacity: 1;
        width: 100%;
    }
}
.log-card{
    position: absolute;
    top: 50%;
    left:50%;
    width:0px;
    height:440px;
    transform:translate(-50%,-50%);
    padding:20px;
    background:linear-gradient(-135deg,#c850c0,#4158d0);
    box-shadow:0 10px 20px rgba(red, green, blue, 0.5);
    animation: expand 4s cubic-bezier(0.19,1,0.22,1)forwards;
    animation-delay: 5.5s;
    opacity: 0;
}
@keyframes expand{
    0%{
        opacity: 0;
        width: 0px;
    }
    100%{
        opacity: 1;
        width: 400px;
    }
}
.log-box{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #fff ;
}
.log-box::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    animation: log-box 4s cubic-bezier(.19,1,0.22,1)forwards;
    animation-delay: 5.8s;
}
@keyframes log-box{
    0%{
        right:0 ;
        width:0% ;
    }
    50%{
        right: 0;
        width: 100%;
    }
    100%{
        right:100% ;
        width: 0%;
    }
}

.form-logo{
    text-align:center;

}
.form-logo img{
    width: 150px;
}
.form-title{
    text-align:center;
    
}
.form-title h4{
    padding:20px;
}
.log-btn{
    padding: 5px 25px;
    border: 2px solid tomato;
    background: tomato;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    transition:  all .5s ease-in-out;
    float: right;
}
.log-btn:hover{
    text-decoration: none;
    transition:  all .5s ease-in-out;
    border-radius: 0 22px;
    background: transparent !important;
    color: #000 !important;
    float: right;
}
/*  */
.block-1{
    position:absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background: #202020;
    animation: slide-right 4s cubic-bezier(.74,.86,.4,.92) forwards;
    animation-delay:0.7s ;
}
.block-2{
    position:absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background: tomato;
    animation: slide-right 4s cubic-bezier(.74,.86,.4,.92) forwards;
    animation-delay: 1.6s;
}
.block-3{
    position:absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background: rgb(85, 110, 255);
    animation: slide-right 4s cubic-bezier(.74,.86,.4,.92) forwards;
    animation-delay: 2.8s;
}
@keyframes slide-right{
    0%{
        right: 0;
        width: 0%;
    }
    50%{
        right: 0;
        width: 100%;
    }
    0%{
        right: 100;
        width: 0%;
    }
    
}
.loader{
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.loader ul{
    list-style: none;
    margin: 0px;
    padding: 0;

}
.loader ul li{
    margin: 0 12px;
    color: #fff;
    font-size: 60px;
    font-weight: 600;
    display: inline-block;
    animation: load 4s ease-in-out forwards;
    opacity: 0;
    transform: translateX(0px);
}
.loader ul li:nth-child(1){
    animation-delay: 1.1s;
}
.loader ul li:nth-child(2){
    animation-delay: 1.3s;
}
.loader ul li:nth-child(3){
    animation-delay: 1.5s;
}
.loader ul li:nth-child(4){
    animation-delay: 1.7s;
}
.loader ul li:nth-child(5){
    animation-delay: 1.7s;
}
.loader ul li:nth-child(6){
    animation-delay: 1.9s;
}
.loader ul li:nth-child(7){
    animation-delay: 2.1s;
}
@keyframes load{
    0%{
        opacity: 0;
        transform: translateX(80px);
    }
    20%{
        opacity: 0;
        transform: translateX(80px);
    }
    80%{
        opacity: 1;
        transform: translateX(0px);
    }
    100%{
        opacity: 0;
        transform: translateX(-80px);
    }

}
`]
})
export class AdminComponent implements OnInit {

  constructor( private router:Router,private userServ:UserServicesService) { }
  public testuserData;
  ngOnInit() {
  }
  userModel=new User("","");
  flag:boolean=false;
  login(usr,pwd)
  {
    this.userModel.userName=usr;
    this.userModel.password=pwd;
   return this.userServ.loginTest(this.userModel).subscribe(data=>{
    
    if (data!=null)
    {
      this.router.navigate(['menu']);this.router.navigate(['&zn@E4!#Kn43462P']);
    }
    else{
      this.router.navigate(['']);
      console.log(data);
    }
   })
   
  // this.router.navigate(['menu']);
  }

}
