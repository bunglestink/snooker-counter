import {Alert, MenuController, NavController, Page} from 'ionic-angular';

const COLOR_TO_POINTS = {
  red: 1,
  yellow: 2,
  green: 3,
  brown: 4,
  blue: 5,
  pink: 6,
  black: 7
};

@Page({
  templateUrl: 'build/pages/counter/counter.html',
})
export class CounterPage {

    public players;
    public colors: string[];
    private nav;

    constructor(nav: NavController) {
        this.nav = nav;

        this.colors = ['red', 'yellow', 'green', 'brown', 'blue', 'pink', 'black'];

        this.players = [
          {
              name: 'Player 1',
              balls: []
          },
          {
              name: 'Player 2',
              balls: []
          }
        ];

    }

    changeName(player) {
        const prompt = Alert.create({
            title: 'Name',
            message: "Enter the player's name.",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name',
                    value: player.name
                },
                ],
                buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        player.name = data.name;
                    }
                }
            ]
        });

        this.nav.present(prompt);
    }

    addBall(player, color) {
        player.balls.push(color);
    }

    calculateScore(player) {
        return player.balls.reduce((total, ball) => {
            return total + COLOR_TO_POINTS[ball];
        }, 0);
    }

    removeBall(player, ballIndex) {
        const ballColor = player.balls[ballIndex];
        const prompt = Alert.create({
            title: 'Remove Ball',
            message: `Are you sure you wish to remove this
                <span style="color: ${ballColor}">${ballColor}</span> ball for ${player.name}?`,
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Remove',
                    handler: () => {
                        player.balls.splice(ballIndex, 1);
                    }
                }
            ]
        });

        this.nav.present(prompt);
    }
}
