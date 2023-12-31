import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  orderData: orderReceiptSchema = {
    userName: '',
    userEmailId: '',
    userPhoneNumber: '',
    userLoyaltyBalance: 0,
    totalCartMoney: 0,
    productAndQuantityList: []
  };


  userResponse: UserResponse = {
    userId: '',
    bool: false,
    role: ''
  };


  constructor() { }

  //posting up the order data
  setOrderData(e: orderReceiptSchema) {
    this.orderData = e;
    sessionStorage.setItem('orderData',JSON.stringify(this.orderData));
  }

  //setting the user response 
  setUserResponse(e: UserResponse) {
    this.userResponse = e;
    sessionStorage.setItem('userResponse',JSON.stringify(this.userResponse));
  }

  //getting the order data from session storage 
  getOrderData() {
    return JSON.parse(sessionStorage.getItem('orderData')!);
  }

  //getting the user details from session storage like logged in users 
  getUserResponse() {
    return JSON.parse(sessionStorage.getItem('userResponse')!);
  }
}

interface productAndQuantitySchema {
  productId: string;
  orderedProductQuantity: number;
}

interface orderReceiptSchema {
  userName: string,
  userEmailId: string,
  userPhoneNumber: string,
  userLoyaltyBalance: number,
  totalCartMoney: number,
  productAndQuantityList: Array<productAndQuantitySchema>
}

interface UserResponse {
  userId: string;
  bool: boolean;
  role: string;
}
