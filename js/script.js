// 2.Me

const Me = {
    name: "Kristyn",
    age: 42,
    email: 'kristyn@foo.bar'
}

// console.log(Me.name);

Me.age = 43;
// console.log(Me.age);

Me['place of residence'] = 'Texas';
// console.log(Me['place of residence']);

const Monster = {
    name: 'Slimer',
    color: 'greenish',
    type: 'plasm or ghost or something'
}

// 3.Slimer

// console.log(Monster.name)

Monster.type = 'creature';

Monster.age = 6;

// console.log(Monster)

Monster.introduce = function(){
    // console.log(`My name is ${this.name} and I am ${this.age}. I am a ${this.color} ${this.type}`);
}

Monster.introduce();

// 4. Ogres
const ogre = {
    health: 100,
    attackPoints:  1,
    randomAttackPoints: function() {
        this.attackPoints = this.attackPoints + Math.floor(Math.random() * 30);
    }
}

const adventurer = {
    name: 'Young Yoda',
    health: 100,
    attackPoints: 15
}

const game = {
    count: 0
}

do{
    game.count += 1;
    console.log("Round: " + game.count);

    if(adventurer.health > 1){
        console.log(adventurer.name + ' swings his lightsaber & does ' + adventurer.attackPoints + ' attack points');
        ogre.health -= adventurer.attackPoints;
            if(ogre.health < 1){
                ogre.health = 0;
                console.log('Ogre has fainted. Young Yoda has won.');
            } else {
            console.log('ogres health is now ' + ogre.health);
            }
    }

    if(ogre.health > 1){
        ogre.randomAttackPoints();
        console.log('Ogre throws mud ' + ogre.attackPoints + ' attack points');
        adventurer.health -= ogre.attackPoints;
        if(adventurer.health < 1){
            adventurer.health = 0;
            console.log('Young Yoda has fainted. Ogre has won.');
        } else {
        console.log(adventurer.name + "'s health is now " + adventurer.health);
        }
    }

        ogre.attackPoints = 0;     
}
while(ogre.health > 0 && adventurer.health > 0);