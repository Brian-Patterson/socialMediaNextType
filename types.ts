//from quicktype

export interface Person {
    status: string;
    code:   number;
    total:  number;
    data:   Datum[];
}

export interface Datum {
    id:        number;
    firstname: string;
    lastname:  string;
    email:     string;
    phone:     string;
    birthday:  Date;
    gender:    string;
    address:   Address;
    website:   string;
    image:     string;
}

export interface Address {
    id:             number;
    street:         string;
    streetName:     string;
    buildingNumber: string;
    city:           string;
    zipcode:        string;
    country:        string;
    county_code:    string;
    latitude:       number;
    longitude:      number;
}

export interface PostInfo {
    status: string;
    code:   number;
    total:  number;
    data:  Post[];
}

export interface Post {
    title:   string;
    author:  string;
    genre:   string;
    content: string;
}