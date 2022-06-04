import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import spriteSheet from './assets/Fruits_colored_outline.png'
import cannonBall from './assets/534-5341339_transparent-cannonball-clipart-circle-png-download.jpeg'
import block from './assets/stoneBlock.png'

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('block', block);
        this.load.image('cannonBall', cannonBall);
        this.load.spritesheet("cherry", spriteSheet , {
            frameWidth:16,
            frameHeight:16,
            startFrame:0,
            endFrame: 1
        })
        this.load.spritesheet("apple", spriteSheet , {
            frameWidth:32,
            frameHeight:32,
            startFrame:2,
            endFrame: 3
        })
        this.load.spritesheet("orange", spriteSheet , {
            frameWidth:16,
            frameHeight:16
        })
        this.load.spritesheet("peach", spriteSheet , {
            frameWidth:16,
            frameHeight:16
        })
    }
      
    create ()
    {
        this.matter.world.setBounds(0, 0, 1200, 600, 32, true, true, false, true);


        for (var i = 0; i < 9; i++){
            var block = this.matter.add.image(850,50*i,'block');
            block.setMass(10000);
            block.setDensity(1);
            block.setFriction(1);
            block.setFrictionStatic(1000000000000);
            block.setBounce(1);
            var block = this.matter.add.image(800,50*i,'block');
            block.setMass(10000);
            block.setDensity(1);
            block.setFriction(1);
            block.setFrictionStatic(100000000000);
            block.setBounce(1);
            var block = this.matter.add.image(750,50*i,'block');
            block.setMass(10000);
            block.setDensity(1);
            block.setFriction(1);
            block.setFrictionStatic(10000000000);
            block.setBounce(1);

        }
        


        var vector = new Phaser.Math.Vector2(.5,-0.15)
        var ball = this.matter.add.image(50,50,'cannonBall');
        //ball.setInteractive();
        this.input.keyboard.on('keydown', function(event){

            if (event.keyCode === 32) {
                ball.applyForce(vector);
            } else if (event.keyCode === 38) {
                vector.y = vector.y + 0.1;
                console.log(vector.y);
            } else if (event.keyCode === 40) {
                vector.y = vector.y - 0.1;
                console.log(vector.y);
            } else if (event.keyCode === 39) {
                vector.x = vector.x + 0.1;
                console.log(vector.x);
            } else if (event.keyCode === 37) {
                vector.x = vector.x - 0.1;
                console.log(vector.x);
            }
            else{console.log("wrong key");}
            //console.log(event);
        });

        

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1200,
    height: 600,
    physics: {
        default: 'matter',
        arcade: {
            enableSleeping:true
        }
    },
    scene: MyGame
};

const game = new Phaser.Game(config);
