class Actor {
    constructor(fname, lname, birthday, imdbLink, imageURL){
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.imdbLink = imdbLink;
        this.imageURL = imageURL;
    }
    calcAge(){
        const currentYear = new Date().getFullYear();
        return (currentYear - this.birthday);
    }
}

export default Actor;
