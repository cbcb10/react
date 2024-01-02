import axios from 'axios';
import { observable, action, makeObservable,computed,runInAction } from 'mobx';

class BusinessData {
    //before giving the project, empty the details
    data = {
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        logo: "https://i.pinimg.com/236x/a2/b2/9a/a2b29a9f4d352c586742319a799d5c7f.jpg",
        description: "The best coding academy in the world",
    }

    constructor(){
        makeObservable(this,{
            data:observable,
            createOrUpdateBusinessdata:action,
            getBusinessDataFromServer:action,
            Data:computed
        }) 
    }

    get Data(){
        this.getBusinessDataFromServer();
        return this.data;
    }

    getBusinessDataFromServer(){
        axios.get("http://localhost:8787/businessData").then((res)=>{
           runInAction(()=>{
            this.data = res.data;
           })       
        })
    }

    createOrUpdateBusinessdata(data){
          fetch("http://localhost:8787/businessData",{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               name:data.name,
               address: data.address,
               phone: data.phone,
               owner: data.owner,
               logo: data.logo,
               description: data.description,
            })
          }).then(()=>{
            this.data=data;
          })
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default new BusinessData();