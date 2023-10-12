"use strict";(self.webpackChunkangular_registration_login_example=self.webpackChunkangular_registration_login_example||[]).push([[354],{8354:(W,g,d)=>{d.r(g),d.d(g,{JobDetailModule:()=>$});var n=d(433),m=d(6895),a=d(9230),e=d(8256);let v=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:4,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a"),e._uU(3,"Job"),e.qZA()()())},encapsulation:2}),i})();var c=d(590),l=d(6082);function Z(i,r){1&i&&e._UZ(0,"span",10)}function h(i,r){1&i&&(e.TgZ(0,"span"),e._uU(1,"Delete"),e.qZA())}function x(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",6)(8,"a",7),e._uU(9,"Edit"),e.qZA(),e.TgZ(10,"button",8),e.NdJ("click",function(){const u=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.deleteUser(u.id))}),e.YNc(11,Z,1,0,"span",9),e.YNc(12,h,2,0,"span",5),e.qZA()()()}if(2&i){const t=r.$implicit;e.xp6(2),e.Oqu(t.firstName),e.xp6(2),e.Oqu(t.lastName),e.xp6(2),e.Oqu(t.username),e.xp6(2),e.MGl("routerLink","edit/",t.id,""),e.xp6(2),e.Q6J("disabled",t.isDeleting),e.xp6(1),e.Q6J("ngIf",t.isDeleting),e.xp6(1),e.Q6J("ngIf",!t.isDeleting)}}function J(i,r){1&i&&(e.TgZ(0,"tr")(1,"td",11),e._UZ(2,"span",12),e.qZA()())}let q=(()=>{class i{constructor(t){this.accountService=t}ngOnInit(){this.accountService.getAll().pipe((0,c.P)()).subscribe(t=>this.users=t)}deleteUser(t){this.users.find(s=>s.id===t).isDeleting=!0,this.accountService.delete(t).pipe((0,c.P)()).subscribe(()=>this.users=this.users.filter(s=>s.id!==t))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.B))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:17,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","me-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Users"),e.qZA(),e.TgZ(2,"a",0),e._uU(3,"Add User"),e.qZA(),e.TgZ(4,"table",1)(5,"thead")(6,"tr")(7,"th",2),e._uU(8,"First Name"),e.qZA(),e.TgZ(9,"th",2),e._uU(10,"Last Name"),e.qZA(),e.TgZ(11,"th",2),e._uU(12,"Username"),e.qZA(),e._UZ(13,"th",3),e.qZA()(),e.TgZ(14,"tbody"),e.YNc(15,x,13,7,"tr",4),e.YNc(16,J,3,0,"tr",5),e.qZA()()),2&t&&(e.xp6(15),e.Q6J("ngForOf",o.users),e.xp6(1),e.Q6J("ngIf",!o.users))},dependencies:[m.sg,m.O5,a.yS],encapsulation:2}),i})();function T(i,r){1&i&&(e.TgZ(0,"div"),e._uU(1,"First Name is required"),e.qZA())}function C(i,r){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,T,2,0,"div",10),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.firstName.errors.required)}}function A(i,r){1&i&&(e.TgZ(0,"div"),e._uU(1,"Last Name is required"),e.qZA())}function U(i,r){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,A,2,0,"div",10),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.lastName.errors.required)}}function N(i,r){1&i&&(e.TgZ(0,"div"),e._uU(1,"Username is required"),e.qZA())}function D(i,r){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,N,2,0,"div",10),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.username.errors.required)}}function I(i,r){1&i&&(e.TgZ(0,"em"),e._uU(1,"(Leave blank to keep the same password)"),e.qZA())}function Q(i,r){1&i&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function Y(i,r){1&i&&(e.TgZ(0,"div"),e._uU(1,"Password must be at least 6 characters"),e.qZA())}function w(i,r){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,Q,2,0,"div",10),e.YNc(2,Y,2,0,"div",10),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",t.f.password.errors.minlength)}}function S(i,r){1&i&&e._UZ(0,"span",17)}const f=function(i){return{"is-invalid":i}};function y(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"form",2),e.NdJ("ngSubmit",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onSubmit())}),e.TgZ(1,"div",3)(2,"div",4)(3,"label",5),e._uU(4,"First Name"),e.qZA(),e._UZ(5,"input",6),e.YNc(6,C,2,1,"div",7),e.qZA(),e.TgZ(7,"div",4)(8,"label",5),e._uU(9,"Last Name"),e.qZA(),e._UZ(10,"input",8),e.YNc(11,U,2,1,"div",7),e.qZA()(),e.TgZ(12,"div",3)(13,"div",4)(14,"label",5),e._uU(15,"Username"),e.qZA(),e._UZ(16,"input",9),e.YNc(17,D,2,1,"div",7),e.qZA(),e.TgZ(18,"div",4)(19,"label",5),e._uU(20," Password "),e.YNc(21,I,2,0,"em",10),e.qZA(),e._UZ(22,"input",11),e.YNc(23,w,3,2,"div",7),e.qZA()(),e.TgZ(24,"div",12)(25,"button",13),e.YNc(26,S,1,0,"span",14),e._uU(27," Save "),e.qZA(),e.TgZ(28,"a",15),e._uU(29,"Cancel"),e.qZA()()()}if(2&i){const t=e.oxw();e.Q6J("formGroup",t.form),e.xp6(5),e.Q6J("ngClass",e.VKq(12,f,t.submitted&&t.f.firstName.errors)),e.xp6(1),e.Q6J("ngIf",t.submitted&&t.f.firstName.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(14,f,t.submitted&&t.f.lastName.errors)),e.xp6(1),e.Q6J("ngIf",t.submitted&&t.f.lastName.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(16,f,t.submitted&&t.f.username.errors)),e.xp6(1),e.Q6J("ngIf",t.submitted&&t.f.username.errors),e.xp6(4),e.Q6J("ngIf",t.id),e.xp6(1),e.Q6J("ngClass",e.VKq(18,f,t.submitted&&t.f.password.errors)),e.xp6(1),e.Q6J("ngIf",t.submitted&&t.f.password.errors),e.xp6(2),e.Q6J("disabled",t.submitting),e.xp6(1),e.Q6J("ngIf",t.submitting)}}function P(i,r){1&i&&(e.TgZ(0,"div",18),e._UZ(1,"span",19),e.qZA())}let b=(()=>{class i{constructor(t,o,s,u,p){this.formBuilder=t,this.route=o,this.router=s,this.accountService=u,this.alertService=p,this.loading=!1,this.submitting=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({firstName:["",n.kI.required],lastName:["",n.kI.required],username:["",n.kI.required],password:["",[n.kI.minLength(6),...this.id?[]:[n.kI.required]]]}),this.title="Add User",this.id&&(this.title="Edit User",this.loading=!0,this.accountService.getById(this.id).pipe((0,c.P)()).subscribe(t=>{this.form.patchValue(t),this.loading=!1}))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.saveUser().pipe((0,c.P)()).subscribe({next:()=>{this.alertService.success("User saved",{keepAfterRouteChange:!0}),this.router.navigateByUrl("/users")},error:t=>{this.alertService.error(t),this.submitting=!1}}))}saveUser(){return this.id?this.accountService.update(this.id,this.form.value):this.accountService.register(this.form.value)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(n.qu),e.Y36(a.gz),e.Y36(a.F0),e.Y36(l.B),e.Y36(l.c))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:4,vars:3,consts:[[3,"formGroup","ngSubmit",4,"ngIf"],["class","text-center m-5",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col"],[1,"form-label"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],[4,"ngIf"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"mb-3"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"text-center","m-5"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1),e.qZA(),e.YNc(2,y,30,20,"form",0),e.YNc(3,P,2,0,"div",1)),2&t&&(e.xp6(1),e.Oqu(o.title),e.xp6(1),e.Q6J("ngIf",!o.loading),e.xp6(1),e.Q6J("ngIf",o.loading))},dependencies:[m.mk,m.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,a.yS],encapsulation:2}),i})();function k(i,r){1&i&&(e.TgZ(0,"div"),e._uU(1,"First Name is required"),e.qZA())}function L(i,r){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,k,2,0,"div",10),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.firstName.errors.required)}}function E(i,r){1&i&&(e.TgZ(0,"div"),e._uU(1,"Last Name is required"),e.qZA())}function F(i,r){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,E,2,0,"div",10),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.lastName.errors.required)}}function B(i,r){1&i&&(e.TgZ(0,"div"),e._uU(1,"Username is required"),e.qZA())}function O(i,r){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,B,2,0,"div",10),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.username.errors.required)}}function K(i,r){1&i&&(e.TgZ(0,"em"),e._uU(1,"(Leave blank to keep the same password)"),e.qZA())}function M(i,r){1&i&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function G(i,r){1&i&&(e.TgZ(0,"div"),e._uU(1,"Password must be at least 6 characters"),e.qZA())}function V(i,r){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,M,2,0,"div",10),e.YNc(2,G,2,0,"div",10),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",t.f.password.errors.minlength)}}function j(i,r){1&i&&e._UZ(0,"span",17)}const _=function(i){return{"is-invalid":i}};function z(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"form",2),e.NdJ("ngSubmit",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onSubmit())}),e.TgZ(1,"div",3)(2,"div",4)(3,"label",5),e._uU(4,"First Name"),e.qZA(),e._UZ(5,"input",6),e.YNc(6,L,2,1,"div",7),e.qZA(),e.TgZ(7,"div",4)(8,"label",5),e._uU(9,"Last Name"),e.qZA(),e._UZ(10,"input",8),e.YNc(11,F,2,1,"div",7),e.qZA()(),e.TgZ(12,"div",3)(13,"div",4)(14,"label",5),e._uU(15,"Username"),e.qZA(),e._UZ(16,"input",9),e.YNc(17,O,2,1,"div",7),e.qZA(),e.TgZ(18,"div",4)(19,"label",5),e._uU(20," Password "),e.YNc(21,K,2,0,"em",10),e.qZA(),e._UZ(22,"input",11),e.YNc(23,V,3,2,"div",7),e.qZA()(),e.TgZ(24,"div",12)(25,"button",13),e.YNc(26,j,1,0,"span",14),e._uU(27," Save "),e.qZA(),e.TgZ(28,"a",15),e._uU(29,"Cancel"),e.qZA()()()}if(2&i){const t=e.oxw();e.Q6J("formGroup",t.form),e.xp6(5),e.Q6J("ngClass",e.VKq(12,_,t.submitted&&t.f.firstName.errors)),e.xp6(1),e.Q6J("ngIf",t.submitted&&t.f.firstName.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(14,_,t.submitted&&t.f.lastName.errors)),e.xp6(1),e.Q6J("ngIf",t.submitted&&t.f.lastName.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(16,_,t.submitted&&t.f.username.errors)),e.xp6(1),e.Q6J("ngIf",t.submitted&&t.f.username.errors),e.xp6(4),e.Q6J("ngIf",t.id),e.xp6(1),e.Q6J("ngClass",e.VKq(18,_,t.submitted&&t.f.password.errors)),e.xp6(1),e.Q6J("ngIf",t.submitted&&t.f.password.errors),e.xp6(2),e.Q6J("disabled",t.submitting),e.xp6(1),e.Q6J("ngIf",t.submitting)}}function R(i,r){1&i&&(e.TgZ(0,"div",18),e._UZ(1,"span",19),e.qZA())}const X=[{path:"",component:v,children:[{path:"",component:q},{path:"add",component:b},{path:"edit/:id",component:b},{path:"process/:id",component:(()=>{class i{constructor(t,o,s,u,p){this.formBuilder=t,this.route=o,this.router=s,this.accountService=u,this.alertService=p,this.loading=!1,this.submitting=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({firstName:["",n.kI.required],lastName:["",n.kI.required],username:["",n.kI.required],password:["",[n.kI.minLength(6),...this.id?[]:[n.kI.required]]]}),this.title="Add User",this.id&&(this.title="Edit User",this.loading=!0,this.accountService.getById(this.id).pipe((0,c.P)()).subscribe(t=>{this.form.patchValue(t),this.loading=!1}))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.saveUser().pipe((0,c.P)()).subscribe({next:()=>{this.alertService.success("User saved",{keepAfterRouteChange:!0}),this.router.navigateByUrl("/users")},error:t=>{this.alertService.error(t),this.submitting=!1}}))}saveUser(){return this.id?this.accountService.update(this.id,this.form.value):this.accountService.register(this.form.value)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(n.qu),e.Y36(a.gz),e.Y36(a.F0),e.Y36(l.B),e.Y36(l.c))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:4,vars:3,consts:[[3,"formGroup","ngSubmit",4,"ngIf"],["class","text-center m-5",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col"],[1,"form-label"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],[4,"ngIf"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"mb-3"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"text-center","m-5"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1),e.qZA(),e.YNc(2,z,30,20,"form",0),e.YNc(3,R,2,0,"div",1)),2&t&&(e.xp6(1),e.Oqu(o.title),e.xp6(1),e.Q6J("ngIf",!o.loading),e.xp6(1),e.Q6J("ngIf",o.loading))},dependencies:[m.mk,m.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,a.yS],encapsulation:2}),i})()}]}];let H=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.Bz.forChild(X),a.Bz]}),i})(),$=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.ez,n.UX,H]}),i})()}}]);