class UserInfo { //работа с данными пользователя

  constructor(name, job, nameInput, jobInput) {
    this.name = name;
    this.job = job;
    this.nameInput = nameInput;
    this.jobInput = jobInput;
    
}

  setUserInfo(name, job) {
    this.nameInput.value = name;
    this.jobInput.value = job;


}

  updateUserInfo(nameInput, jobInput) {
    this.name.textContent = nameInput;
    this.job.textContent = jobInput;


}

}