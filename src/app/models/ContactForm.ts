export class ContactForm {
  private companyName: string;
  private email: string;
  private accountNumber: string;
  private contactPerson: string;
  private newOrder: boolean;
  private productName: string;
  private quantity: number;
  private startingNumber: string;
  private shippingAddress: string;
  private billingAddress: string;
  private comments: string;

  constructor(companyName: string, email: string, accountNumber: string, contactPerson: string, newOrder: boolean, productName: string,
              quantity: number, startingNumber: string, shippingAddress: string, billingAddress: string ,comments: string) {
    this.companyName = companyName;
    this.email = email;
    this.accountNumber = accountNumber;
    this.contactPerson = contactPerson;
    this.newOrder = newOrder;
    this.productName = productName;
    this.quantity = quantity;
    this.startingNumber = startingNumber;
    this.shippingAddress = shippingAddress;
    this.billingAddress = billingAddress;
    this.comments = comments;
  }

  getcompanyName(): string {
    return this.companyName;
  }

  setcompanyName(value: string) {
    this.companyName = value;
  }

  getemail(): string {
    return this.email;
  }

  setemail(value: string) {
    this.email = value;
  }

  getaccountNumber(): string {
    return this.accountNumber;
  }

  setaccountNumber(value: string) {
    this.accountNumber = value;
  }

  getcontactPerson(): string {
    return this.contactPerson;
  }

  setcontactPerson(value: string) {
    this.contactPerson = value;
  }

  getnewOrder(): boolean {
    return this.newOrder;
  }

  setnewOrder(value: boolean) {
    this.newOrder = value;
  }

  getproductName(): string {
    return this.productName;
  }

  setproductName(value: string) {
    this.productName = value;
  }

  getquantity(): number {
    return this.quantity;
  }

  setquantity(value: number) {
    this.quantity = value;
  }

  getstartingNumber(): string {
    return this.startingNumber;
  }

  setstartingNumber(value: string) {
    this.startingNumber = value;
  }

  getshippingAddress(): string {
    return this.shippingAddress;
  }

  setshippingAddress(value: string) {
    this.shippingAddress = value;
  }

  getcomments(): string {
    return this.comments;
  }

  setcomments(value: string) {
    this.comments = value;
  }
}
