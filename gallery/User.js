function User(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.gallery = [];

    this.populateGallery = function () {
        this.gallery.push(new Picture("https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920-1366x550.jpg"));
        this.gallery.push(new Picture("https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/kodaikanal-2836301.jpg?crop=0,96,2560,1408&wid=4000&hei=2200&scl=0.64"));
        this.gallery.push(new Picture("https://isha.sadhguru.org/blog/wp-content/uploads/2016/05/natures-temples.jpg"));
        this.gallery.push(new Picture("https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg"));
        this.gallery.push(new Picture("https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg"));
    }

    this.getGallery = () => {
        return this.gallery;
    }
}