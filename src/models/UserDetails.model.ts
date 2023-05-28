export type UserDetails = {
  fname: string;
  lname: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
};

export type UserDetailsDB = UserDetails & {
  email: string;
  phoneNumber: string | null;
  uid: string;
};
