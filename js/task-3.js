//#region Задача 3. Профіль гравця

//Об’єкт profile описує профіль користувача на ігровій платформі. У його властивостях зберігається ім’я профілю username та кількість активних годин playTime, проведених у грі.

{
  const profile = {
    username: 'Jacob',
    playTime: 300,

    getInfo() {
      return `${profile.username} has ${this.playTime} active hours!`; //можна this, можна напряму
    },

    changeUsername(newName) {},

    updatePlayTime(hours) {},
  };

  console.log(profile.getInfo()); // "Jacob has 300 active hours!"

  profile.changeUsername('Marco');
  console.log(profile.getInfo()); // "Jacob has 300 active hours!"

  profile.updatePlayTime(20);
  console.log(profile.getInfo()); // "Jacob has 300 active hours!"
}

//#endregion
