



export class Profile {
  constructor(data) {
    this.id = data._id
    // this._id = data._id
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.linkedin = data.linkedin
    this.coverImg = data.coverImg
    this.github = data.github
    this.resume = data.resume
    this.graduated = data.graduated
    this.class = data.class
  }



  get gradStatus() {

    if (this.graduated == false) {
      return `<i class="mdi mdi-account-school"></i>`
    } else {
      return ``
    }

  }

}