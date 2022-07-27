let pokemon = {
    name: 'Pikachu',
    stats:{
        hp: 100,
        level: 50,
        attack: 86,
        spattack: 86,
        speed: 5000000000,
        belongTo: 'Red'
    }
}
let pikachuSkill = ["Bite", "Thunder Bolt", "Volt Tackle", "Thunderrrr!"];

pokemon.stats.speed -= 60;
pokemon.skill = pikachuSkill;
delete pokemon.stats.belongTo;

console.log(pokemon);