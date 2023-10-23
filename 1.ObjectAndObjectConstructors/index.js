function Player(name, sport){
    this.name=name;
    this.sport=sport;

    this.sayName= function(){
        console.log(name);
        console.log(sport);
    }

}


const p1= new Player("John", "chess");
p1.sayName()