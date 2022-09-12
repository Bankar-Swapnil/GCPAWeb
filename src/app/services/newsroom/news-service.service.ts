import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { map } from 'rxjs';
import { Newsroom } from 'src/app/Interfaces/Newsroom';
import { AuthServiceService } from '../auth-service/auth-service.service';
import { UpdateRegistrationService } from '../update-registration/update-registration.service';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  newsroom:Newsroom[]=[]
  loader=true;

  constructor(public functions: AngularFireFunctions, public updateRegistration: UpdateRegistrationService , public authService:AuthServiceService) { }
  addNews(news:Newsroom)  {
    const callable = this.functions.httpsCallable('newsroom/addNews');
        console.log("add News");
        callable({ uid:news.Uid, name:news.Name, imageUrl:news.ImageUrl, link:news.Link , status:news.Status}).subscribe({
          next: (data) => {
            console.log("News Added");
      
          },
          error: (error) => {
            console.error("Error", error);
          },
          complete: (() =>{ 
            console.info('Successful')
            alert("file addition Success");
           
        })
    });
  }
  
  getnews(){
    const callable = this.functions.httpsCallable("newsroom/getNews");
  callable({ }).pipe(map(res=>{
    const data = res.data as Newsroom[];
    return data;
  })).subscribe({
    next: (data) => {
      this.newsroom = data;
    },
    error: (error) => {
      console.error(error);
    },
    complete: () => {
      console.info('Getting News successful')
      this.loader=false;
    }
  });
}

}
