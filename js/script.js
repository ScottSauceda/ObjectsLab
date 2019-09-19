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
// Write a small program that will simulate a battle between your adventurer and an ogre.

// The battle should play out automatically.
// The ogre and adventurer will take turns attacking each other, and statistics will be shown after each attack.
// The ogre's attacks should have random damage value, but the adventurer should always attack with the same value.
// Whenever someone's hitpoints go below zero, the other wins the battle.
// Create objects and have them interact. Remember, you are modeling things from real life. Just like the characters you are modeling, your objects will have properties (qualities) and methods (things they can do).

// How would you define your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?
// How would you define an ogre? Your ogre will want hitpoints, right?
// How could you implement the "attack" functionalities? Should you do this by adding methods to the objects? Should those methods take parameters?
// Use console.log() to show each attack, how many hitpoints the person being attacked loses, and the updated stats for the ogre and adventurer. At the end, log the winner.

const ogre = {
    health: 100,
    attackPoints:  1,
    randomAttackPoints: function() {
        this.attackPoints = this.attackPoints + Math.floor(Math.random() * 30);
    }
}

// Math.floor(Math.random() * 20)

const adventurer = {
    name: 'Young Yoda',
    health: 100,
    attackPoints: 15
}

const game = {
    count: 0
}

// You can use a loop to make the game play out. But what kind of loop? How and when will it stop?
do{
    game.count += 1;
    console.log("Round: " + game.count);

    if(adventurer.health > 1){
        // ogre.attackPoints = 1 + Math.floor(Math.random() * 30)
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
// Would it be helpful to create another object to control and keep track of other data that isn't specifically about the ogre or the adventurer? Such as a game object, perhaps?
// Doing this efficiently requires planning. If you just started coding immediately without thinking through what you're trying to do and planning accordingly, then you're doing it wrong. Timewise, programming is 75–90% planning and 10–25% actually typing code.
