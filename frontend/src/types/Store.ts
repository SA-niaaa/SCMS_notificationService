// export interface StoreType {
//   id: number;
//   district: string;
//   subdivision: string;
//   block: string;
//   storeCode: string;
//   storeName: string;
//   storeType: string;
// }
export interface StoreType {
  storeId: number;
  storeCode: string;
  storeName: string;
  location: string;
  storeType: string;
  managerName: string;
  contactNumber: string;
  email: string;
  status: string;
}